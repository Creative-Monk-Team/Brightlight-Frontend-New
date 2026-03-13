import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { rcipData } from "@/data/pages/rcip";

export const metadata: Metadata = {
  title: "Licensed RCIC Immigration Consultants in Canada | Bright Light",
  description:
    "Consult certified RCIC professionals for trusted Canada immigration. We guide PR, visa, sponsorship, and work permit applications with reliable and ethical support.",
};

export default function RcipPage() {
  return <ImmigrationPageLayout data={rcipData} />;
}
