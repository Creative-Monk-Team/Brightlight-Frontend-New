import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { outsideCanadaData } from "@/data/pages/outside-canada";

export const metadata = generatePageMetadata("outside-canada");

export default function OutsideCanadaPage() {
  return <ImmigrationPageLayout data={outsideCanadaData} />;
}
