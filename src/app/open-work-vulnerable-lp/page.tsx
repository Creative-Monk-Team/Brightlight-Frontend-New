import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { openWorkVulnerableLpData } from "@/data/pages/open-work-vulnerable-lp";

export const metadata: Metadata = {
  title: "Open Work Permits for Vulnerable Workers in Canada",
  description:
    "Exploited at work in Canada? Secure an open work permit for vulnerable workers. Learn how Brightlight Immigration can guide you to a safer work environment.",
};

export default function OpenWorkVulnerableLpPage() {
  return <ImmigrationPageLayout data={openWorkVulnerableLpData} />;
}
