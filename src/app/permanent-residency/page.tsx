import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { permanentResidencyData } from "@/data/pages/permanent-residency";

export const metadata: Metadata = {
  title: "How to Apply for Permanent Residence in Canada",
  description:
    "Discover details about Canadian permanent residency, such as its advantages, eligibility criteria, application procedure, and additional information.",
};

export default function PermanentResidencyPage() {
  return <ImmigrationPageLayout data={permanentResidencyData} />;
}
