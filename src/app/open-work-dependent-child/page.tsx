import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { openWorkDependentChildData } from "@/data/pages/open-work-dependent-child";

export const metadata: Metadata = {
  title:
    "Open Work Permits for Dependent Children | Brightlight Immigration",
  description:
    "Help your dependent children of TFWs work in Canada without LMIA or job offers. Explore the new IRCC policies and apply under LMIA exemption codes C46 & C48.",
};

export default function OpenWorkDependentChildPage() {
  return <ImmigrationPageLayout data={openWorkDependentChildData} />;
}
