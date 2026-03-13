import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { skilledWorkerStreamData } from "@/data/pages/skilled-worker-stream";

export const metadata: Metadata = {
  title: "BC Skilled Worker Stream | Brightlight Immigration",
  description:
    "Explore the BC PNP Skilled Worker Stream for Canadian immigration. Get nominated without needing Express Entry and enjoy faster processing for permanent residence.",
};

export default function SkilledWorkerStreamPage() {
  return <ImmigrationPageLayout data={skilledWorkerStreamData} />;
}
