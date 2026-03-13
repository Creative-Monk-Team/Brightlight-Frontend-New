import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { educationBasedDrawsData } from "@/data/pages/education-based-draws";

export const metadata: Metadata = {
  title:
    "Study in Canada with Expert Student Visa Support | Bright Light",
  description:
    "Get expert student visa and admission guidance for studying in Canada. Bright Light Immigration helps you choose colleges, apply successfully, and begin your education journey.",
};

export default function EducationBasedDrawsPage() {
  return <ImmigrationPageLayout data={educationBasedDrawsData} />;
}
