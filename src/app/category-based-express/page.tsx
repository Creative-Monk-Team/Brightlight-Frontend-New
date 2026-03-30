import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { categoryBasedExpressData } from "@/data/pages/category-based-express";

export const metadata = generatePageMetadata("category-based-express");

export default function CategoryBasedExpressPage() {
  return <ImmigrationPageLayout data={categoryBasedExpressData} />;
}
