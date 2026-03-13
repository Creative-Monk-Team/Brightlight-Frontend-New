import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { lmiaReviewedData } from "@/data/pages/lmia-reviewed";

export const metadata: Metadata = {
  title: "Labour Market Impact Assessment Canada - Apply Now",
  description:
    "Apply for a Labour Market Impact Assessment (LMIA) to hire foreign workers or get hired in Canada. Brightlight Immigration guides you through the process.",
};

export default function LmiaReviewedPage() {
  return <ImmigrationPageLayout data={lmiaReviewedData} />;
}
