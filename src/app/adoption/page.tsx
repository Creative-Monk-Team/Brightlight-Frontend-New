import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { adoptionData } from "@/data/pages/adoption";

export const metadata: Metadata = {
  title: "Best Immigration Consultant Canada for Adoption Services",
  description:
    "Looking for the best immigration consultant in Canada? Bright Light Immigration offers expert adoption visa services tailored to your family's needs.",
};

export default function AdoptionPage() {
  return <ImmigrationPageLayout data={adoptionData} />;
}
