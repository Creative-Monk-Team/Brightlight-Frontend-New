import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { agricultureAgriFoodOccupationData } from "@/data/pages/agriculture-agri-food-occupation";

export const metadata = generatePageMetadata("agriculture-agri-food-occupation");

export default function AgricultureAgriFoodOccupationPage() {
  return <ImmigrationPageLayout data={agricultureAgriFoodOccupationData} />;
}
