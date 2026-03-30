import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { businessVisitorVisaData } from "@/data/pages/business-visitor-visa";

export const metadata = generatePageMetadata("business-visitor-visa");

export default function BusinessVisitorVisaPage() {
  return <ImmigrationPageLayout data={businessVisitorVisaData} />;
}
