import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { parentsGrandparentsSponsorshipData } from "@/data/pages/parents-grandparents-sponsorship";

export const metadata = generatePageMetadata("parents-grandparents-sponsorship");

export default function ParentsGrandparentsSponsorshipPage() {
  return (
    <ImmigrationPageLayout data={parentsGrandparentsSponsorshipData} />
  );
}
