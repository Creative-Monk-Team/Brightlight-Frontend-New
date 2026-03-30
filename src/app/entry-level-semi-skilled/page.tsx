import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { entryLevelSemiSkilledData } from "@/data/pages/entry-level-semi-skilled";

export const metadata = generatePageMetadata("entry-level-semi-skilled");

export default function EntryLevelSemiSkilledPage() {
  return <ImmigrationPageLayout data={entryLevelSemiSkilledData} />;
}
