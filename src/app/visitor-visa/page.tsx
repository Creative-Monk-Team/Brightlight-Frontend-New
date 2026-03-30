import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { visitorVisaData } from "@/data/pages/visitor-visa";

export const metadata = generatePageMetadata("visitor-visa");

export default function VisitorVisaPage() {
  return <ImmigrationPageLayout data={visitorVisaData} />;
}
