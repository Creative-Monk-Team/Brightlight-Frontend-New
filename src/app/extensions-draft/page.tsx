import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { extensionsDraftData } from "@/data/pages/extensions-draft";

export const metadata = generatePageMetadata("extensions-draft");

export default function ExtensionsDraftPage() {
  return <ImmigrationPageLayout data={extensionsDraftData} />;
}
