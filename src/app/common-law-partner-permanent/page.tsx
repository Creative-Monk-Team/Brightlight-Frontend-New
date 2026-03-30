import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { commonLawPartnerPermanentData } from "@/data/pages/common-law-partner-permanent";

export const metadata = generatePageMetadata("common-law-partner-permanent");

export default function CommonLawPartnerPermanentPage() {
  return <ImmigrationPageLayout data={commonLawPartnerPermanentData} />;
}
