import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { federalSkilledTradesProgramData } from "@/data/pages/federal-skilled-trades-program";

export const metadata = generatePageMetadata("federal-skilled-trades-program");

export default function FederalSkilledTradesProgramPage() {
  return <ImmigrationPageLayout data={federalSkilledTradesProgramData} />;
}
