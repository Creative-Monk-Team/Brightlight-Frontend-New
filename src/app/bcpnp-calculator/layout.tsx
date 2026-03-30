import { generatePageMetadata } from "@/data/generate-metadata";

export const metadata = generatePageMetadata("bcpnp-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
