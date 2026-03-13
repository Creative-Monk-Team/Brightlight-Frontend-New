import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { outsideCanadaData } from "@/data/pages/outside-canada";

export const metadata: Metadata = {
  title: "Study in Canada: Apply for a Study Permit from Outside",
  description:
    "Dreaming of studying in Canada? Get your study permit from outside Canada and explore top educational institutions with a valid study permit. Apply now!",
};

export default function OutsideCanadaPage() {
  return <ImmigrationPageLayout data={outsideCanadaData} />;
}
