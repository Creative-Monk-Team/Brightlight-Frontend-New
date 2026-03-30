import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { studentVisaData } from "@/data/pages/student-visa";

export const metadata = generatePageMetadata("student-visa");

export default function StudentVisaPage() {
  return <ImmigrationPageLayout data={studentVisaData} />;
}
