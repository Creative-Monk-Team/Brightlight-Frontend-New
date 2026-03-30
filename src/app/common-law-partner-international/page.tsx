import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { commonLawPartnerInternationalData } from "@/data/pages/common-law-partner-international";

export const metadata = generatePageMetadata("common-law-partner-international");

export default function CommonLawPartnerInternationalPage() {
  return <ImmigrationPageLayout data={commonLawPartnerInternationalData} />;
}
