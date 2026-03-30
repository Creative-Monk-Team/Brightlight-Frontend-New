import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { francophoneMobilityProgramData } from "@/data/pages/francophone-mobility-program";

export const metadata = generatePageMetadata("francophone-mobility-program");

export default function FrancophoneMobilityProgramPage() {
  return <ImmigrationPageLayout data={francophoneMobilityProgramData} />;
}
