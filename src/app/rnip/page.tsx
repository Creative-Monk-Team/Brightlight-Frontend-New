import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { rnipData } from "@/data/pages/rnip";

export const metadata = generatePageMetadata("rnip");

export default function RnipPage() {
  return <ImmigrationPageLayout data={rnipData} />;
}
