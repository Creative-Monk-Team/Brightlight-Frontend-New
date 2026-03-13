import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { flagpolingData } from "@/data/pages/flagpoling";

export const metadata: Metadata = {
  title: "Flagpoling in Canada: Renew Permits & PR Status Fast",
  description:
    "Learn about flagpoling, a legal process to renew permits or change your status in Canada. Exit and re-enter for quick processing of your applications.",
};

export default function FlagpolingPage() {
  return <ImmigrationPageLayout data={flagpolingData} />;
}
