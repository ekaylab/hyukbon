import "server-only";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { AWS_REGION, awsCredentials } from "./aws";
import { S3_BUCKET as BUCKET, S3_PUBLIC_BASE as PUBLIC_BASE } from "./config";

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
