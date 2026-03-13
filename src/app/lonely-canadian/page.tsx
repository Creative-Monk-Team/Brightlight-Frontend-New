import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { lonelyCanadianData } from "@/data/pages/lonely-canadian";

export const metadata: Metadata = {
  title: "Canada's Family Sponsorship - Reunite with Loved Ones",
  description:
    "Support your lonely or orphaned relatives through Canada's family sponsorship program. Learn about the conditions and bring your family together in Canada.",
};

export default function LonelyCanadianPage() {
  return <ImmigrationPageLayout data={lonelyCanadianData} />;
}
