import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { rcipData } from "@/data/pages/rcip";

export const metadata = generatePageMetadata("rcip");

export default function RcipPage() {
  return <ImmigrationPageLayout data={rcipData} />;
}
