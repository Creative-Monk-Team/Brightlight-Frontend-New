import { generatePageMetadata } from "@/data/generate-metadata";

export const metadata = generatePageMetadata("federal-skilled");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
