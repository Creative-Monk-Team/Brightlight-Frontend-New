import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { pgwpData } from "@/data/pages/pgwp";

export const metadata = generatePageMetadata("pgwp");

export default function PgwpPage() {
  return <ImmigrationPageLayout data={pgwpData} />;
}
