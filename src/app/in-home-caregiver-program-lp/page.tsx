import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { inHomeCaregiverProgramLpData } from "@/data/pages/in-home-caregiver-program-lp";

export const metadata = generatePageMetadata("in-home-caregiver-program-lp");

export default function InHomeCaregiverProgramLpPage() {
  return <ImmigrationPageLayout data={inHomeCaregiverProgramLpData} />;
}
