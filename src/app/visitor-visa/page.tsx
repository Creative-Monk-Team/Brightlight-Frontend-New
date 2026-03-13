import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { visitorVisaData } from "@/data/pages/visitor-visa";

export const metadata: Metadata = {
  title: "Canada Visitor Visa \u2013 Requirements & Processing Time",
  description:
    "Planning a trip to Canada? Bright Light Immigration helps you understand the visitor visa of Canada, types, eligibility & processing time for a smooth journey.",
};

export default function VisitorVisaPage() {
  return <ImmigrationPageLayout data={visitorVisaData} />;
}
