import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { sdsData } from "@/data/pages/sds";

export const metadata = generatePageMetadata("sds");

export default function SdsPage() {
  return <ImmigrationPageLayout data={sdsData} />;
}
