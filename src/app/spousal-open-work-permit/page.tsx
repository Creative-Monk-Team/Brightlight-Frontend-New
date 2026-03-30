import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { spousalOpenWorkPermitData } from "@/data/pages/spousal-open-work-permit";

export const metadata = generatePageMetadata("spousal-open-work-permit");

export default function SpousalOpenWorkPermitPage() {
  return <ImmigrationPageLayout data={spousalOpenWorkPermitData} />;
}
