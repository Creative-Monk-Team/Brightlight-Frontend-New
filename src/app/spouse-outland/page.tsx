import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { spouseOutlandData } from "@/data/pages/spouse-outland";

export const metadata: Metadata = {
  title: "Outland Spousal & Common-Law Sponsorship for PR in Canada",
  description:
    "Learn about Outland Spousal and Common-Law Partner Sponsorship, allowing Canadians to sponsor their partner abroad for permanent residency in Canada.",
};

export default function SpouseOutlandPage() {
  return <ImmigrationPageLayout data={spouseOutlandData} />;
}
