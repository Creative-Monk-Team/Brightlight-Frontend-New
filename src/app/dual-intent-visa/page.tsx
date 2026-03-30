import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { dualIntentVisaData } from "@/data/pages/dual-intent-visa";

export const metadata = generatePageMetadata("dual-intent-visa");

export default function DualIntentVisaPage() {
  return <ImmigrationPageLayout data={dualIntentVisaData} />;
}
