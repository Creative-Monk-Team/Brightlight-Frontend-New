import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { commonLawPartnerTemporaryData } from "@/data/pages/common-law-partner-temporary";

export const metadata = generatePageMetadata("common-law-partner-temporary");

export default function CommonLawPartnerTemporaryPage() {
  return <ImmigrationPageLayout data={commonLawPartnerTemporaryData} />;
}
