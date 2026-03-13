import type { Metadata } from "next";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { healthAuthorityStreamData } from "@/data/pages/health-authority-stream";

export const metadata: Metadata = {
  title: "BC Health Authority Stream | Apply for Canadian PR",
  description:
    "Looking to immigrate to BC? The Health Authority Stream offers job opportunities in healthcare and other fields. Fast-track your PR with no draws or Express Entry profile.",
};

export default function HealthAuthorityStreamPage() {
  return <ImmigrationPageLayout data={healthAuthorityStreamData} />;
}
