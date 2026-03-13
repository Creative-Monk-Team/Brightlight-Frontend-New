import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { openWorkPermitData } from "@/data/pages/open-work-permit";

export const metadata: Metadata = {
  title: "Open Work Permit Canada - Brightlight immigration",
  description:
    "Get the freedom to work in Canada with an Open Work Permit. Apply today to explore flexible job opportunities without being tied to one employer.",
};

export default function OpenWorkPermitPage() {
  return <ImmigrationPageLayout data={openWorkPermitData} />;
}
