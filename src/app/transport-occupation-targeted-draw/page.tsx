import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { transportOccupationTargetedDrawData } from "@/data/pages/transport-occupation-targeted-draw";

export const metadata: Metadata = {
  title:
    "Brightlight Immigration - Transport Occupations Express Entry",
  description:
    "Explore transport-related job opportunities in Canada through Brightlight Immigration's targeted Express Entry draws. A path to permanent residency awaits.",
};

export default function TransportOccupationTargetedDrawPage() {
  return <ImmigrationPageLayout data={transportOccupationTargetedDrawData} />;
}
