import { requireAuth } from "@/lib/auth";
import PerformanceForm from "../PerformanceForm";

export const dynamic = "force-dynamic";

export default async function NewPage() {
  await requireAuth();
  return (
    <main className="mx-auto max-w-xl px-6 py-10">
      <h1 className="mb-6 text-24 font-bold">새 실적 등록</h1>
      <PerformanceForm />
    </main>
  );
}
