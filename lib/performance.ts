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
  imageKey: string;
  imageUrl: string;
  order: number;
  createdAt: string;
};

export const CATEGORIES = [
  "공동주택",
  "오피스텔",
  "타운하우스",
  "상업시설",
  "오피스",
  "생활숙박시설",
] as const;
