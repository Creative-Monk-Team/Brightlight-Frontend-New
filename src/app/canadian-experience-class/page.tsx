import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { canadianExperienceClassData } from "@/data/pages/canadian-experience-class";

export const metadata: Metadata = {
  title: "Best Immigration Consultant Canada – Bright Light Experts",
  description:
    "Looking for the best immigration consultant in Canada? Bright Light Immigration guides you through the Canadian Experience Class for a smooth PR journey.",
};

export default function CanadianExperienceClassPage() {
  return <ImmigrationPageLayout data={canadianExperienceClassData} />;
}
