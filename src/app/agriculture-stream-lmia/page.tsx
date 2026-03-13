import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { agricultureStreamLmiaData } from "@/data/pages/agriculture-stream-lmia";

export const metadata: Metadata = {
  title: "Best Immigration Consultant Canada for LMIA Agriculture",
  description:
    "Need help with the Agriculture Stream LMIA? Connect with the best immigration consultant in Canada for reliable, step-by-step guidance on your work permit.",
};

export default function AgricultureStreamLmiaPage() {
  return <ImmigrationPageLayout data={agricultureStreamLmiaData} />;
}
