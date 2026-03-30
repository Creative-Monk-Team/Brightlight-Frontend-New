import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { visitorToStudentData } from "@/data/pages/visitor-to-student";

export const metadata = generatePageMetadata("visitor-to-student");

export default function VisitorToStudentPage() {
  return <ImmigrationPageLayout data={visitorToStudentData} />;
}
