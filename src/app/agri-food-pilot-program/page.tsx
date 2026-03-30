import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { agriFoodPilotProgramData } from "@/data/pages/agri-food-pilot-program";

export const metadata = generatePageMetadata("agri-food-pilot-program");

export default function AgriFoodPilotProgramPage() {
  return <ImmigrationPageLayout data={agriFoodPilotProgramData} />;
}
