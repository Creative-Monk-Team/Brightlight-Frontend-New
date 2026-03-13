import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { federalSkilledTradesProgramData } from "@/data/pages/federal-skilled-trades-program";

export const metadata: Metadata = {
  title: "Federal Skilled Trades Program: Build Your Future in Canada",
  description:
    "Apply for Canada's Federal Skilled Trades Program! A top pathway for tradespeople to secure PR and thrive in industries like construction and manufacturing. Start now!",
};

export default function FederalSkilledTradesProgramPage() {
  return <ImmigrationPageLayout data={federalSkilledTradesProgramData} />;
}
