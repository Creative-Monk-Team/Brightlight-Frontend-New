import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { spouseInlandData } from "@/data/pages/spouse-inland";

export const metadata = generatePageMetadata("spouse-inland");

export default function SpouseInlandPage() {
  return <ImmigrationPageLayout data={spouseInlandData} />;
}
