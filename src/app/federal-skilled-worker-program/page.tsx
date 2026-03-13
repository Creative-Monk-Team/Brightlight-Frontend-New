import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { federalSkilledWorkerProgramData } from "@/data/pages/federal-skilled-worker-program";

export const metadata: Metadata = {
  title: "Federal Skilled Worker Program: Your Pathway to Canada PR",
  description:
    "Explore Canada's Federal Skilled Worker Program! Gain PR through Express Entry, designed for skilled professionals to contribute to Canada's growing economy. Apply today!",
};

export default function FederalSkilledWorkerProgramPage() {
  return <ImmigrationPageLayout data={federalSkilledWorkerProgramData} />;
}
