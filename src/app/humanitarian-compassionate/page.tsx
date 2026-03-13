import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { humanitarianCompassionateData } from "@/data/pages/humanitarian-compassionate";

export const metadata: Metadata = {
  title:
    "Canada Humanitarian & Compassionate Program - Reunite Family",
  description:
    "Support loved ones facing tough situations through Canada's Humanitarian and Compassionate program. Sponsor family members to start anew in Canada.",
};

export default function HumanitarianCompassionatePage() {
  return <ImmigrationPageLayout data={humanitarianCompassionateData} />;
}
