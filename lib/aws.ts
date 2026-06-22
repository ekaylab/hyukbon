import "server-only";
import { awsCredentialsProvider } from "@vercel/functions/oidc";

export const AWS_REGION = process.env.APP_AWS_REGION;

// On Vercel: assume IAM role via OIDC — no static keys.
// Locally (dev / migration): static keys from .env.local.
export const awsCredentials = process.env.VERCEL
  ? awsCredentialsProvider({ roleArn: process.env.AWS_ROLE_ARN! })
  : {
      accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.APP_AWS_SECRET_ACCESS_KEY!,
    };
