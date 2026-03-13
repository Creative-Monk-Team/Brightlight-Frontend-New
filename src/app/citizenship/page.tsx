import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { citizenshipData } from "@/data/pages/citizenship";

export const metadata: Metadata = {
  title: "Apply for Citizenship of Canada | Bright Light Immigration",
  description:
    "Discover how to get citizenship of Canada with expert guidance from Bright Light Immigration. Start your journey toward becoming a Canadian citizen today!",
};

export default function CitizenshipPage() {
  return <ImmigrationPageLayout data={citizenshipData} />;
}
