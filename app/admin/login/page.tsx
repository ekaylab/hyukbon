"use client";
import { useActionState, useState } from "react";
import { sendCodeAction, loginAction } from "../actions";

export default function LoginPage() {
  const [sent, setSent] = useState(false);
  const [sendState, send, sending] = useActionState(
    async () => {
      const res = await sendCodeAction();
      if (res.sent) setSent(true);
      return res;
    },
    {} as { error?: string; sent?: boolean },
  );
  const [loginState, login, loggingIn] = useActionState(loginAction, {} as { error?: string });

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-6">
      <h1 className="text-28 font-bold">혁본 관리자</h1>
      <p className="mt-2 text-14 text-neutral-500">
        등록된 관리자 이메일로 인증코드를 보냅니다.
      </p>

      {!sent ? (
        <form action={send} className="mt-8">
          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-lg bg-neutral-800 py-3 text-16 text-white disabled:opacity-50"
          >
            {sending ? "발송 중…" : "인증코드 받기"}
          </button>
          {sendState?.error && (
            <p className="mt-3 text-14 text-red-600">{sendState.error}</p>
          )}
        </form>
      ) : (
        <form action={login} className="mt-8 flex flex-col gap-3">
          <p className="text-14 text-green-700">이메일로 보낸 6자리 코드를 입력하세요.</p>
          <input
            name="code"
            inputMode="numeric"
            maxLength={6}
            autoFocus
            placeholder="000000"
            className="rounded-lg border px-4 py-3 text-center text-22 tracking-[0.4em]"
          />
          <button
            type="submit"
            disabled={loggingIn}
            className="rounded-lg bg-neutral-800 py-3 text-16 text-white disabled:opacity-50"
          >
            {loggingIn ? "확인 중…" : "로그인"}
          </button>
          {loginState?.error && (
            <p className="text-14 text-red-600">{loginState.error}</p>
          )}
          <button
            type="button"
            onClick={() => setSent(false)}
            className="text-13 text-neutral-400 underline"
          >
            코드 다시 받기
          </button>
        </form>
      )}
    </main>
  );
}
