import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { lowWageLmiaData } from "@/data/pages/low-wage-lmia";

export const metadata: Metadata = {
  title: "Low-Wage & High-Wage LMIA - Fill Labor Gaps in Canada",
  description:
    "Understand Low-Wage/High-Wage LMIA applications to address labor shortages in Canada. Expert guidance from Brightlight Immigration for seamless hiring solutions.",
};

export default function LowWageLmiaPage() {
  return <ImmigrationPageLayout data={lowWageLmiaData} />;
}
