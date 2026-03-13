import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { expressEntryData } from "@/data/pages/express-entry";

export const metadata: Metadata = {
  title: "Top Immigration Agencies in Canada | Bright Light Experts",
  description:
    "Looking for trusted immigration agencies in Canada? Bright Light Immigration offers expert Express Entry services for your smooth and successful relocation process.",
};

export default function ExpressEntryPage() {
  return <ImmigrationPageLayout data={expressEntryData} />;
}
