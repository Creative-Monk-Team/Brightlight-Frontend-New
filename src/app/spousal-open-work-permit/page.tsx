import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { spousalOpenWorkPermitData } from "@/data/pages/spousal-open-work-permit";

export const metadata: Metadata = {
  title: "Spousal Open Work Permit (SOWP) for Canada: Apply Now",
  description:
    "Bring your spouse to Canada with a Spousal Open Work Permit (SOWP). Let them work freely and contribute to your family's success while living in Canada.",
};

export default function SpousalOpenWorkPermitPage() {
  return <ImmigrationPageLayout data={spousalOpenWorkPermitData} />;
}
