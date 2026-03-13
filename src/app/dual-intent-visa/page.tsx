import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { dualIntentVisaData } from "@/data/pages/dual-intent-visa";

export const metadata: Metadata = {
  title: "Best Immigration Consultant Canada | Dual Intent Visa Help",
  description:
    "Explore dual intent visa options with top immigration agencies in Canada. Bright Light Immigration offers expert help for study and PR pathways. Start today!",
};

export default function DualIntentVisaPage() {
  return <ImmigrationPageLayout data={dualIntentVisaData} />;
}
