import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { spouseOutlandData } from "@/data/pages/spouse-outland";

export const metadata = generatePageMetadata("spouse-outland");

export default function SpouseOutlandPage() {
  return <ImmigrationPageLayout data={spouseOutlandData} />;
}
