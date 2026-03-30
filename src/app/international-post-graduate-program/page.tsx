import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { internationalPostGraduateProgramData } from "@/data/pages/international-post-graduate-program";

export const metadata = generatePageMetadata("international-post-graduate-program");

export default function InternationalPostGraduateProgramPage() {
  return (
    <ImmigrationPageLayout data={internationalPostGraduateProgramData} />
  );
}
