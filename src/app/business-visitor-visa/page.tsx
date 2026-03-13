import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { businessVisitorVisaData } from "@/data/pages/business-visitor-visa";

export const metadata: Metadata = {
  title:
    "Visitor Visa Canada Processing Time | Bright Light Immigration",
  description:
    "Discover the latest visitor visa Canada processing time. Bright Light Immigration guides you through the process with expert support for faster visa approvals.",
};

export default function BusinessVisitorVisaPage() {
  return <ImmigrationPageLayout data={businessVisitorVisaData} />;
}
