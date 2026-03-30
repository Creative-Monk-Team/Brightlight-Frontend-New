import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { tradeOccupationTargetedDrawData } from "@/data/pages/trade-occupation-targeted-draw";

export const metadata = generatePageMetadata("trade-occupation-targeted-draw");

export default function TradeOccupationTargetedDrawPage() {
  return <ImmigrationPageLayout data={tradeOccupationTargetedDrawData} />;
}
