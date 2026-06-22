// Non-secret config — safe to hardcode (ARNs/bucket/account are already public).
// The only real secret (ADMIN_SECRET) and local-only AWS keys stay in env.
export const AWS_REGION = "ap-northeast-2";
export const AWS_ROLE_ARN = "arn:aws:iam::381491848841:role/hyukbon-app-role";
export const PERF_TABLE = "hyukbon-performance";
export const OTP_TABLE = "hyukbon-otp";
export const S3_BUCKET = "hyukbon-assets-381491848841";
export const S3_PUBLIC_BASE = `https://${S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com`;
export const ADMIN_EMAIL = "da000210@gmail.com";
export const SES_FROM = "noreply@eklab.kr";
