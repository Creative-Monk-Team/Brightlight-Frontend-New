import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { prioritiesProgramData } from "@/data/pages/priorities-program";

export const metadata = generatePageMetadata("priorities-program");

export default function PrioritiesProgramPage() {
  return <ImmigrationPageLayout data={prioritiesProgramData} />;
}
