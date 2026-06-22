import type { Metadata } from "next";

// Keep the whole /admin/* surface out of search engines.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
