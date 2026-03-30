import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { orphanData } from "@/data/pages/orphan";

export const metadata = generatePageMetadata("orphan");

export default function OrphanPage() {
  return <ImmigrationPageLayout data={orphanData} />;
}
