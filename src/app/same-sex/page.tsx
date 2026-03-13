import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { sameSexData } from "@/data/pages/same-sex";

export const metadata: Metadata = {
  title:
    "Same-Sex Spousal Sponsorship for PR in Canada - Brightlight",
  description:
    "Explore Same-Sex Spousal Sponsorship in Canada. Bring your same-sex partner to Canada with the support of Brightlight Immigration's expert guidance.",
};

export default function SameSexPage() {
  return <ImmigrationPageLayout data={sameSexData} />;
}
