"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface AdminHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function AdminHeader({
  title = "Brightlight Admin",
  subtitle,
}: AdminHeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("bl_admin_token");
    localStorage.removeItem("bl_admin_user");
    router.replace("/admin");
  };

  const username =
    typeof window !== "undefined"
      ? localStorage.getItem("bl_admin_user") || "Admin"
      : "Admin";

  return (
    <header className="bg-primary text-white px-8 py-4 flex items-center justify-between shadow-lg">
      <div>
        <h1 className="text-[20px] font-bold">{title}</h1>
        <p className="text-[13px] text-white/60">{subtitle || `Welcome, ${username}`}</p>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/admin/dashboard"
          className="text-[13px] text-white/70 hover:text-white no-underline transition-colors duration-200"
        >
          Dashboard
        </Link>
        <Link
          href="/"
          className="text-[13px] text-white/70 hover:text-white no-underline transition-colors duration-200"
        >
          View Site
        </Link>
        <button
          onClick={handleLogout}
          className="text-[13px] bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
