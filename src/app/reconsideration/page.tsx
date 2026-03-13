import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { reconsiderationData } from "@/data/pages/reconsideration";

export const metadata: Metadata = {
  title: "Reconsideration for Refusal Decision - Brightlight Immigration",
  description:
    "Got your Canadian visa refused? Don't lose hope! Brightlight Immigration helps you appeal the decision and present new evidence for a successful reconsideration.",
};

export default function ReconsiderationPage() {
  return <ImmigrationPageLayout data={reconsiderationData} />;
}
