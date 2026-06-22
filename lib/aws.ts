import "server-only";
import { awsCredentialsProvider } from "@vercel/functions/oidc";
import { AWS_REGION, AWS_ROLE_ARN } from "./config";

export { AWS_REGION };

// On Vercel: assume IAM role via OIDC — no static keys.
// Locally (dev / migration): static keys from .env.local.
export const awsCredentials = process.env.VERCEL
  ? awsCredentialsProvider({ roleArn: AWS_ROLE_ARN })
  : {
      accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.APP_AWS_SECRET_ACCESS_KEY!,
    };
