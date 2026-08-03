# CLAUDE.md — hyukbon

㈜혁본 회사소개 사이트. **Astro (전정적) + Tailwind v4**, Cloudflare Workers static assets 호스팅(hyukbon.com).
2026-07 Next.js/Vercel → Astro/Cloudflare 이전. DB·서버로직 전면 제거.

## 데이터
- 실적 54건 = `src/data/performance.json`, 이미지 = `src/assets/performance/<id>.jpg`(astro:assets가 빌드때 webp 최적화·리사이즈). **DB 없음.**
- 편집 = 파일 수정 → git push → CF 자동 재빌드. 별도 admin/API 없음.
- 데이터·이미지 로더 = `src/lib/performance.ts` (glob으로 파일명→ImageMetadata 매핑).

## 구조 주의점
- 커스텀 Tailwind 토큰(text-14/…/50, color main·txt-01~06, breakpoint esa/xxs/…, container-1200)은 **`src/styles/global.css`의 `@theme`** (v4는 config 파일 안 씀).
- 2026-08 리뉴얼: 팔레트 = 로고 기준 먹색·웜화이트·혁본레드(ivory/ink/sandline/olive + 기존 main). 홈 히어로·통계는 performance.json에서 빌드 시 계산(총 현장·시공사·진행중) — 데이터 추가하면 자동 갱신. 메인·스톡 이미지 대신 실적 조감도 사용.
- `/performance` 카테고리 필터 = 클라이언트 JS 탭(전 항목 DOM 렌더 후 토글). 쿼리파라미터 아님.
- 메인 캐러셀(embla)은 리뉴얼 때 그리드로 대체·삭제(컴포넌트·deps 제거).
- 라우팅 = 파일기반(`src/pages`). 공개 정적 이미지는 `public/`(로고·메인·PDF 등), 최적화 대상 실적 이미지만 `src/assets`.
- sitemap = `@astrojs/sitemap` 자동(`/sitemap-index.xml`), robots = `public/robots.txt`.

## 배포
- **Pages 아님 = Worker(static assets)**. 대시보드 "Workers & Pages"에 같이 보여서 헷갈림. API도 `/workers/scripts`, `wrangler pages *` 명령은 안 먹음(프로젝트 0건).
- CF 대시보드 git 연동 빌드. build=`astro build`, output=`dist/`. **adapter 절대 넣지 마라** — `@astrojs/cloudflare` 붙으면 SSR 전환돼 이미지가 런타임 `/_image?href=`로 나가는데 서버가 안 도니 전부 404(2026-07 CF 봇 PR이 이 짓 함, `2ea9d91`에서 원복).
- `wrangler.jsonc` = assets-only(`main` 없음). 로컬 `wrangler deploy` 하면 대시보드 빌드본 덮어씀. 하지 마라.
- 커스텀도메인(apex+www) = `PUT /accounts/{acc}/workers/domains` 로 붙임. DNS 레코드는 CF가 자동 생성·관리(존에 직접 안 보임).

## 폐지된 구 아키텍처 (참고)
- 구: DynamoDB `hyukbon-performance`+`hyukbon-otp`, S3 `hyukbon-assets-381491848841`, SES OTP admin 로그인, Vercel OIDC role `hyukbon-app-role`, IAM user `hyukbon-app`.
- **AWS 리소스 2026-07 전부 삭제 완료** (DDB 2테이블·S3 버킷·IAM role·IAM user+key). 데이터는 `migrate/`(로컬·gitignore)에 백업.
- 보존: SES 도메인 ID(eklab.kr 등 — 타 사업 공유), Vercel OIDC provider `oidc.vercel.com/ekankr2s-projects`(타 프로젝트 공유가능). 둘 다 hyukbon 전용 아님.
