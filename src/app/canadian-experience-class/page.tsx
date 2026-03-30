import { generatePageMetadata } from "@/data/generate-metadata";
import ImmigrationPageLayout from "@/components/templates/immigration-page-layout";
import { canadianExperienceClassData } from "@/data/pages/canadian-experience-class";

export const metadata = generatePageMetadata("canadian-experience-class");

export default function CanadianExperienceClassPage() {
  return <ImmigrationPageLayout data={canadianExperienceClassData} />;
}
