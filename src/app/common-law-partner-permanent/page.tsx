import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { commonLawPartnerPermanentData } from "@/data/pages/common-law-partner-permanent";

export const metadata: Metadata = {
  title: "Open Work Permit for Spouse/Partner of PR or Citizen",
  description:
    "Apply for an open work permit while waiting for your permanent residency application to be processed. Spouses and partners of PR holders or citizens are eligible.",
};

export default function CommonLawPartnerPermanentPage() {
  return <ImmigrationPageLayout data={commonLawPartnerPermanentData} />;
}
