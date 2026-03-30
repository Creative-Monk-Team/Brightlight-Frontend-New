import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { bridgingOpenWorkPermitData } from "@/data/pages/bridging-open-work-permit";

export const metadata = generatePageMetadata("bridging-open-work-permit");

export default function BridgingOpenWorkPermitPage() {
  return <ImmigrationPageLayout data={bridgingOpenWorkPermitData} />;
}
