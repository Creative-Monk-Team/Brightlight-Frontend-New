import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { cbyData } from "@/data/pages/cby";

export const metadata: Metadata = {
  title: "Trusted Immigration Consultant for Canada | Bright Light",
  description:
    "Looking for a reliable immigration consultant for Canada? Bright Light Immigration offers expert guidance for a smooth and successful Canadian immigration process",
};

export default function CbyPage() {
  return <ImmigrationPageLayout data={cbyData} />;
}
