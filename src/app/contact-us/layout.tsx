import { generatePageMetadata } from "@/data/generate-metadata";

export const metadata = generatePageMetadata("contact-us");

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
