import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { nonSdsData } from "@/data/pages/non-sds";

export const metadata: Metadata = {
  title:
    "Non-SDS Canada Student Visa \u2013 Apply for Your Study Permit",
  description:
    "Explore the Non-SDS Canada Student Visa for international students. Learn about the application process, requirements, and benefits of a General Student Visa.",
};

export default function NonSdsPage() {
  return <ImmigrationPageLayout data={nonSdsData} />;
}
