import type { ImageMetadata } from "astro";
import data from "../data/performance.json";

export type Performance = {
  id: string;
  category: string;
  name: string;
  address: string;
  units: string;
  scale: string;
  year: string;
  contractor: string;
  residential: boolean;
  order: number;
  image: string;
};

export const CATEGORIES = [
  "공동주택",
  "상업시설",
  "오피스텔",
  "오피스",
  "생활숙박시설",
] as const;

export const performance = (data as Performance[])
  .slice()
  .sort((a, b) => a.order - b.order);

// Build-time map: image filename -> optimizable ImageMetadata.
const imported = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/performance/*.{jpg,jpeg,png}",
  { eager: true },
);

export const images: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(imported)) {
  const file = path.split("/").pop();
  if (file) images[file] = mod.default;
}

export function imageFor(name: string): ImageMetadata | undefined {
  return images[name];
}
