import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { additionalDocumentData } from "@/data/pages/additional-document";

export const metadata = generatePageMetadata("additional-document");

export default function AdditionalDocumentPage() {
  return <ImmigrationPageLayout data={additionalDocumentData} />;
}
