import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { transportOccupationTargetedDrawData } from "@/data/pages/transport-occupation-targeted-draw";

export const metadata = generatePageMetadata("transport-occupation-targeted-draw");

export default function TransportOccupationTargetedDrawPage() {
  return <ImmigrationPageLayout data={transportOccupationTargetedDrawData} />;
}
