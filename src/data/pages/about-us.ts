export interface AboutUsTopSection {
  heading: string;
  description: string;
  feature1Heading: string;
  feature2Heading: string;
}

export interface AboutUsFoundationSection {
  heading: string;
  headline1: string;
  headline2: string;
  description1: string;
  description2: string;
}

export interface AboutUsVisionSection {
  heading: string;
  headline1: string;
  headline2: string;
  description: string;
}

export interface AboutUsPillarsSection {
  heading: string;
  description1: string;
  pillar1Heading: string;
  pillar1Description: string;
  pillar2Heading: string;
  pillar2Description: string;
  pillar3Heading: string;
  pillar3Description: string;
}

export interface Director {
  image: string;
  name: string;
  designation: string;
  description: string;
}

export interface AchievementCard {
  icon: string;
  numbers: string;
  heading: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

export interface AboutUsSocialPresenceSection {
  heading: string;
  description1: string;
  description2: string;
  findUsOnHeading: string;
  phoneImage: string;
  socialLinks: SocialLink[];
}

export interface AboutUsGloballySection {
  heading: string;
  backgroundImage: string;
}

export interface AboutUsAchievementsSection {
  heading: string;
  cards: AchievementCard[];
}

export interface AboutUsData {
  topSection: AboutUsTopSection;
  foundationSection: AboutUsFoundationSection;
  foundationImage: string;
  visionSection: AboutUsVisionSection;
  visionImage: string;
  pillarsSection: AboutUsPillarsSection;
  pillarsImage: string;
  directors: {
    heading: string;
    list: Director[];
  };
  weAreImage: string;
  achievements: AboutUsAchievementsSection;
  socialPresence: AboutUsSocialPresenceSection;
  globally: AboutUsGloballySection;
  googleMapsLink: string;
}

export const aboutUsData: AboutUsData = {
  topSection: {
    heading: "The Guiding Light for a Brighter Future!",
    description:
      "Bright Light Immigration Inc. is a trusted immigration consulting firm based in Vancouver, serving Globally. We provide comprehensive services to individuals seeking to immigrate to Canada. We understand every twist and turn of the complex immigration process, whether its permanent residency, temporary residency, student visas, family reunification, work permits, LMIAs, caregiver services, PR renewal, or citizenship. We streamline and expedit the process to a level you never thought possible.",
    feature1Heading:
      "Trusted Canadian Immigration expert with over 12 years of experience.",
    feature2Heading: "Providing Comprehensive immigration services.",
  },

  foundationSection: {
    heading: "Our Foundation",
    headline1:
      "Creating continuous possibilities for your immigration goals.",
    headline2: "Make lasting connections with you based on trust.",
    description1:
      "We\u2019re driven by a passion to create continuous possibilities for those who seek our guidance for Canadian immigration. We believe that immigration is not just about paperwork and procedures, it is about making the way for individuals to pursue their dreams, connect with loved ones or build a better future.",
    description2:
      "Unlike some immigration agencies, we\u2019re dedicated to putting your interest first and providing personalized and tailored approach towards your query. We understand that each case is unique, and we take the time to understand your individual circumstances and goals. Our meticulous process ensures that your immigration journey is as smooth and successful as possible. Ultimately, our goal is to foster a lasting connection with our clients, built on trust and responsibility.",
  },
  foundationImage: "/images/api/ourFoundationSection-image.png",

  visionSection: {
    heading: "Our Vision",
    headline1:
      "Guiding aspiring clients for a brighter future in Canada.",
    headline2:
      "Leading the immigration industry with pioneering success.",
    description:
      "We\u2019re driven by a passion to create continuous possibilities for those who seek our guidance for Canadian immigration. We believe that immigration is not just about paperwork and procedures, it is about making the way for individuals to pursue their dreams, connect with loved ones or build a better future.",
  },
  visionImage: "/images/api/ourVisionSection-image.png",

  pillarsSection: {
    heading: "Our Pillars",
    description1:
      "We uphold the highest ethical standards, take responsibility for our actions and our clients needs, and fulfill our commitments to achieve successful outcomes. Integrity, responsibility and reliability are the pillars of our brand and the driving forces behind our success.",
    pillar1Heading: "INTEGRITY",
    pillar1Description: "We stand behind our word",
    pillar2Heading: "RESPONSIBILITY",
    pillar2Description: "We take behind our commitment seriously",
    pillar3Heading: "RELIABILITY",
    pillar3Description: "You can count us, always",
  },
  pillarsImage: "/images/api/ourPillarsSection-image.png",

  directors: {
    heading: "Meet the Directors",
    list: [
      {
        image: "/images/api/directors-d1image.webp",
        name: "Loveneet Paneswar",
        designation: "Founder & RCIC Consultant",
        description:
          'Loveneet Paneswar, the "guiding light" of Brightlight Immigration, is one of the firm\u2019s founders and a Regulated Canadian Immigration Consultant (RCIC) with over a decade of experience and an exceptional track record of success.',
      },
      {
        image: "/images/api/directors-d2image.webp",
        name: "Sumir Paneswar",
        designation: "Co-Founder & Chief Client Manager",
        description:
          "Sumir Paneswar is another founding member of Brightlight Immigration. Mr. Sumir is our Chief Client Manager & brand\u2019s Spokesperson, deeply committed to addressing all of our clients inquiries and concerns.",
      },
    ],
  },

  weAreImage: "/images/api/we-are-img.png",

  achievements: {
    heading: "Our achievements are continually growing",
    cards: [
      {
        icon: "/images/visa.png",
        numbers: "10727",
        heading: "VISA PROCESSED",
      },
      {
        icon: "/images/tick-blue.png",
        numbers: "10112",
        heading: "SUCCESS STORIES",
      },
      {
        icon: "/images/smile-blue.png",
        numbers: "10346",
        heading: "HAPPY CLIENTS",
      },
    ],
  },

  socialPresence: {
    heading: "Our Social Presence",
    description1:
      "Looking for the latest Canadian immigration news and insights? Want to see how we\u2019ve helped past clients achieve their goals? Or maybe you just want some reassurance that we\u2019ll handle your case with care? Well, you\u2019re in luck! Our social media platforms are buzzing with all that and more.",
    description2:
      "So, what are you waiting for? Head over to our social media pages, give us a follow, and join the conversation! We promise it\u2019ll be worth your time.",
    findUsOnHeading: "Find Us On",
    phoneImage: "/images/api/socialMedia-image.png",
    socialLinks: [
      {
        name: "TikTok",
        icon: "/images/tiktok1Icon.png",
        href: "https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1",
      },
      {
        name: "LinkedIn",
        icon: "/images/linkedin1Icon.png",
        href: "https://ca.linkedin.com/in/loveneet-paneswar-5b2377198",
      },
      {
        name: "Instagram",
        icon: "/images/insta.png",
        href: "https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p",
      },
      {
        name: "Facebook",
        icon: "/images/facebook1Icon.png",
        href: "https://www.facebook.com/brightlightimmigration",
      },
      {
        name: "YouTube",
        icon: "/images/youtube1Icon.png",
        href: "https://www.youtube.com/@BrightApprovals",
      },
    ],
  },

  globally: {
    heading: "We are Vancouver based, serving Globally.",
    backgroundImage: "/images/api/globally-image.png",
  },

  googleMapsLink: "https://maps.app.goo.gl/7kMGthryJPzurSQu5",
};
