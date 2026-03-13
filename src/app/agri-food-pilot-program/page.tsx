import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { agriFoodPilotProgramData } from "@/data/pages/agri-food-pilot-program";

export const metadata: Metadata = {
  title: "Trusted Immigration Agencies in Canada | Agri-Food Pilot",
  description:
    "Looking to settle in Canada through the Agri-Food Pilot Program? Connect with trusted immigration agencies in Canada for expert guidance and smooth processing.",
};

export default function AgriFoodPilotProgramPage() {
  return <ImmigrationPageLayout data={agriFoodPilotProgramData} />;
}
