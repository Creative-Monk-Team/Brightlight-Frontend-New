import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { internationalGraduateProgramData } from "@/data/pages/international-graduate-program";

export const metadata = generatePageMetadata("international-graduate-program");

export default function InternationalGraduateProgramPage() {
  return <ImmigrationPageLayout data={internationalGraduateProgramData} />;
}
