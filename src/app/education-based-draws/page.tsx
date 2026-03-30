import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { educationBasedDrawsData } from "@/data/pages/education-based-draws";

export const metadata = generatePageMetadata("education-based-draws");

export default function EducationBasedDrawsPage() {
  return <ImmigrationPageLayout data={educationBasedDrawsData} />;
}
