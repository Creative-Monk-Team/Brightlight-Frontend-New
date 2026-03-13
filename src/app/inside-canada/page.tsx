import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { insideCanadaData } from "@/data/pages/inside-canada";

export const metadata: Metadata = {
  title: "Study Permit in Canada: Apply or Extend Inside Canada",
  description:
    "Looking to apply for or extend your Canadian study permit while inside Canada? Find out how you can change your college or program with up-to-date guidance.",
};

export default function InsideCanadaPage() {
  return <ImmigrationPageLayout data={insideCanadaData} />;
}
