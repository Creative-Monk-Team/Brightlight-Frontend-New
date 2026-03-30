import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { adoptionData } from "@/data/pages/adoption";

export const metadata = generatePageMetadata("adoption");

export default function AdoptionPage() {
  return <ImmigrationPageLayout data={adoptionData} />;
}
