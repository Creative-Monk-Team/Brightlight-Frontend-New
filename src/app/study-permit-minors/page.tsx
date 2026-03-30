import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { studyPermitMinorsData } from "@/data/pages/study-permit-minors";

export const metadata = generatePageMetadata("study-permit-minors");

export default function StudyPermitMinorsPage() {
  return <ImmigrationPageLayout data={studyPermitMinorsData} />;
}
