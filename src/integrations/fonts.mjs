import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import subsetFont from "subset-font";

// Pretendard dynamic-subset(CDN)은 unicode-range로 쪼개져 있어 한글이 많으면 9요청 232KB까지 간다.
// 사이트가 실제로 쓰는 글자는 얼마 안 되니 빌드된 HTML을 훑어 woff2 한 장으로 굽는다.
// 실적을 추가하면 다음 빌드가 다시 훑으므로 글자가 깨질 일은 없다.

const SOURCE = "src/assets/fonts/PretendardVariable.woff2";
const OUT = "fonts/pretendard-subset.woff2";
// 본문에 안 보여도 폰트에 있어야 하는 것들(폼 입력값·JS로 그리는 텍스트 등)
const BASELINE =
  " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

export default function bakeFonts() {
  return {
    name: "fonts",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let text = BASELINE;
        for (const file of await htmlFiles(root)) {
          // 태그를 벗기지 않는다 — placeholder·alt·aria-label 같은 속성 텍스트도 화면에 보인다.
          // 어차피 고유 글자 집합만 쓰므로 클래스명·URL이 섞여도 ASCII라 손해가 없다.
          text += (await readFile(file, "utf8"))
            .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
            .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
        }
        const chars = [...new Set(text)].join("");
        const subset = await subsetFont(await readFile(SOURCE), chars, {
          targetFormat: "woff2",
          // 쓰는 굵기는 font-light(300)~font-extrabold(800). 축을 좁히면 가변 마스터가 줄어 작아진다.
          variationAxes: { wght: { min: 300, max: 800 } },
        });
        const out = path.join(root, OUT);
        await mkdir(path.dirname(out), { recursive: true });
        await writeFile(out, subset);
        logger.info(
          `Pretendard 서브셋 ${chars.length}자 → ${(subset.length / 1024).toFixed(0)}KB`,
        );
      },
    },
  };
}
