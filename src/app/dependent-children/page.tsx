import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { dependentChildrenData } from "@/data/pages/dependent-children";

export const metadata: Metadata = {
  title:
    "Open Work Permits for Dependent Children | Brightlight Immigration",
  description:
    "Help your dependent children of TFWs work in Canada without LMIA or job offers. Explore the new IRCC policies and apply under LMIA exemption codes C46 & C48.",
};

export default function DependentChildrenPage() {
  return <ImmigrationPageLayout data={dependentChildrenData} />;
}
