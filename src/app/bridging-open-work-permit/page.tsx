import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { bridgingOpenWorkPermitData } from "@/data/pages/bridging-open-work-permit";

export const metadata: Metadata = {
  title: "Apply for Work Permit in Canada | Bright Light Immigration",
  description:
    "Looking to stay and work in Canada? Apply for a Bridging Open Work Permit with Bright Light Immigration. Trusted support for a smooth and stress-free process.",
};

export default function BridgingOpenWorkPermitPage() {
  return <ImmigrationPageLayout data={bridgingOpenWorkPermitData} />;
}
