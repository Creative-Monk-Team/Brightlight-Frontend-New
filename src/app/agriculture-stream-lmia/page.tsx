import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { agricultureStreamLmiaData } from "@/data/pages/agriculture-stream-lmia";

export const metadata = generatePageMetadata("agriculture-stream-lmia");

export default function AgricultureStreamLmiaPage() {
  return <ImmigrationPageLayout data={agricultureStreamLmiaData} />;
}
