import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { superVisaData } from "@/data/pages/super-visa";

export const metadata = generatePageMetadata("super-visa");

export default function SuperVisaPage() {
  return <ImmigrationPageLayout data={superVisaData} />;
}
