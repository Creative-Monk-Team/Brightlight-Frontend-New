import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { pgwpData } from "@/data/pages/pgwp";

export const metadata: Metadata = {
  title:
    "Canada PGWP: Work After Graduation | Brightlight Immigration",
  description:
    "Explore Canada's Post-Graduate Work Permit (PGWP) for international graduates. Gain Canadian work experience and build a pathway to permanent residency. Learn more now!",
};

export default function PgwpPage() {
  return <ImmigrationPageLayout data={pgwpData} />;
}
