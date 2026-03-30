import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { lowWageLmiaData } from "@/data/pages/low-wage-lmia";

export const metadata = generatePageMetadata("low-wage-lmia");

export default function LowWageLmiaPage() {
  return <ImmigrationPageLayout data={lowWageLmiaData} />;
}
