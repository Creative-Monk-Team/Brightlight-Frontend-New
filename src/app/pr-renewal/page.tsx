import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { prRenewalData } from "@/data/pages/pr-renewal";

export const metadata: Metadata = {
  title: "PR Card Renewal \u2013 Fast & Easy PR Card Services",
  description:
    "If your PR card is expired or nearing expiry, The Visa Canada can guide you through the renewal of PR card Canada process with expert support.",
};

export default function PrRenewalPage() {
  return <ImmigrationPageLayout data={prRenewalData} />;
}
