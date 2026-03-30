import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { permanentResidencyPathwaysCaregiversData } from "@/data/pages/permanent-residency-pathways-caregivers";

export const metadata = generatePageMetadata("permanent-residency-pathways-caregivers");

export default function PermanentResidencyPathwaysCaregiversPage() {
  return (
    <ImmigrationPageLayout data={permanentResidencyPathwaysCaregiversData} />
  );
}
