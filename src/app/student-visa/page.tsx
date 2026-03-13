import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { studentVisaData } from "@/data/pages/student-visa";

export const metadata: Metadata = {
  title: "Your Guide on How to Get a Student Visa for Canada",
  description:
    "Discover how to obtain a student visa for Canada, covering the application process, necessary documentation, and advice for an easy experience.",
};

export default function StudentVisaPage() {
  return <ImmigrationPageLayout data={studentVisaData} />;
}
