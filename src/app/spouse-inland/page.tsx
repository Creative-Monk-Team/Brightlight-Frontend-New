import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { spouseInlandData } from "@/data/pages/spouse-inland";

export const metadata: Metadata = {
  title: "Inland Spousal Sponsorship for Permanent Residency in Canada",
  description:
    "Discover how Inland Spousal and Common-Law Partner Sponsorship helps Canadian residents sponsor their spouse for permanent residency while living together in Canada.",
};

export default function SpouseInlandPage() {
  return <ImmigrationPageLayout data={spouseInlandData} />;
}
