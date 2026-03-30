import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { prRenewalData } from "@/data/pages/pr-renewal";

export const metadata = generatePageMetadata("pr-renewal");

export default function PrRenewalPage() {
  return <ImmigrationPageLayout data={prRenewalData} />;
}
