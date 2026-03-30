import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { skilledWorkerStreamData } from "@/data/pages/skilled-worker-stream";

export const metadata = generatePageMetadata("skilled-worker-stream");

export default function SkilledWorkerStreamPage() {
  return <ImmigrationPageLayout data={skilledWorkerStreamData} />;
}
