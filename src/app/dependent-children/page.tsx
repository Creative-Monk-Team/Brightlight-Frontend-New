import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { dependentChildrenData } from "@/data/pages/dependent-children";

export const metadata = generatePageMetadata("dependent-children");

export default function DependentChildrenPage() {
  return <ImmigrationPageLayout data={dependentChildrenData} />;
}
