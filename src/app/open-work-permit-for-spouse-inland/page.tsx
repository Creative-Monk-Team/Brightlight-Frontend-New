import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { openWorkPermitForSpouseInlandData } from "@/data/pages/open-work-permit-for-spouse-inland";

export const metadata = generatePageMetadata("open-work-permit-for-spouse-inland");

export default function OpenWorkPermitForSpouseInlandPage() {
  return <ImmigrationPageLayout data={openWorkPermitForSpouseInlandData} />;
}
