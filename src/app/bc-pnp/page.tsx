import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { bcPnpData } from "@/data/pages/bc-pnp";

export const metadata: Metadata = {
  title: "Trusted Immigration Consultant for Canada – Bright Light",
  description:
    "Need guidance for Canadian immigration? Bright Light offers expert advice and a free BC PNP points calculator to help you plan your move to Canada with confidence.",
};

export default function BcPnpPage() {
  return <ImmigrationPageLayout data={bcPnpData} />;
}
