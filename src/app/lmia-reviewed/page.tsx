import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { lmiaReviewedData } from "@/data/pages/lmia-reviewed";

export const metadata = generatePageMetadata("lmia-reviewed");

export default function LmiaReviewedPage() {
  return <ImmigrationPageLayout data={lmiaReviewedData} />;
}
