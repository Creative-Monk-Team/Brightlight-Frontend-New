import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { replyToPflData } from "@/data/pages/reply-to-pfl";

export const metadata: Metadata = {
  title:
    "Responding to Procedural Fairness Letter - Brightlight immigration",
  description:
    "Received a red flag from Canadian immigration? Don't worry! Brightlight Immigration helps you respond to Procedural Fairness Letters and avoid a refusal.",
};

export default function ReplyToPflPage() {
  return <ImmigrationPageLayout data={replyToPflData} />;
}
