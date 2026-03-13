import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { pilotProgramsData } from "@/data/pages/pilot-programs";

export const metadata: Metadata = {
  title: "Explore Canada's Pilot Programs | Brightlight Immigration",
  description:
    "Brightlight Immigration helps you navigate Canada's Pilot Programs to fill labor gaps in agriculture and other sectors, with a path to permanent residency.",
};

export default function PilotProgramsPage() {
  return <ImmigrationPageLayout data={pilotProgramsData} />;
}
