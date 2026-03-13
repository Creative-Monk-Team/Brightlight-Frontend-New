import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { entryLevelSemiSkilledData } from "@/data/pages/entry-level-semi-skilled";

export const metadata: Metadata = {
  title: "Best Immigration Consultant for Canada | Bright Light",
  description:
    "Looking for the best immigration consultant for Canada? Bright Light Immigration is among the top immigration agencies in Canada for entry-level & semi-skilled programs.",
};

export default function EntryLevelSemiSkilledPage() {
  return <ImmigrationPageLayout data={entryLevelSemiSkilledData} />;
}
