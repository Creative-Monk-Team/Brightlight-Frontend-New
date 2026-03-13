import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { parentsGrandparentsSponsorshipData } from "@/data/pages/parents-grandparents-sponsorship";

export const metadata: Metadata = {
  title:
    "Parents and Grandparents Program: Family Reunification in Canada",
  description:
    "Reunite with your loved ones in Canada through the Parents and Grandparents Program. Sponsor your parents or grandparents for a fulfilling life together in Canada.",
};

export default function ParentsGrandparentsSponsorshipPage() {
  return (
    <ImmigrationPageLayout data={parentsGrandparentsSponsorshipData} />
  );
}
