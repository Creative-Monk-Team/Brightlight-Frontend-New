import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { familyReunificationSponsorshipData } from "@/data/pages/family-reunification-sponsorship";

export const metadata: Metadata = {
  title: "Canada Family Reunion Visa | Spouse, Child & Parents",
  description:
    "Reunite with your loved ones in Canada through the family reunion visa Canada. Sponsor your spouse, children, parents, or grandparents with ease.",
};

export default function FamilyReunificationSponsorshipPage() {
  return (
    <ImmigrationPageLayout data={familyReunificationSponsorshipData} />
  );
}
