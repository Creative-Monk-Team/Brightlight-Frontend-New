import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { citizenshipData } from "@/data/pages/citizenship";

export const metadata = generatePageMetadata("citizenship");

export default function CitizenshipPage() {
  return <ImmigrationPageLayout data={citizenshipData} />;
}
