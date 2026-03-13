import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Brightlight Immigration",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-[#f0f4f8]">{children}</div>;
}
