import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { familyReunificationSponsorshipData } from "@/data/pages/family-reunification-sponsorship";

export const metadata = generatePageMetadata("family-reunification-sponsorship");

export default function FamilyReunificationSponsorshipPage() {
  return (
    <ImmigrationPageLayout data={familyReunificationSponsorshipData} />
  );
}
