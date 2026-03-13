import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { agricultureAgriFoodOccupationData } from "@/data/pages/agriculture-agri-food-occupation";

export const metadata: Metadata = {
  title: "Expert Immigration Consultant for Canada \u2013 Bright Light",
  description:
    "Explore agriculture and agri-food jobs in Canada with expert help from Bright Light Immigration \u2013 your trusted immigration consultant for Canada. Apply today!",
};

export default function AgricultureAgriFoodOccupationPage() {
  return <ImmigrationPageLayout data={agricultureAgriFoodOccupationData} />;
}
