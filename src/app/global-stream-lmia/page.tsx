import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { globalStreamLmiaData } from "@/data/pages/global-stream-lmia";

export const metadata: Metadata = {
  title: "Global Talent Stream LMIA - Hire Skilled Workers Fast",
  description:
    "Expedite hiring with the Global Talent Stream LMIA for skilled IT, engineering, and science professionals. Brightlight Immigration guides you through the process.",
};

export default function GlobalStreamLmiaPage() {
  return <ImmigrationPageLayout data={globalStreamLmiaData} />;
}
