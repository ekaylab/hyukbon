# CLAUDE.md — hyukbon

㈜혁본 회사소개 사이트. **Astro (전정적) + Tailwind v4**, Cloudflare Pages 호스팅(hyukbon.com).
2026-07 Next.js/Vercel → Astro/Cloudflare 이전. DB·서버로직 전면 제거.

## 데이터
- 실적 54건 = `src/data/performance.json`, 이미지 = `src/assets/performance/<id>.jpg`(astro:assets가 빌드때 webp 최적화·리사이즈). **DB 없음.**
- 편집 = 파일 수정 → git push → CF Pages 자동 재빌드. 별도 admin/API 없음.
- 데이터·이미지 로더 = `src/lib/performance.ts` (glob으로 파일명→ImageMetadata 매핑).

## 구조 주의점
- 커스텀 Tailwind 토큰(text-14/…/50, color main·txt-01~06, breakpoint esa/xxs/…, container-1200)은 **`src/styles/global.css`의 `@theme`** (v4는 config 파일 안 씀).
- `/performance` 카테고리 필터 = 클라이언트 JS 탭(전 항목 DOM 렌더 후 토글). 쿼리파라미터 아님.
- 메인 캐러셀 = **vanilla embla**(`src/components/PerformanceCarousel.astro`), React island 아님.
- 라우팅 = 파일기반(`src/pages`). 공개 정적 이미지는 `public/`(로고·메인·PDF 등), 최적화 대상 실적 이미지만 `src/assets`.
- sitemap = `@astrojs/sitemap` 자동(`/sitemap-index.xml`), robots = `public/robots.txt`.

## 배포
- CF Pages git 연동. build=`astro build`, output=`dist/`. adapter 불필요(전정적).
- `wrangler pages deploy dist`로 수동 배포도 가능(로그인됨).

## 폐지된 구 아키텍처 (참고)
- 구: DynamoDB `hyukbon-performance`+`hyukbon-otp`, S3 `hyukbon-assets-381491848841`, SES OTP admin 로그인, Vercel OIDC role `hyukbon-app-role`, IAM user `hyukbon-app`. 전부 미사용.
- ⚠️ **AWS 리소스는 아직 살아있음(비용·보안면).** 실적 데이터는 `migrate/`(gitignore)로 export 완료 → DDB 테이블·S3 버킷·SES·IAM role/user 폐기(decommission) 남음.
