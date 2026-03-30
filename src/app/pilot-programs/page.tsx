import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { pilotProgramsData } from "@/data/pages/pilot-programs";

export const metadata = generatePageMetadata("pilot-programs");

export default function PilotProgramsPage() {
  return <ImmigrationPageLayout data={pilotProgramsData} />;
}
