import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { temporaryResidencyData } from "@/data/pages/temporary-residency";

export const metadata = generatePageMetadata("temporary-residency");

export default function TemporaryResidencyPage() {
  return <ImmigrationPageLayout data={temporaryResidencyData} />;
}
