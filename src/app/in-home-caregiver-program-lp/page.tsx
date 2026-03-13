import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { inHomeCaregiverProgramLpData } from "@/data/pages/in-home-caregiver-program-lp";

export const metadata: Metadata = {
  title: "Canada In-Home Caregiver Program for Work & Residency",
  description:
    "Explore the In-Home Caregiver Program in Canada. Provide care while securing a work permit and permanent residency for you and your family with Brightlight Immigration.",
};

export default function InHomeCaregiverProgramLpPage() {
  return <ImmigrationPageLayout data={inHomeCaregiverProgramLpData} />;
}
