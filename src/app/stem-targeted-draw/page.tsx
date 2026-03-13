import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { stemTargetedDrawData } from "@/data/pages/stem-targeted-draw";

export const metadata: Metadata = {
  title: "STEM Occupation Draws for Express Entry Immigration",
  description:
    "Explore Canada's Express Entry draws targeting STEM professionals. If you work in science, tech, engineering, or math, this is your chance for fast-track immigration.",
};

export default function StemTargetedDrawPage() {
  return <ImmigrationPageLayout data={stemTargetedDrawData} />;
}
