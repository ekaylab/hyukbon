import { notFound } from "next/navigation";
import { requireAuth } from "@/lib/auth";
import { getPerformance } from "@/lib/db";
import PerformanceForm from "../../PerformanceForm";

export const dynamic = "force-dynamic";

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAuth();
  const { id } = await params;
  const item = await getPerformance(id);
  if (!item) notFound();
  return (
    <main className="mx-auto max-w-xl px-6 py-10">
      <h1 className="mb-6 text-24 font-bold">실적 수정</h1>
      <PerformanceForm item={item} />
    </main>
  );
}
