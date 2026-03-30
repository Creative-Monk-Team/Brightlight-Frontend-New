import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { sameSexData } from "@/data/pages/same-sex";

export const metadata = generatePageMetadata("same-sex");

export default function SameSexPage() {
  return <ImmigrationPageLayout data={sameSexData} />;
}
