import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { restorationOfStatusData } from "@/data/pages/restoration-of-status";

export const metadata: Metadata = {
  title: "Restore Your Status in Canada | Brightlight Immigration",
  description:
    "Lost your temporary status in Canada? Restore it within 90 days to become legal to stay. Let Brightlight Immigration assist you.",
};

export default function RestorationOfStatusPage() {
  return <ImmigrationPageLayout data={restorationOfStatusData} />;
}
