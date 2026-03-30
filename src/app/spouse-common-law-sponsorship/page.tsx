import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { spouseCommonLawSponsorshipData } from "@/data/pages/spouse-common-law-sponsorship";

export const metadata = generatePageMetadata("spouse-common-law-sponsorship");

export default function SpouseCommonLawSponsorshipPage() {
  return <ImmigrationPageLayout data={spouseCommonLawSponsorshipData} />;
}
