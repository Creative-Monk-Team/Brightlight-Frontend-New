import type { ImmigrationPageData } from "@/components/templates/immigration-page-layout";

export const expressEntryData: ImmigrationPageData = {
  heading: "Express Entry",
  description:
    "Are you considering making Canada your new home or exploring professional opportunities? The Canadian Express Entry Program might be the pathway for you!",

  aboutDescription:
    "The Canadian Express Entry Program is a points-based system used by the Canadian government to select skilled workers for permanent residence. It's for those skilled individuals who can contribute to the country's economic growth. It is a swift and efficient way for qualified candidates to become permanent residents of Canada.",
  aboutImage: "/images/api/express-entry-aboutImage.webp",

  benefitsHeading: "Benefits of Express Entry",
  benefits: [
    "There are various immigration programs that you can apply through FSWP: Federal Skilled Worker Program, FSTP: Federal Skilled Trades Program, or CEC: Canadian Experience Class. This means that you can choose the program that best suits your qualifications and experience.",
    "Applications for Express Entry are accepted all year round.",
    "Once you receive your permanent residency visa, you can settle anywhere in Canada.",
    "After you have been physically present in Canada for at least 1,095 days (3 years) out of the last 5 years, you can apply for Canadian Citizenship.",
  ],

  eligibilityHeading: "Are you eligible for Express Entry? Let's Find out",
  eligibilityDescription:
    "To be eligible for Canada Express Entry, you must meet the minimum requirements of at least one of the three immigration programs it manages:",
  eligibilityCards: [
    {
      text: "FEDERAL SKILLED WORKER PROGRAM (FSWP)",
      href: "/federal-skilled-worker-program",
    },
    {
      text: "FEDERAL SKILLED TRADES PROGRAM (FSTP)",
      href: "/federal-skilled-trades-program",
    },
    {
      text: "CANADIAN EXPERIENCE PROGRAM (CEC)",
      href: "/canadian-experience-class",
    },
  ],

  drawHeading:
    "In addition to the above programs, there are 3 categories of draws that you can get an Invitation to apply (ITA) from.",
  drawCards: [
    { text: "GENERAL DRAWS", href: "/previous-draw-history" },
    { text: "CATEGORY BASED SELECTION", href: "/category-based" },
    { text: "PNP BASED SELECTION", href: "/pnp" },
  ],

  advantageHeading: "Advantages of Express Entry:",
  advantageDescription:
    "There are various immigration programs that you can apply through: FSWP, FSTP, CEC or category based. This means that you can choose the program that best suits your qualifications and experience.",
  advantages: [
    "Applications for Express Entry are accepted all year round.",
    "Once you receive your permanent residency visa, you can settle anywhere in Canada.",
    "After you have been physically present in Canada for at least 1,095 days (3 years) out of the last 5 years, you can apply for Canadian Citizenship.",
  ],

  drawHistoryButton: {
    text: "Express Entry draws history",
    href: "/previous-draw-history",
  },

  refusalHeading:
    "Don't forget to avoid these common Express Entry refusal reasons and increase your chances of approval.",
  refusals: [
    "You selected an incorrect National Occupational Classification (NOC) code for your application.",
    "You do not meet the minimum requirements for Express Entry, including age, education, work experience, language proficiency, and settlement funds.",
    "Inaccurate and incomplete information about your education, work experience, family members, and previous immigration history.",
    "Missing essential documents, such as police clearances, educational assessments, language test results, work experience verification letters, reference letters etc.",
    "You failed to submit your Express Entry application within 60 days of receiving an Invitation to Apply (ITA).",
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

  appointmentHeading: "In case",
  appointmentDescription:
    "You have received a refusal for any of the reasons mentioned above or having doubts regarding your case and application, do not worry. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs are near to 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate. At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your PR. Start your process now.",

  faqHeading: "FAQ's Made Simple",
  faqs: [
    {
      question: "What is Express Entry?",
      answer:
        "Express Entry is Canada's main economic immigration system for skilled workers, professionals, and international graduates. It is a points-based system that uses a ranking system called the Comprehensive Ranking System (CRS) to select candidates for permanent residency.",
    },
    {
      question: "Who is eligible for Express Entry?",
      answer:
        'To be eligible for Express Entry, you must meet the requirements of one of the three federal economic immigration programs: <ol> <li>Federal Skilled Worker Program (FSWP): This program is for skilled workers who have at least one year of skilled work experience outside of Canada and have a valid job offer from a Canadian employer.</li> <li>Federal Skilled Trades Program (FSTP): This program is for skilled tradespeople who have a valid job offer from a Canadian employer.</li> <li>Canadian Experience Class (CEC): This program is for international graduates who have graduated from a Canadian post-secondary institution and have at least one year of skilled work experience in Canada.</li> </ol>',
    },
    {
      question: "How do I apply for Express Entry?",
      answer:
        "The first step to applying for Express Entry is to create an online Express Entry profile. Once you have created your profile, you will be assigned a CRS score. Your score will be based on factors such as your age, education, work experience, language skills, and adaptability.",
    },
    {
      question: "How do I get an Invitation to Apply (ITA)?",
      answer:
        "IRCC periodically holds draws to invite the highest-ranked candidates in the Express Entry pool to apply for permanent residency. The minimum CRS score required to receive an ITA varies from draw to draw.",
    },
    {
      question:
        "What is the processing time for Express Entry applications?",
      answer:
        "The processing time for Express Entry applications can vary depending on several factors, such as the complexity of your application and the resources available at IRCC. However, the average processing time is currently around 6 months.",
    },
    {
      question:
        "What are the benefits of immigrating to Canada through Express Entry?",
      answer:
        "Express Entry is a streamlined and efficient way to immigrate to Canada. If you are approved for permanent residency through Express Entry, you will be able to live, work, and study in Canada permanently. You will also be eligible for Canadian citizenship after 5 years of residency.",
    },
    {
      question:
        "How can I improve my chances of success in the Express Entry system?",
      answer:
        "There are a few things you can do to improve your chances of success in the Express Entry system: <ul> <li>Maximize your CRS score: You can do this by achieving high scores in your language tests, having a higher level of education, and having more skilled work experience.</li> <li>Become a provincial nominee: If you are nominated by a province or territory, you will receive an additional 600 points in the CRS, which will significantly increase your chances of receiving an ITA.</li> <li>Express interest in specific provinces or territories: If you are interested in living in a particular province or territory, you can express your interest in that region on your Express Entry profile.</li> <li>Learn French</li> <li>Apply without the spouse, and sponsor them once you become PR.</li> </ul>",
    },
  ],

  showTestimonials: false,
};
