"use client";
import Link from "next/link";
import { savePerformanceAction } from "./actions";
import { CATEGORIES, type Performance } from "@/lib/performance";

const FIELDS: { name: keyof Performance; label: string }[] = [
  { name: "name", label: "사업명" },
  { name: "address", label: "위치" },
  { name: "units", label: "세대수" },
  { name: "scale", label: "규모" },
  { name: "year", label: "일시" },
  { name: "contractor", label: "건설사" },
];

export default function PerformanceForm({ item }: { item?: Performance }) {
  return (
    <form action={savePerformanceAction} className="flex flex-col gap-4">
      {item && <input type="hidden" name="id" value={item.id} />}

      <label className="flex flex-col gap-1">
        <span className="text-14 text-neutral-600">카테고리</span>
        <select
          name="category"
          defaultValue={item?.category ?? CATEGORIES[0]}
          className="rounded-lg border px-3 py-2"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      {FIELDS.map((f) => (
        <label key={f.name} className="flex flex-col gap-1">
          <span className="text-14 text-neutral-600">{f.label}</span>
          <input
            name={f.name}
            defaultValue={(item?.[f.name] as string) ?? ""}
            required={f.name === "name"}
            className="rounded-lg border px-3 py-2"
          />
        </label>
      ))}

      <label className="flex items-center gap-2">
        <input type="checkbox" name="residential" defaultChecked={item?.residential ?? false} />
        <span className="text-14 text-neutral-600">주거형 (residential)</span>
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-14 text-neutral-600">
          대표 이미지 {item?.imageUrl && "(비워두면 기존 이미지 유지)"}
        </span>
        <input type="file" name="image" accept="image/*" />
        {item?.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.imageUrl} alt={item.name} className="mt-2 h-32 w-48 rounded object-cover" />
        )}
      </label>

      <div className="mt-4 flex gap-3">
        <button className="rounded-lg bg-neutral-800 px-5 py-2.5 text-15 text-white">저장</button>
        <Link href="/admin" className="rounded-lg border px-5 py-2.5 text-15">
          취소
        </Link>
      </div>
    </form>
  );
}
