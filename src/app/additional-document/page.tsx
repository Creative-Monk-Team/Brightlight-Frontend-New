import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { additionalDocumentData } from "@/data/pages/additional-document";

export const metadata: Metadata = {
  title: "Trusted Immigration Consultant for Canada - Bright Light",
  description:
    "Get expert guidance from a trusted immigration consultant for Canada. Bright Light Immigration helps you with accurate documentation and seamless application support.",
};

export default function AdditionalDocumentPage() {
  return <ImmigrationPageLayout data={additionalDocumentData} />;
}
