import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { temporaryResidentPermitData } from "@/data/pages/temporary-resident-permit";

export const metadata: Metadata = {
  title: "Temporary Residency in Canada | Brightlight Immigration",
  description:
    "Discover Canada with a Temporary Residency Visa. Visit, work, or start a business. Get expert guidance for a smooth application process. Start your journey today!",
};

export default function TemporaryResidentPermitPage() {
  return <ImmigrationPageLayout data={temporaryResidentPermitData} />;
}
