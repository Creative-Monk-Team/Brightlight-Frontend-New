import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { pathwaysForCaregiverData } from "@/data/pages/pathways-for-caregiver";

export const metadata = generatePageMetadata("pathways-for-caregiver");

export default function PathwaysForCaregiverPage() {
  return <ImmigrationPageLayout data={pathwaysForCaregiverData} />;
}
