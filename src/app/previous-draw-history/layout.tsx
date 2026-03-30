import { generatePageMetadata } from "@/data/generate-metadata";

export const metadata = generatePageMetadata("previous-draw-history");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
