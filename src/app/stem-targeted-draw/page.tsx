import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { stemTargetedDrawData } from "@/data/pages/stem-targeted-draw";

export const metadata = generatePageMetadata("stem-targeted-draw");

export default function StemTargetedDrawPage() {
  return <ImmigrationPageLayout data={stemTargetedDrawData} />;
}
