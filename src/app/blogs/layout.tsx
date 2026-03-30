import { generatePageMetadata } from "@/data/generate-metadata";

export const metadata = generatePageMetadata("blogs");

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
