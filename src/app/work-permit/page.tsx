import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { workPermitData } from "@/data/pages/work-permit";

export const metadata = generatePageMetadata("work-permit");

export default function WorkPermitPage() {
  return <ImmigrationPageLayout data={workPermitData} />;
}
