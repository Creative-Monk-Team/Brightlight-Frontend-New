import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { temporaryResidencyData } from "@/data/pages/temporary-residency";

export const metadata: Metadata = {
  title:
    "Temporary Resident Visa Canada - Visitor & Work | Bright Light",
  description:
    "Apply for a Temporary Resident Visa to visit or work in Canada. Bright Light Immigration ensures fast, reliable TRV, visitor visa, and work permit application support.",
};

export default function TemporaryResidencyPage() {
  return <ImmigrationPageLayout data={temporaryResidencyData} />;
}
