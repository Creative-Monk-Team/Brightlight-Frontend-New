import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { flagpolingData } from "@/data/pages/flagpoling";

export const metadata = generatePageMetadata("flagpoling");

export default function FlagpolingPage() {
  return <ImmigrationPageLayout data={flagpolingData} />;
}
