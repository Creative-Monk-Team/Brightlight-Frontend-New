import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { pnpData } from "@/data/pages/pnp";

export const metadata: Metadata = {
  title: "Best Immigration Consultant Canada – Bright Light Help",
  description:
    "Need trusted guidance for Canada PR or BC PNP? Bright Light Immigration is the best immigration consultant in Canada, offering expert, personalized support.",
};

export default function PnpPage() {
  return <ImmigrationPageLayout data={pnpData} />;
}
