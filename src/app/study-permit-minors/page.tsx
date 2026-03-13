import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { studyPermitMinorsData } from "@/data/pages/study-permit-minors";

export const metadata: Metadata = {
  title: "Canadian Study Permit - Apply for Your Minor Child's",
  description:
    "Help your child secure a bright future with a Canadian study permit. Explore education options in Canada for minors under 18 with Brightlight Immigration.",
};

export default function StudyPermitMinorsPage() {
  return <ImmigrationPageLayout data={studyPermitMinorsData} />;
}
