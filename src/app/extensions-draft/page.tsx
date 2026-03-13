import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { extensionsDraftData } from "@/data/pages/extensions-draft";

export const metadata: Metadata = {
  title: "Extend Your Stay in Canada | Brightlight Immigration",
  description:
    "Require more time in Canada? Seek an extension of your visa to continue enjoying your legal status. Allow Brightlight Immigration to assist you with a seamless and stress-free process.",
};

export default function ExtensionsDraftPage() {
  return <ImmigrationPageLayout data={extensionsDraftData} />;
}
