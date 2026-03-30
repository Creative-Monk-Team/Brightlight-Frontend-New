import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { nonSdsData } from "@/data/pages/non-sds";

export const metadata = generatePageMetadata("non-sds");

export default function NonSdsPage() {
  return <ImmigrationPageLayout data={nonSdsData} />;
}
