"use server";
import crypto from "node:crypto";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requestOtp, verifyOtp } from "@/lib/otp";
import { createSession, destroySession, requireAuth } from "@/lib/auth";
import { getPerformance, putPerformance, deletePerformance } from "@/lib/db";
import { uploadImage, deleteImage } from "@/lib/s3";
import type { Performance } from "@/lib/performance";

type State = { error?: string; sent?: boolean };

function revalidatePublic() {
  revalidatePath("/");
  revalidatePath("/performance");
  revalidatePath("/admin");
}

export async function sendCodeAction(): Promise<State> {
  try {
    await requestOtp();
    return { sent: true };
  } catch {
    return { error: "인증코드 발송에 실패했습니다. 잠시 후 다시 시도하세요." };
  }
}

export async function loginAction(_prev: State, formData: FormData): Promise<State> {
  const code = String(formData.get("code") ?? "").trim();
  if (!/^\d{6}$/.test(code)) return { error: "6자리 숫자 코드를 입력하세요." };
  if (!(await verifyOtp(code))) return { error: "코드가 올바르지 않거나 만료되었습니다." };
  await createSession();
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}

export async function savePerformanceAction(formData: FormData): Promise<void> {
  await requireAuth();
  const rawId = String(formData.get("id") ?? "");
  const id = rawId || crypto.randomUUID();
  const existing = rawId ? await getPerformance(id) : null;

  let imageKey = existing?.imageKey ?? "";
  let imageUrl = existing?.imageUrl ?? "";
  const file = formData.get("image");
  if (file && typeof file !== "string" && file.size > 0) {
    const key = `performance/${id}.jpg`;
    const buf = Buffer.from(await file.arrayBuffer());
    imageUrl = await uploadImage(key, buf, file.type || "image/jpeg");
    imageKey = key;
  }

  const item: Performance = {
    id,
    category: String(formData.get("category") ?? "").trim(),
    name: String(formData.get("name") ?? "").trim(),
    address: String(formData.get("address") ?? "").trim(),
    units: String(formData.get("units") ?? "").trim(),
    scale: String(formData.get("scale") ?? "").trim(),
    year: String(formData.get("year") ?? "").trim(),
    contractor: String(formData.get("contractor") ?? "").trim(),
    residential: formData.get("residential") === "on",
    imageKey,
    imageUrl,
    order: existing?.order ?? Date.now(),
    createdAt: existing?.createdAt ?? new Date().toISOString(),
  };
  await putPerformance(item);
  revalidatePublic();
  redirect("/admin");
}

export async function deletePerformanceAction(formData: FormData): Promise<void> {
  await requireAuth();
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  const item = await getPerformance(id);
  if (item?.imageKey) await deleteImage(item.imageKey);
  await deletePerformance(id);
  revalidatePublic();
  redirect("/admin");
}
