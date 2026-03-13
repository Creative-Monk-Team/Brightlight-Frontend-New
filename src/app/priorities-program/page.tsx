import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { prioritiesProgramData } from "@/data/pages/priorities-program";

export const metadata: Metadata = {
  title: "BC PNP Priority Program | Eligible Occupations & Benefits",
  description:
    "Explore BC PNP's Priority Program for in-demand occupations like healthcare, childcare, and construction. Fast-track your application and join Canada's thriving economy.",
};

export default function PrioritiesProgramPage() {
  return <ImmigrationPageLayout data={prioritiesProgramData} />;
}
