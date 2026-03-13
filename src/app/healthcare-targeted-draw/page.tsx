import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { healthcareTargetedDrawData } from "@/data/pages/healthcare-targeted-draw";

export const metadata: Metadata = {
  title:
    "Express Entry Healthcare Draws | Fast-track PR for Workers",
  description:
    "Canada's Express Entry healthcare draws prioritize healthcare workers, including nurses, doctors, and dentists, offering faster PR processing to address workforce needs.",
};

export default function HealthcareTargetedDrawPage() {
  return <ImmigrationPageLayout data={healthcareTargetedDrawData} />;
}
