# CLAUDE.md — hyukbon

㈜혁본 소개 사이트. Next.js 16 (App Router) + Tailwind, Vercel 호스팅(hyukbon.com).

## 데이터/인프라 (AWS personal 381491848841, ap-northeast-2)
- 실적=DynamoDB `hyukbon-performance`, 이미지=S3 `hyukbon-assets-381491848841`(`performance/*` public-read). OTP=DynamoDB `hyukbon-otp`(TTL `expiresAt`). 구 `app/assets/performance.ts`+`public/실적` 폐지.
- 읽기=server component가 `lib/db.ts` 직접 호출, 쓰기=`/admin` server action. **공개 REST API 없음.**
- DDB 읽는 페이지는 `export const dynamic = "force-dynamic"` (AWS SDK는 Next 캐시 안 됨 + 빌드때 AWS 접근 회피).
- `next/image`로 S3 이미지 쓰려면 `next.config.mjs` remotePatterns에 버킷 호스트 등록.

## AWS 자격증명
- 프로덕션=Vercel OIDC→role `hyukbon-app-role`(정적 키 없음). 로컬=IAM user `hyukbon-app` 키를 `.env.local`에 `APP_AWS_*` prefix로(Vercel은 `AWS_*` 예약).
- 분기: `process.env.VERCEL` 있으면 OIDC, 없으면 키. 로컬 build/dev=키 경로.
- `lib/config.ts`=비밀 아닌 상수. 유일 secret=`ADMIN_SECRET`(env var, 절대 커밋 금지).

## Admin
- `/admin` 이메일 OTP 로그인(비번 없음). SES 발신 `noreply@eklab.kr`(이 계정에 eklab.kr 등 도메인 검증됨→주소검증 불필요), 수신 `da000210@gmail.com`.

## Gotchas
- AWS CLI: `--profile personal` 필수(default=회사). 글로벌 플래그를 쉘 변수(`$P`)로 넘기면 "Unknown options"→매 호출 인라인.
- 한글 텍스트는 `grep`에서 깨짐→데이터 파싱은 node로.
