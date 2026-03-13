import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { spouseCommonLawSponsorshipData } from "@/data/pages/spouse-common-law-sponsorship";

export const metadata: Metadata = {
  title: "Spousal Sponsorship in Canada | Immigration Courses Online",
  description:
    "Looking to bring your loved ones to Canada? This complete guide on spousal sponsorship in Canada covers sponsoring a spouse, partner, or dependent child.",
};

export default function SpouseCommonLawSponsorshipPage() {
  return <ImmigrationPageLayout data={spouseCommonLawSponsorshipData} />;
}
