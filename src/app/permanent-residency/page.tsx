import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { permanentResidencyData } from "@/data/pages/permanent-residency";

export const metadata: Metadata = {
  title: "How to Apply for Permanent Residence in Canada",
  description:
    "Discover details about Canadian permanent residency, such as its advantages, eligibility criteria, application procedure, and additional information.",
};

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
