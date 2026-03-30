import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { humanitarianCompassionateData } from "@/data/pages/humanitarian-compassionate";

export const metadata = generatePageMetadata("humanitarian-compassionate");

export default function HumanitarianCompassionatePage() {
  return <ImmigrationPageLayout data={humanitarianCompassionateData} />;
}
