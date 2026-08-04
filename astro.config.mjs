// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://hyukbon.com",
  // /recruite는 "별도 공지 예정"만 있어 noindex — 사이트맵에서도 뺀다
  integrations: [sitemap({ filter: (page) => !page.includes("/recruite/") })],

  vite: {
    plugins: [tailwindcss()],
  },
});
