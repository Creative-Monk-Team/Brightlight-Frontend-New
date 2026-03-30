import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { categoryBasedData } from "@/data/pages/category-based";

export const metadata = generatePageMetadata("category-based");

export default function CategoryBasedPage() {
  return <ImmigrationPageLayout data={categoryBasedData} />;
}
