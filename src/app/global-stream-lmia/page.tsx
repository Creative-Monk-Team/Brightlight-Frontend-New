import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { globalStreamLmiaData } from "@/data/pages/global-stream-lmia";

export const metadata = generatePageMetadata("global-stream-lmia");

export default function GlobalStreamLmiaPage() {
  return <ImmigrationPageLayout data={globalStreamLmiaData} />;
}
