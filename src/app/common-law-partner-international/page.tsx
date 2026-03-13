import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { commonLawPartnerInternationalData } from "@/data/pages/common-law-partner-international";

export const metadata: Metadata = {
  title: "Open Work Permit for Spouse of International Student",
  description:
    "Spouses or common-law partners of international students can apply for an open work permit to join their partners in Canada. Understand eligibility to avoid delays.",
};

export default function CommonLawPartnerInternationalPage() {
  return <ImmigrationPageLayout data={commonLawPartnerInternationalData} />;
}
