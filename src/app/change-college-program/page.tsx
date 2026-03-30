import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { changeCollegeProgramData } from "@/data/pages/change-college-program";

export const metadata = generatePageMetadata("change-college-program");

export default function ChangeCollegeProgramPage() {
  return <ImmigrationPageLayout data={changeCollegeProgramData} />;
}
