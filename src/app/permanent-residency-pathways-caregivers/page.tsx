import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { permanentResidencyPathwaysCaregiversData } from "@/data/pages/permanent-residency-pathways-caregivers";

export const metadata: Metadata = {
  title: "Permanent Residency for Caregivers in Canada - Brightlight",
  description:
    "Explore permanent residency pathways for caregivers in Canada. Help families, support individuals, and contribute to Canada's economy while securing your future.",
};

export default function PermanentResidencyPathwaysCaregiversPage() {
  return (
    <ImmigrationPageLayout data={permanentResidencyPathwaysCaregiversData} />
  );
}
