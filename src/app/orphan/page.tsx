import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { orphanData } from "@/data/pages/orphan";

export const metadata: Metadata = {
  title:
    "Orphan Sponsorship Program - Brightlight immigration I Immigration Experts",
  description:
    "Bring orphaned children into your family through Canada's Orphan Sponsorship Program. Offer them a chance for a new life and permanent residency in Canada.",
};

export default function OrphanPage() {
  return <ImmigrationPageLayout data={orphanData} />;
}
