import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { pathwaysForCaregiverData } from "@/data/pages/pathways-for-caregiver";

export const metadata: Metadata = {
  title: "Pathways for Caregivers to Immigrate to Canada - Brightlight",
  description:
    "Discover pathways for caregivers to immigrate to Canada. Apply to meet the country's growing demand for caregivers and secure a brighter future for you and your family.",
};

export default function PathwaysForCaregiverPage() {
  return <ImmigrationPageLayout data={pathwaysForCaregiverData} />;
}
