import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { bcPnpData } from "@/data/pages/bc-pnp";

export const metadata = generatePageMetadata("bc-pnp");

export default function BcPnpPage() {
  return <ImmigrationPageLayout data={bcPnpData} />;
}
