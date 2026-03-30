import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { healthcareTargetedDrawData } from "@/data/pages/healthcare-targeted-draw";

export const metadata = generatePageMetadata("healthcare-targeted-draw");

export default function HealthcareTargetedDrawPage() {
  return <ImmigrationPageLayout data={healthcareTargetedDrawData} />;
}
