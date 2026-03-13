import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { sdsData } from "@/data/pages/sds";

export const metadata: Metadata = {
  title:
    "Student Direct Stream (SDS) - Fast Track Your Canada Study Permit",
  description:
    "Eligible international students can fast-track their Canadian study permit through the Student Direct Stream. Learn more at Brightlight Immigration for a smoother process.",
};

export default function SdsPage() {
  return <ImmigrationPageLayout data={sdsData} />;
}
