import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { healthAuthorityStreamData } from "@/data/pages/health-authority-stream";

export const metadata = generatePageMetadata("health-authority-stream");

export default function HealthAuthorityStreamPage() {
  return <ImmigrationPageLayout data={healthAuthorityStreamData} />;
}
