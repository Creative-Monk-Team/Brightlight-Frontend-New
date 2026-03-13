import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { categoryBasedExpressData } from "@/data/pages/category-based-express";

export const metadata: Metadata = {
  title:
    "Category-Based Express Entry Draws - Brightlight Immigration",
  description:
    "Apply for Canada's Express Entry with targeted category-based draws. Brightlight Immigration helps you navigate high-demand skill opportunities for Canadian immigration.",
};

export default function CategoryBasedExpressPage() {
  return <ImmigrationPageLayout data={categoryBasedExpressData} />;
}
