import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { tradeOccupationTargetedDrawData } from "@/data/pages/trade-occupation-targeted-draw";

export const metadata: Metadata = {
  title: "Explore Transport Occupations for Canadian Immigration",
  description:
    "Discover the diverse transport sector roles eligible for Canada's Express Entry program. Fast-track your path to permanent residency through targeted draws.",
};

export default function TradeOccupationTargetedDrawPage() {
  return <ImmigrationPageLayout data={tradeOccupationTargetedDrawData} />;
}
