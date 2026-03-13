import type { ImmigrationPageData } from "@/components/templates/immigration-page-layout";

export const permanentResidencyData: ImmigrationPageData = {
  heading: "Permanent Residency",
  description:
    "Make Canada your home through the Permanent Residency program",

  aboutDescription:
    "The Canadian Permanent Residency (PR) Program, managed by Immigration, Refugees and Citizenship Canada (IRCC), allows foreign nationals to obtain permanent resident status in Canada. This status gives you the right to live, work, and study in Canada indefinitely, with the same rights and freedoms as Canadian citizens (except voting and running for office). There are different PR programs available, each with its own eligibility requirements and application process. For over a decade, we have successfully processed thousands of PR applications successfully. We will provide you all the information you need to explore your options and help you select the best one for you.",

  eligibilityHeading: "Pathway's to becoming a PR",
  eligibilityCards: [
    { text: "Express Entry", href: "/express-entry" },
    { text: "Pilot Programs", href: "/pilot-programs" },
    { text: "PNP", href: "/pnp" },
    { text: "RNIP", href: "/rnip" },
  ],

  showTestimonials: true,
};
