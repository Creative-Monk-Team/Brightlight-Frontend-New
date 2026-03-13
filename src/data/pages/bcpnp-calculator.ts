export interface BCPNPCalculatorData {
  heading: string;
  description: string;
  description2: string;

  // Section 1: Directly Related Work Experience
  firstSectionHeading: string;
  fsq1: string;
  fsq1o1: string;
  fsq1o1p: number;
  fsq1o2: string;
  fsq1o2p: number;
  fsq1o3: string;
  fsq1o3p: number;
  fsq1o4: string;
  fsq1o4p: number;
  fsq1o5: string;
  fsq1o5p: number;
  fsq1o6: string;
  fsq1o6p: number;
  fsq1o7: string;
  fsq1o7p: number;

  // Section 2: Additional points - Canada experience
  secondSectionHeading: string;
  ssq1: string;
  ssq1o1: string;
  ssq1o1p: number;
  ssq1o2: string;
  ssq1o2p: number;

  // Section 3: Currently working full-time in B.C.
  thirdSectionHeading: string;
  tsq1: string;
  tsq1o1: string;
  tsq1o1p: number;
  tsq1o2: string;
  tsq1o2p: number;

  // Section 4: Education
  fourthSectionHeading: string;
  fosq1: string;
  fosq1o1: string;
  fosq1o1p: number;
  fosq1o2: string;
  fosq1o2p: number;
  fosq1o3: string;
  fosq1o3p: number;
  fosq1o4: string;
  fosq1o4p: number;
  fosq1o5: string;
  fosq1o5p: number;
  fosq1o6: string;
  fosq1o6p: number;
  fosq1o7: string;
  fosq1o7p: number;

  // Section 5: Additional point for education in B.C. or Canada
  fifthSectionHeading: string;
  ffsq1: string;
  ffsq1o1: string;
  ffsq1o1p: number;
  ffsq1o2: string;
  ffsq1o2p: number;

  // Section 6: Additional points for education in B.C. or Canada
  sixthSectionHeading: string;
  sxsq1: string;
  sxsq1o1: string;
  sxsq1o1p: number;
  sxsq1o2: string;
  sxsq1o2p: number;

  // Section 7: Professional designation in B.C.
  seventhSectionHeading: string;
  svsq1: string;
  svsq1o1: string;
  svsq1o1p: number;
  svsq1o2: string;
  svsq1o2p: number;
  svt1: string;
  svt2: string;
  svt3: string;
  svt4: string;
  svt5: string;
  svt6: string;
  svt7: string;
  svt8: string;
  svt9: string;
  svt10: string;
  svt11: string;

  // Section 8: Language Points
  eighthHeading: string;
  egsq1: string;
  egsq1o1: string;
  egsq1o1p: number;
  egsq1o2: string;
  egsq1o2p: number;
  egsq1o3: string;
  egsq1o3p: number;
  egsq1o4: string;
  egsq1o4p: number;
  egsq1o5: string;
  egsq1o5p: number;
  egsq1o6: string;
  egsq1o6p: number;
  egsq1o7: string;
  egsq1o7p: number;

  // Section 9: Language proficiency in both English and French
  ninthHeading: string;
  nnsq1: string;
  nnsq1o1: string;
  nnsq1o1p: number;
  nnsq1o2: string;
  nnsq1o2p: number;

  // Section 10: Hourly Wage
  tenthHeading: string;

  // Section 11: Area of employment within B.C.
  eleventhHeading: string;
  elsq1: string;
  elsq1o1: string;
  elsq1o1p: number;
  elsq1o2: string;
  elsq1o2p: number;
  elsq1o3: string;
  elsq1o3p: number;

  // Section 12: Additional points for area of employment
  twelevethHeading: string;
  twsq1: string;
  twsq1o1: string;
  twsq1o1p: number;
  twsq1o2: string;
  twsq1o2p: number;
  twsq1o3: string;
  twsq1o3p: number;
}

export const bcpnpCalculatorData: BCPNPCalculatorData = {
  heading: "BCPNP Calculator 2024",
  description:
    "Points are calculated based on job offer, work experience, language ability, and education.",
  description2: "",

  // Section 1: Directly Related Work Experience in the Occupation of B.C. Job Offer
  firstSectionHeading: "",
  fsq1: "Directly Related Work Experience in the Occupation of B.C. Job Offer ",
  fsq1o1: "5 or more years",
  fsq1o1p: 20,
  fsq1o2: "At least 4 but less than 5 years",
  fsq1o2p: 16,
  fsq1o3: "At least 3 but less than 4 years",
  fsq1o3p: 12,
  fsq1o4: "At least 2 but less than 3 years",
  fsq1o4p: 8,
  fsq1o5: "At least 1 but less than 2 years",
  fsq1o5p: 4,
  fsq1o6: " Less than a year",
  fsq1o6p: 1,
  fsq1o7: "No Experience",
  fsq1o7p: 0,

  // Section 2: Additional points - At least 1 year of directly related experience in Canada
  secondSectionHeading: "Additional points: ",
  ssq1: "At least 1 year of directly related experience in  Canada ",
  ssq1o1: "Yes",
  ssq1o1p: 10,
  ssq1o2: "No",
  ssq1o2p: 0,

  // Section 3: Currently working full-time in B.C.
  thirdSectionHeading: "",
  tsq1: "Currently working full-time in B.C. for the employer in the occupation identified in the BC PNP registration ",
  tsq1o1: "Yes",
  tsq1o1p: 10,
  tsq1o2: "No",
  tsq1o2p: 0,

  // Section 4: Education
  fourthSectionHeading: "",
  fosq1: "Education ",
  fosq1o1: "Doctoral Degree",
  fosq1o1p: 27,
  fosq1o2: "Master's Degree",
  fosq1o2p: 22,
  fosq1o3: "Post-Graduate Certificate or Diploma*",
  fosq1o3p: 15,
  fosq1o4: "Bachelor's Degree ",
  fosq1o4p: 15,
  fosq1o5: "Associate Degree ",
  fosq1o5p: 5,
  fosq1o6: "Post-Secondary Diploma/Certificate (Trades or Non-Trades)",
  fosq1o6p: 5,
  fosq1o7: "Secondary School (High School) or less",
  fosq1o7p: 0,

  // Section 5: Additional point for education in B.C. or Canada
  fifthSectionHeading: "ADDITIONAL POINT FOR EDUCATION IN B.C. OR CANADA",
  ffsq1: "Post-Secondary Education Completed in B.C.?",
  ffsq1o1: "Yes",
  ffsq1o1p: 10,
  ffsq1o2: "No",
  ffsq1o2p: 5,

  // Section 6: Additional points for education in B.C. or Canada
  sixthSectionHeading: "Additional points for education in B.C. or Canada ",
  sxsq1: "",
  sxsq1o1: "Post-secondary education completed in B.C., or ",
  sxsq1o1p: 8,
  sxsq1o2: "Post-secondary education completed in Canada (outside of B.C.)",
  sxsq1o2p: 6,

  // Section 7: Additional points for professional designation in B.C.
  seventhSectionHeading:
    "Additional points for professional designation in B.C.: ",
  svsq1: "Eligible professional designation in B.C.",
  svsq1o1: "Yes",
  svsq1o1p: 5,
  svsq1o2: "No",
  svsq1o2p: 0,
  svt1: "Any Trade (Valid trade certificate issued by Skilled TradesBC or trades apprentices registered with Skilled Trades BC)",
  svt2: "NOC 33100 (Dental Assistants)",
  svt3: "NOC 32111 (Dental Hygienists)",
  svt4: "NOC 32112 (Dental Technicians)",
  svt5: "NOC 32110 (Denturists)",
  svt6: "NOC 42202 (Early Childhood Educators)",
  svt7: "NOC 33102 (Health Care Aide)",
  svt8: "NOC 32124 (Pharmacy Technicians)",
  svt9: "NOC 32101 (Practical Nurses)",
  svt10:
    "NOC 32200 (Traditional Chinese medicine practitioners and acupuncturists)",
  svt11: "NOC 32104 (Veterinary technicians)",

  // Section 8: Language Points
  eighthHeading: "",
  egsq1: "Language Points (Lowest Canadian Language Benchmark Level obtained in each of the four competencies: listening, speaking, reading, and writing).",
  egsq1o1: "9+",
  egsq1o1p: 30,
  egsq1o2: "8",
  egsq1o2p: 25,
  egsq1o3: "7",
  egsq1o3p: 20,
  egsq1o4: "6",
  egsq1o4p: 15,
  egsq1o5: "5",
  egsq1o5p: 10,
  egsq1o6: "4",
  egsq1o6p: 5,
  egsq1o7: "Below 4 or no test submitted ",
  egsq1o7p: 0,

  // Section 9: Language proficiency in both English and French
  ninthHeading: "Additional points:",
  nnsq1: "Language proficiency in both English and French",
  nnsq1o1: "Yes",
  nnsq1o1p: 10,
  nnsq1o2: "No",
  nnsq1o2p: 0,

  // Section 10: Hourly Wage of the B.C. Job Offer
  tenthHeading: "Hourly Wage of the B.C. Job Offer ",

  // Section 11: Area of employment within B.C.
  eleventhHeading: "",
  elsq1: "Area of employment within B.C.",
  elsq1o1: "Area 1: Metro Vancouver Regional District ",
  elsq1o1p: 0,
  elsq1o2: "Area 2: Squamish, Abbotsford, Agassiz, Mission, and Chilliwack",
  elsq1o2p: 5,
  elsq1o3: "Area 3: Areas of B.C. not included in Area 1 or 2 ",
  elsq1o3p: 15,

  // Section 12: Additional points for area of employment
  twelevethHeading: "",
  twsq1: "Additional points for area of employment:",
  twsq1o1: "Regional Experience, or",
  twsq1o1p: 10,
  twsq1o2: "Regional Alumni ",
  twsq1o2p: 10,
  twsq1o3: "Not Applicable",
  twsq1o3p: 0,
};
