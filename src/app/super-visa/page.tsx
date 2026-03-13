import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { superVisaData } from "@/data/pages/super-visa";

export const metadata: Metadata = {
  title: "super visa insurance | Get a Quote | Bright Light",
  description:
    "Compare Canada's leading Super Visa Insurance plans and get a fast super visa insurance quote online at Bright Light Immigration\u2014easy, reliable, and affordable.",
};

export default function SuperVisaPage() {
  return <ImmigrationPageLayout data={superVisaData} />;
}
