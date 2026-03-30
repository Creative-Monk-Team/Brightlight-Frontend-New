import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { reconsiderationData } from "@/data/pages/reconsideration";

export const metadata = generatePageMetadata("reconsideration");

export default function ReconsiderationPage() {
  return <ImmigrationPageLayout data={reconsiderationData} />;
}
