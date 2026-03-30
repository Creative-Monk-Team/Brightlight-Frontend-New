import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { frenchTargetedDrawData } from "@/data/pages/french-targeted-draw";

export const metadata = generatePageMetadata("french-targeted-draw");

export default function FrenchTargetedDrawPage() {
  return <ImmigrationPageLayout data={frenchTargetedDrawData} />;
}
