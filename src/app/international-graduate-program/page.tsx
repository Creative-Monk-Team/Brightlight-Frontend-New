import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { internationalGraduateProgramData } from "@/data/pages/international-graduate-program";

export const metadata: Metadata = {
  title: "BC PNP International Graduate Stream | Apply for PR",
  description:
    "Complete your studies in BC? Apply for the BC PNP International Graduate Stream. No Express Entry needed and fast-track your Canadian PR with a job offer.",
};

export default function InternationalGraduateProgramPage() {
  return <ImmigrationPageLayout data={internationalGraduateProgramData} />;
}
