import "server-only";
import crypto from "node:crypto";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const TABLE = process.env.OTP_TABLE!;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;
const SES_FROM = process.env.SES_FROM!;
const TTL_SECONDS = 600; // 10 min
const MAX_ATTEMPTS = 5;

const region = process.env.APP_AWS_REGION;
const credentials = {
  accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.APP_AWS_SECRET_ACCESS_KEY!,
};

const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({ region, credentials }));
const ses = new SESv2Client({ region, credentials });

function hash(code: string): string {
  return crypto.createHash("sha256").update(code + process.env.ADMIN_SECRET).digest("hex");
}

// Generate + store + email a 6-digit OTP to the admin address.
export async function requestOtp(): Promise<void> {
  const code = String(crypto.randomInt(0, 1_000_000)).padStart(6, "0");
  const now = Math.floor(Date.now() / 1000);
  await ddb.send(
    new PutCommand({
      TableName: TABLE,
      Item: {
        email: ADMIN_EMAIL,
        codeHash: hash(code),
        attempts: 0,
        expiresAt: now + TTL_SECONDS,
      },
    }),
  );
  await ses.send(
    new SendEmailCommand({
      FromEmailAddress: SES_FROM,
      Destination: { ToAddresses: [ADMIN_EMAIL] },
      Content: {
        Simple: {
          Subject: { Data: `[혁본 관리자] 로그인 인증코드 ${code}` },
          Body: {
            Text: {
              Data: `혁본 관리자 로그인 인증코드: ${code}\n\n10분 내에 입력하세요.\n본인이 요청하지 않았다면 무시하세요.`,
            },
          },
        },
      },
    }),
  );
}

// Verify a submitted code. Returns true on success (and consumes the OTP).
export async function verifyOtp(code: string): Promise<boolean> {
  const res = await ddb.send(new GetCommand({ TableName: TABLE, Key: { email: ADMIN_EMAIL } }));
  const item = res.Item;
  const now = Math.floor(Date.now() / 1000);
  if (!item || item.expiresAt < now) return false;
  if (item.attempts >= MAX_ATTEMPTS) {
    await ddb.send(new DeleteCommand({ TableName: TABLE, Key: { email: ADMIN_EMAIL } }));
    return false;
  }
  const ok =
    hash(code).length === item.codeHash.length &&
    crypto.timingSafeEqual(Buffer.from(hash(code)), Buffer.from(item.codeHash));
  if (!ok) {
    await ddb.send(
      new PutCommand({
        TableName: TABLE,
        Item: { ...item, attempts: item.attempts + 1 },
      }),
    );
    return false;
  }
  await ddb.send(new DeleteCommand({ TableName: TABLE, Key: { email: ADMIN_EMAIL } }));
  return true;
}
