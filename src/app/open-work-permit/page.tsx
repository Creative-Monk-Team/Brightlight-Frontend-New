import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { openWorkPermitData } from "@/data/pages/open-work-permit";

export const metadata = generatePageMetadata("open-work-permit");

export default function OpenWorkPermitPage() {
  return <ImmigrationPageLayout data={openWorkPermitData} />;
}
