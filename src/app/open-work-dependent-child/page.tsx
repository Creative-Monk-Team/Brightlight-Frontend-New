import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { openWorkDependentChildData } from "@/data/pages/open-work-dependent-child";

export const metadata = generatePageMetadata("open-work-dependent-child");

export default function OpenWorkDependentChildPage() {
  return <ImmigrationPageLayout data={openWorkDependentChildData} />;
}
