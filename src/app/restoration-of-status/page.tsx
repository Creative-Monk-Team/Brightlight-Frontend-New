import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { restorationOfStatusData } from "@/data/pages/restoration-of-status";

export const metadata = generatePageMetadata("restoration-of-status");

export default function RestorationOfStatusPage() {
  return <ImmigrationPageLayout data={restorationOfStatusData} />;
}
