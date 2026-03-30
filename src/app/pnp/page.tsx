import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { pnpData } from "@/data/pages/pnp";

export const metadata = generatePageMetadata("pnp");

export default function PnpPage() {
  return <ImmigrationPageLayout data={pnpData} />;
}
