import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { internationalPostGraduateProgramData } from "@/data/pages/international-post-graduate-program";

export const metadata: Metadata = {
  title: "BC PNP International Post-Graduate Stream | No Job Offer",
  description:
    "Apply for BC PNP's International Post-Graduate Stream. No job offer or Express Entry profile needed. Fast-track your Canadian permanent residency today.",
};

export default function InternationalPostGraduateProgramPage() {
  return (
    <ImmigrationPageLayout data={internationalPostGraduateProgramData} />
  );
}
