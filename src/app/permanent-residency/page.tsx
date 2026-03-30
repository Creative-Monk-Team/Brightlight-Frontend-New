import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { permanentResidencyData } from "@/data/pages/permanent-residency";

export const metadata = generatePageMetadata("permanent-residency");

const quickAccess = [
  { label: "About the program", id: "about-program" },
  { label: "Pathways to PR", id: "eligibility" },
  { label: "Our process", id: "why-choose-us" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Blogs", id: "blogs" },
];

export default function PermanentResidencyPage() {
  return (
    <ImmigrationPageLayout
      data={permanentResidencyData}
      quickAccess={quickAccess}
    />
  );
}
