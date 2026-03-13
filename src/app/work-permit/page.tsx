import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { workPermitData } from "@/data/pages/work-permit";

export const metadata: Metadata = {
  title: "Work Permit in Canada | Fast Processing Time & Guidance",
  description:
    "Explore opportunities with a work permit in Canada, learn about work permit processing time, extend permits, or hire skilled foreign workers legally.",
};

export default function WorkPermitPage() {
  return <ImmigrationPageLayout data={workPermitData} />;
}
