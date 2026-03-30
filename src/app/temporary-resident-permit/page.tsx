import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { temporaryResidentPermitData } from "@/data/pages/temporary-resident-permit";

export const metadata = generatePageMetadata("temporary-resident-permit");

export default function TemporaryResidentPermitPage() {
  return <ImmigrationPageLayout data={temporaryResidentPermitData} />;
}
