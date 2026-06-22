import "server-only";
import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "hb_session";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const SECRET = process.env.ADMIN_SECRET!;

function sign(value: string): string {
  return crypto.createHmac("sha256", SECRET).update(value).digest("hex");
}

// token = "<expiryEpoch>.<hmac>"
function makeToken(): string {
  const exp = String(Math.floor(Date.now() / 1000) + MAX_AGE);
  return `${exp}.${sign(exp)}`;
}

function verifyToken(token: string | undefined): boolean {
  if (!token) return false;
  const [exp, mac] = token.split(".");
  if (!exp || !mac) return false;
  const expected = sign(exp);
  if (mac.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expected))) return false;
  return Number(exp) > Math.floor(Date.now() / 1000);
}

export async function createSession(): Promise<void> {
  const jar = await cookies();
  jar.set(COOKIE, makeToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function destroySession(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export async function isAuthed(): Promise<boolean> {
  const jar = await cookies();
  return verifyToken(jar.get(COOKIE)?.value);
}

// Guard for server components / server actions. Redirects to login if unauthed.
export async function requireAuth(): Promise<void> {
  if (!(await isAuthed())) redirect("/admin/login");
}
