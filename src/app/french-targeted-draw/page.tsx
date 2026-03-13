import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { frenchTargetedDrawData } from "@/data/pages/french-targeted-draw";

export const metadata: Metadata = {
  title:
    "Boost Your CRS with French Language Proficiency for Canada",
  description:
    "Improve your Express Entry chances by mastering French! Specialized draws offer lower competition, and French proficiency can boost your CRS score and PR opportunities.",
};

export default function FrenchTargetedDrawPage() {
  return <ImmigrationPageLayout data={frenchTargetedDrawData} />;
}
