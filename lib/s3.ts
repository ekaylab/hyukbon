import "server-only";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { AWS_REGION, awsCredentials } from "./aws";

const BUCKET = process.env.S3_BUCKET!;
const PUBLIC_BASE = process.env.S3_PUBLIC_BASE!;

const s3 = new S3Client({ region: AWS_REGION, credentials: awsCredentials });

export async function uploadImage(
  key: string,
  body: Buffer,
  contentType: string,
): Promise<string> {
  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
    }),
  );
  return `${PUBLIC_BASE}/${key}`;
}

export async function deleteImage(key: string): Promise<void> {
  if (!key) return;
  await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }));
}
