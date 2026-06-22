import Link from "next/link";
import Image from "next/image";
import { requireAuth } from "@/lib/auth";
import { getAllPerformance } from "@/lib/db";
import { logoutAction } from "./actions";
import DeleteButton from "./DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await requireAuth();
  const list = await getAllPerformance();

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-28 font-bold">실적 관리 ({list.length})</h1>
        <div className="flex items-center gap-3">
          <Link href="/admin/new" className="rounded-lg bg-neutral-800 px-4 py-2 text-14 text-white">
            + 새 실적
          </Link>
          <form action={logoutAction}>
            <button className="rounded-lg border px-4 py-2 text-14">로그아웃</button>
          </form>
        </div>
      </div>

      <ul className="mt-8 divide-y">
        {list.map((p) => (
          <li key={p.id} className="flex items-center gap-4 py-3">
            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded bg-neutral-100">
              {p.imageUrl && <Image src={p.imageUrl} alt={p.name} fill className="object-cover" />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-16 font-medium">{p.name}</p>
              <p className="truncate text-13 text-neutral-500">
                {p.category} · {p.address}
              </p>
            </div>
            <Link href={`/admin/edit/${p.id}`} className="rounded border px-3 py-1.5 text-13">
              수정
            </Link>
            <DeleteButton id={p.id} name={p.name} />
          </li>
        ))}
      </ul>
    </main>
  );
}
