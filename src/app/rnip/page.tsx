import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { rnipData } from "@/data/pages/rnip";

export const metadata: Metadata = {
  title: "RNIP- Canada Pathway",
  description:
    "Explore the Rural and Northern Immigration Pilot (RNIP) program, designed to help small communities in Canada attract skilled workers and international graduates.",
};

export default function RnipPage() {
  return <ImmigrationPageLayout data={rnipData} />;
}
