import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { insideCanadaData } from "@/data/pages/inside-canada";

export const metadata = generatePageMetadata("inside-canada");

export default function InsideCanadaPage() {
  return <ImmigrationPageLayout data={insideCanadaData} />;
}
