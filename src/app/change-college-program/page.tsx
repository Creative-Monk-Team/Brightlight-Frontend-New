import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { changeCollegeProgramData } from "@/data/pages/change-college-program";

export const metadata: Metadata = {
  title: "Top Immigration Agencies in Canada | Bright Light Help",
  description:
    "Explore trusted immigration agencies in Canada. Bright Light Immigration guides you to change your college or program easily. Start your journey today.",
};

export default function ChangeCollegeProgramPage() {
  return <ImmigrationPageLayout data={changeCollegeProgramData} />;
}
