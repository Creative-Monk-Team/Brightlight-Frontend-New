import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { francophoneMobilityProgramData } from "@/data/pages/francophone-mobility-program";

export const metadata: Metadata = {
  title:
    "Francophone Mobility Program - Work in Canada Without LMIA",
  description:
    "Join Canada's workforce through the Francophone Mobility Program. No LMIA required for jobs in agriculture, animal care, or crop harvesting. Apply now with Brightlight Immigration.",
};

export default function FrancophoneMobilityProgramPage() {
  return <ImmigrationPageLayout data={francophoneMobilityProgramData} />;
}
