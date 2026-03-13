import type { ImmigrationPageData } from "@/components/templates/immigration-page-layout";

export const restorationOfStatusData: ImmigrationPageData = {
  heading: "Restoration of Status",
  description:
    "Are you a temporary resident in Canada who has lost status? Don't despair! There is a way to regain your legal standing in Canada.",

  aboutDescription:
    "The restoration of status is a process that provides temporary residents with a second chance to maintain their legal presence in Canada. If your temporary status (student visa, visitor permit, or work permit) lapses or expires and you did not apply for an extension before the expiry date, you will be considered out of status. At this point, you have a few options. You can either depart Canada immediately or apply to restore your temporary status. You have a maximum of 90 days from the date your status expires to apply for restoration of your status. This is a very serious situation that should be handled with the utmost importance, as any further delay could have a negative impact on any future applications you may submit. If you meet specific eligibility requirements, you can apply to reinstate your status and continue enjoying the advantages of living and working in Canada. Important things to know: If you're a student or worker on temporary status, you're not allowed to work or study while your restoration application is under review.",

  refusalHeading:
    "Common Reasons for Refusal of Restoration of Status Applications",
  refusals: [
    "Missed the deadline to submit the restoration application within 90 days of the expiry of status.",
    "Continued working or studying on the restoration status.",
    "Did not answer the questions in the application form correctly, completely, and truthfully.",
    "Applied for the wrong type of intent along with the restoration application.",
    "Paid insufficient fees to IRCC.",
  ],

  whyChooseUsHeading: "Why Choose Us?",
  whyChooseUsItems: [
    {
      boldText: "Experienced Team:",
      rest: "Over a decade of experience in handling Immigration applications with a high success rate.",
    },
    {
      boldText: "Tailored Approach:",
      rest: "Personalized services and strategies based on your specific case.",
    },
    {
      boldText: "High Success Rate:",
      rest: "Proven track record using case law and precedents for positive results.",
    },
    {
      boldText: "Comprehensive Support:",
      rest: "Assistance from the start of the application process to obtaining your PR.",
    },
  ],

  appointmentHeading: "Still not sure?",
  appointmentDescription:
    "If you have received a refusal for any reason, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in the cases we work on. This is why we have a high success rate. At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",

  faqHeading: "FAQ's Made Simple",
  faqs: [
    {
      question:
        "How long does restoration of status take in Canada?",
      answer:
        "The processing times for status restoration applications in Canada can vary depending on the type of application (visitor, student, or work) and the current processing backlog with IRCC. However, it is generally expected to take 4-5 months.",
    },
    {
      question:
        "What happens if my restoration of the status file is declined?",
      answer:
        "If your restoration of status application is declined, you will be advised to leave Canada immediately. However, in most cases, you can also apply for temporary resident permit.",
    },
    {
      question: "What happens if I overstay in Canada?",
      answer:
        "Staying beyond your allowed duration not only jeopardises your current visitor, student, or work privileges but also risks the cancellation of your immigration status. This situation can even hinder your chance to obtain permanent residence. Furthermore, it could result in additional consequences such as being labelled as inadmissible.",
    },
    {
      question:
        "How many days are considered overstay in Canada?",
      answer:
        "Once your status expires, you can either depart Canada immediately or you have 90 days to file a restoration of status application. If you choose not to pursue either of these remedies and continue staying in Canada beyond the 90-day limit, you face the risk of being removed.",
    },
  ],

  showTestimonials: false,
};
