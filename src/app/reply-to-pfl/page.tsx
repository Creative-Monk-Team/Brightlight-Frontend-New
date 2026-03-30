import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { replyToPflData } from "@/data/pages/reply-to-pfl";

export const metadata = generatePageMetadata("reply-to-pfl");

export default function ReplyToPflPage() {
  return <ImmigrationPageLayout data={replyToPflData} />;
}
