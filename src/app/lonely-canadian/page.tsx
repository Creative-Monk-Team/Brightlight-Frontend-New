import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { lonelyCanadianData } from "@/data/pages/lonely-canadian";

export const metadata = generatePageMetadata("lonely-canadian");

export default function LonelyCanadianPage() {
  return <ImmigrationPageLayout data={lonelyCanadianData} />;
}
