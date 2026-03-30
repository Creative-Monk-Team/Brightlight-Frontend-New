import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { openWorkVulnerableLpData } from "@/data/pages/open-work-vulnerable-lp";

export const metadata = generatePageMetadata("open-work-vulnerable-lp");

export default function OpenWorkVulnerableLpPage() {
  return <ImmigrationPageLayout data={openWorkVulnerableLpData} />;
}
