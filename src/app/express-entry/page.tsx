import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { expressEntryData } from "@/data/pages/express-entry";

export const metadata = generatePageMetadata("express-entry");

export default function ExpressEntryPage() {
  return <ImmigrationPageLayout data={expressEntryData} />;
}
