"use client";
import { deletePerformanceAction } from "./actions";

export default function DeleteButton({ id, name }: { id: string; name: string }) {
  return (
    <form
      action={deletePerformanceAction}
      onSubmit={(e) => {
        if (!confirm(`"${name}" 실적을 삭제할까요? 되돌릴 수 없습니다.`)) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button className="rounded border border-red-300 px-3 py-1.5 text-13 text-red-600">
        삭제
      </button>
    </form>
  );
}
