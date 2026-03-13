// =============================================================================
// Homepage Static Data
// Extracted from API endpoints and hardcoded for static rendering
// =============================================================================

// ---------------------------------------------------------------------------
// Banner / Top Section (from home-top.json)
// ---------------------------------------------------------------------------
export const homeTopSection = {
  headline1: "Feeling Overwhelmed? ",
  headline2: "Just Received a Refusal?",
  smallHeadline1: "WE'VE HELPED MANY OVERCOME THEM",
};

// ---------------------------------------------------------------------------
// Services Section (from services-section.json)
// ---------------------------------------------------------------------------
export const servicesSection = {
  heading: "Our Expertise is Your Success",
  description:
    "Whether you're a student, a professional, or an entrepreneur dreaming of Canada, we're here to help you achieve it. Our Immigration visa services in Canada are tailored to your needs, making your journey to Canadian dream smooth.",
};

export interface ServiceCard {
  title: string;
  img: string;
  desc: string;
  alt: string;
  href: string;
}

const SERVICE_LINK_MAP: Record<string, string> = {
  "Permanent Residency": "/permanent-residency",
  BCPNP: "/bc-pnp",
  "Visitor Visa": "/visitor-visa",
  "Study Visa": "/student-visa",
  "Family Sponsorship": "/family-reunification-sponsorship",
  "Work Permit": "/work-permit",
  PFL: "/reply-to-pfl-page",
};

export const serviceCards: ServiceCard[] = [
  {
    title: "Permanent Residency",
    img: "/images/api/services-section-service1svg.png",
    desc: "Establish your permanent roots in Canada and enjoy a future filled with diverse pathways with our expert guidance.",
    alt: "Permanent Residency",
    href: SERVICE_LINK_MAP["Permanent Residency"],
  },
  {
    title: "BCPNP",
    img: "/images/api/services-section-service2svg.png",
    desc: "The B.C. PNP Calculator 2024 helps assess eligibility for British Columbia's Provincial Nominee Program with up-to-date criteria and scoring.",
    alt: "BCPNP",
    href: SERVICE_LINK_MAP["BCPNP"],
  },
  {
    title: "Visitor Visa",
    img: "/images/api/services-section-service3svg.png",
    desc: "The Visitor Visa Calculator estimates eligibility and requirements for visiting Canada, ensuring you meet the latest visa criteria.",
    alt: "Visitor Visa",
    href: SERVICE_LINK_MAP["Visitor Visa"],
  },
  {
    title: "Study Visa",
    img: "/images/api/services-section-service4svg.png",
    desc: "Expand your mind and explore endless possibilities through a top-tier education with a Canadian Student Visa.",
    alt: "Study Visa",
    href: SERVICE_LINK_MAP["Study Visa"],
  },
  {
    title: "Family Sponsorship",
    img: "/images/api/services-section-service5svg.png",
    desc: "Bring your family together in Canada through our streamlined family sponsorship services.",
    alt: "Family Sponsorship",
    href: SERVICE_LINK_MAP["Family Sponsorship"],
  },
  {
    title: "Work Permit",
    img: "/images/api/services-section-service6svg.png",
    desc: "Are you considering your professional growth in Canada? The Canadian Work Permit is your key then.",
    alt: "Work Permit",
    href: SERVICE_LINK_MAP["Work Permit"],
  },
  {
    title: "PFL",
    img: "/images/api/services-section-service7svg.png",
    desc: "Procedural Fairness Letter (PFL), Reply to Additional Document Request, Reconsideration of Refusal Decision Program.",
    alt: "PFL",
    href: SERVICE_LINK_MAP["PFL"],
  },
];

// ---------------------------------------------------------------------------
// Member Of section (from member-of.json + memberOfAlt.json)
// ---------------------------------------------------------------------------
export interface MemberCard {
  heading: string;
  img: string;
  alt: string;
}

export const memberCards: MemberCard[] = [
  {
    heading: "Member Of",
    img: "/images/api/member-of-heading1Img.png",
    alt: "RCIC",
  },
  {
    heading: "Member Of",
    img: "/images/api/member-of-heading2Img.png",
    alt: "Canadian Association of Professional Immigration Consultants",
  },
  {
    heading: "Accepted By",
    img: "/images/api/member-of-heading3Img.png",
    alt: "CICC",
  },
];

// ---------------------------------------------------------------------------
// Features / Why Us section (from features.json + featuresAlt.json)
// ---------------------------------------------------------------------------
export interface Feature {
  heading: string;
  description: string;
  svg: string;
  alt: string;
}

export const features: Feature[] = [
  {
    heading: "Simplifying Immigration Challenges",
    description:
      "We understand the stress and confusion you might be facing. Our expert team knows every twist and turn of the complex immigration process making it faster and easier than you'd imagine.",
    svg: "/images/api/features-feature1SVG.png",
    alt: "Simplifying Immigration Challenges",
  },
  {
    heading: "Expert in Refusal Cases",
    description:
      "We have a proven track record of success in helping individuals overcome refusals, even those with 3 or 4 refusals. Our team of experienced professionals will carefully review your case and develop a personalised strategy to help you achieve your immigration goals.",
    svg: "/images/api/features-feature2SVG.png",
    alt: "Expert in Refusal Cases",
  },
];

// ---------------------------------------------------------------------------
// Achievements section (from achievements-section.json)
// ---------------------------------------------------------------------------
export interface Achievement {
  svg: string;
  numbers: number;
  heading: string;
  alt: string;
}

export const achievementsSection = {
  heading: "Some Aspects that Hold Significance!",
  description: "OUR ACHIEVEMENTS IN THE SUCCESSFUL JOURNEY HAVE BEEN REMARKABLE",
};

export const achievements: Achievement[] = [
  {
    svg: "/images/api/achievements-section-achievement1SVG.png",
    numbers: 10727,
    heading: "VISA PROCESSED",
    alt: "VISA PROCESSED",
  },
  {
    svg: "/images/api/achievements-section-achievement2SVG.webp",
    numbers: 10112,
    heading: "SUCCESS STORIES",
    alt: "SUCCESS STORIES",
  },
  {
    svg: "/images/api/achievements-section-achievement3SVG.webp",
    numbers: 10346,
    heading: "HAPPY CLIENTS",
    alt: "HAPPY CLIENTS",
  },
];

// ---------------------------------------------------------------------------
// Loveneet section (from loveneetBg.json + loveneet.json + loveneetBgAlt.json)
// ---------------------------------------------------------------------------
export const loveneetSection = {
  bgImage: "/images/api/loveneetBg-image.jpg",
  bgAlt: "Regulated Canadian Immigration Consultant",
  linkedinLink: "https://ca.linkedin.com/in/loveneet-paneswar-5b2377198",
  rcicAppointmentUrl: "/booking",
};

// ---------------------------------------------------------------------------
// Our Process section (from our-process.json)
// ---------------------------------------------------------------------------
export interface ProcessStep {
  heading: string;
  points: string[];
}

export const ourProcessSection = {
  heading: "Our Process",
  description: "IT'S QUITE EASY. WE PROMISE",
};

export const processSteps: ProcessStep[] = [
  {
    heading: "PERSONALISED ASSESMENT",
    points: [
      "Firstly, we will identify and understand your Canadian immigration needs and goals.",
      "Then, we will assess your eligibility for various immigration programs accordingly.",
      "We will recommend the best pathway for your immigration goals after assessment.",
      "Any questions you have about the chosen pathway will be addressed along with any other concerns.",
    ],
  },
  {
    heading: "TAILORED APPROACH",
    points: [
      "We'll create a custom Canadian immigration plan suited just for you according to the pathway selected.",
      "Based on this plan, you'll receive a clear proposal from us outlining our services and payment structure, i.e., 50% before processing your file and 50% before submission.",
      "Once the initial 50% payment is made, we'll share a comprehensive checklist to ensure everything is ready",
    ],
  },
  {
    heading: "APPLICATION FULFILLMENT",
    points: [
      "A case manager will be assigned to guide you and collect documents as per the checklist.",
      "We'll prepare a strong application within 7-10 business days.",
      "Once your application is ready, we'll send it to you for review and final approval.",
      "After your approval, simply pay the remaining 50% payment, and your application will be submitted.",
    ],
  },
  {
    heading: "TRUSTED PARTNERSHIP",
    points: [
      "Once your application is submitted successfully, we'll keep you informed at every stage of the process, from submission to decision.",
      "Our ongoing support and guidance will help you achieve your immigration goals.",
      "You can reach out to us to inquire about updates on your application.",
      "If satisfied with our service, we hope you'll feel inclined to refer others to us.",
    ],
  },
];

// ---------------------------------------------------------------------------
// FAQ section (from faq-section.json)
// ---------------------------------------------------------------------------
export const homepageFaqData: Record<string, string> = {
  faq_heading: "FAQ's Made Simple",
  q1: "Who can immigrate to Canada?",
  qa1: "A wide range of people can immigrate to Canada, including skilled workers, students, family members, entrepreneurs, and refugees. Each category has its own eligibility requirements.",
  q2: "What are the different immigration programs available?",
  qa2: "There are over 100 different immigration programs, each with specific eligibility criteria and application processes. Some popular programs include Express Entry, Provincial Nominee Programs (PNPs) etc",
  q3: "What are the costs associated with immigrating to Canada?",
  qa3: "There are various costs associated with immigration, including application fees, medical exams, travel costs, and settlement expenses. ",
  q4: "What are the benefits of immigrating to Canada?",
  qa4: "Canada offers a high quality of life, strong job opportunities, universal healthcare, and a welcoming multicultural society.",
  q5: "How can I prepare for life in Canada?",
  qa5: "Learning English or French, researching about the culture, and connecting with other immigrants can help you prepare for life in Canada.",
  q6: "Do I need a consultant to immigrate to Canada?",
  qa6: "While not mandatory, however, an experienced  licensed consultant can be helpful for a stress-free and positive application even in cases where you have multiple previous refusals",
  q7: "Canada's immigration policies seem to change all the time. How can I stay informed about how these changes might affect me?",
  qa7: "You're right, Canadian immigration regulations and policies do occasionally undergo updates and revisions. Luckily, we have a division - Bright Source that can help you stay up-to-date on these changes and understand how they might impact your own situation. Additionally, you can follow us on social platforms for prompt updates. ",
  q8: "How can I help a friend or a family member visit me in Canada?",
  qa8: "Planning a visit for a family member or friend is exciting, and Canada welcomes guests with open arms! First and foremost, file a suitable visa application relevant to their case that also explains the purpose of their visit. The intended purpose can affect the type of visa or authorization needed. Remember, start planning early, especially for visas which may have longer processing times.",
};
