import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { federalSkilledWorkerProgramData } from "@/data/pages/federal-skilled-worker-program";

export const metadata = generatePageMetadata("federal-skilled-worker-program");

export default function FederalSkilledWorkerProgramPage() {
  return <ImmigrationPageLayout data={federalSkilledWorkerProgramData} />;
}
