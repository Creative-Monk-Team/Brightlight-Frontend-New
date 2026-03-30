import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { cbyData } from "@/data/pages/cby";

export const metadata = generatePageMetadata("cby");

export default function CbyPage() {
  return <ImmigrationPageLayout data={cbyData} />;
}
