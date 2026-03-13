import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { commonLawPartnerTemporaryData } from "@/data/pages/common-law-partner-temporary";

export const metadata: Metadata = {
  title: "Top Immigration Consultant in Canada | Bright Light",
  description:
    "Looking for the top immigration consultant in Canada? Bright Light Immigration helps common-law partners with fast, reliable temporary visa solutions. Contact us today!",
};

export default function CommonLawPartnerTemporaryPage() {
  return <ImmigrationPageLayout data={commonLawPartnerTemporaryData} />;
}
