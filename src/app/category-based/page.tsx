import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { categoryBasedData } from "@/data/pages/category-based";

export const metadata: Metadata = {
  title: "Top Immigration Consultant in Canada | Bright Light",
  description:
    "Looking for the top immigration consultant in Canada? Bright Light Immigration offers expert category-based solutions for your smooth and successful immigration journey.",
};

export default function CategoryBasedPage() {
  return <ImmigrationPageLayout data={categoryBasedData} />;
}
