"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import FloatingButton from "@/components/floating-button";

// Pages where navbar should use blue logo/icons (white/light background pages)
// Pages where navbar should use blue logo/icons (white/light background pages)
// All other pages default to white (for dark banner backgrounds)
const BLUE_NAVBAR_PAGES = [
  "/",
];

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  const showBlue = BLUE_NAVBAR_PAGES.includes(pathname || "");

  return (
    <>
      <Navbar showBlue={showBlue} />
      {children}
      <Footer />
      <FloatingButton />
    </>
  );
}
