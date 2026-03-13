import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { visitorToStudentData } from "@/data/pages/visitor-to-student";

export const metadata: Metadata = {
  title: "Visitor to Student Program: Study in Canada Today",
  description:
    "Switch from visitor to student status in Canada and pursue full-time studies at a recognized institution. Apply for a student visa under the Visitor to Student Program.",
};

export default function VisitorToStudentPage() {
  return <ImmigrationPageLayout data={visitorToStudentData} />;
}
