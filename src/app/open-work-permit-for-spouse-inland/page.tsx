import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { openWorkPermitForSpouseInlandData } from "@/data/pages/open-work-permit-for-spouse-inland";

export const metadata: Metadata = {
  title:
    "Canada Open Work Permit for Spouse of Canadian Citizen/PR",
  description:
    "Apply for an Open Work Permit as a spouse or common-law partner of a Canadian permanent resident or citizen. Work while awaiting your PR application processing.",
};

export default function OpenWorkPermitForSpouseInlandPage() {
  return <ImmigrationPageLayout data={openWorkPermitForSpouseInlandData} />;
}
