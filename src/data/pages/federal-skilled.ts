export interface FederalSkilledOption {
  label: string;
  points: number | "NaN";
}

export interface FederalSkilledQuestion {
  question: string;
  options: FederalSkilledOption[];
}

export interface FederalSkilledSection {
  heading: string;
  questions: FederalSkilledQuestion[];
  /** "radio" renders radio buttons, "radio-stacked" renders full-width radio items, "select" renders a dropdown, "radio-inline" renders flex-start radio items */
  type: "radio" | "radio-stacked" | "select" | "radio-inline";
}

export interface FederalSkilledData {
  heading: string;
  description: string;
  description2: string;
  sections: FederalSkilledSection[];
}

export const federalSkilledData: FederalSkilledData = {
  heading: "Federal Skilled Worker Program Calculator",
  description:
    "In order to be eligible under the Federal Skilled Worker (FSW) Program under the Express Entry Program, you need to meet the general eligibility requirements (link to FSWP Page), and score a minimum of 67 out of 100 points in the FSW selection factors. The points are awarded for different factors, also known as six selection factors. Calculate whether you have enough FSW selection factor points below.In order to be eligible under the Federal Skilled Worker (FSW) Program under the Express Entry Program, you need to meet the general eligibility requirements (link to FSWP Page), and score a minimum of 67 out of 100 points in the FSW selection factors. The points are awarded for different factors, also known as six selection factors. Calculate whether you have enough FSW selection factor points below.",
  description2: "",

  sections: [
    // Section 1: First Official Language (Max. 24 Points)
    {
      heading: "First Official Language (Max. 24 Points)",
      type: "radio",
      questions: [
        {
          question: "Speaking (CLB Level)",
          options: [
            { label: "CLB 9 and Higher", points: 6 },
            { label: "CLB 8", points: 5 },
            { label: "CLB 7", points: 4 },
            { label: "Below CLB 7", points: "NaN" },
          ],
        },
        {
          question: "Listening (CLB Level)",
          options: [
            { label: "CLB 9 and Higher", points: 6 },
            { label: "CLB 8", points: 5 },
            { label: "CLB 7", points: 4 },
            { label: "Below CLB 7", points: "NaN" },
          ],
        },
        {
          question: "Reading (CLB Level)",
          options: [
            { label: "CLB 9 and Higher", points: 6 },
            { label: "CLB 8", points: 5 },
            { label: "CLB 7", points: 4 },
            { label: "Below CLB 7", points: "NaN" },
          ],
        },
        {
          question: "Writing (CLB Level)",
          options: [
            { label: "CLB 9 and Higher", points: 6 },
            { label: "CLB 8", points: 5 },
            { label: "CLB 7", points: 4 },
            { label: "Below CLB 7", points: "NaN" },
          ],
        },
      ],
    },

    // Section 2: Second Official Language
    {
      heading:
        "Do you have at least CLB 5 in all abilities in second official language?",
      type: "radio-inline",
      questions: [
        {
          question: "",
          options: [
            { label: "Yes", points: 10 },
            { label: "No", points: 5 },
          ],
        },
      ],
    },

    // Section 3: Education (Max. 25 Points)
    {
      heading: "",
      type: "radio-stacked",
      questions: [
        {
          question: "Highest level of Education (Max. 25 Points)",
          options: [
            {
              label:
                "University Degree at the Doctoral (PhD) level or equal",
              points: 10,
            },
            {
              label:
                "University Degree at the master\u2019s level or equal or University level entry-to-practice professional degree (or equal)",
              points: 1,
            },
            {
              label:
                "Two or more Canadian post-secondary degrees or diplomas or equal (at least one must be for a program of at least 3 years)",
              points: 5,
            },
            {
              label:
                "Canadian post-secondary degree or diploma for a program of three years or longer, or equal",
              points: 5,
            },
            {
              label:
                "Canadian post-secondary degree or diploma for a program of two years or longer, or equal",
              points: 2,
            },
            {
              label:
                "Canadian post-secondary degree or diploma for a program of one year or longer, or equal",
              points: 5,
            },
            {
              label: "Canadian High School diploma, or equal",
              points: 10,
            },
          ],
        },
      ],
    },

    // Section 4: Age (Max. 12 Points)
    {
      heading: "",
      type: "select",
      questions: [
        {
          question: "Age (maximum 12 points):",
          options: [
            { label: "Under 18", points: 0 },
            { label: "18-35", points: 12 },
            { label: "36", points: 11 },
            { label: "37", points: 10 },
            { label: "38", points: 9 },
            { label: "39", points: 8 },
            { label: "40", points: 7 },
            { label: "41", points: 6 },
            { label: "42", points: 5 },
            { label: "43", points: 4 },
            { label: "44", points: 3 },
            { label: "45", points: 2 },
            { label: "46", points: 1 },
            { label: "47 and older", points: 0 },
          ],
        },
      ],
    },

    // Section 5: Arranged Employment (Max. 10 Points)
    {
      heading: "",
      type: "radio-inline",
      questions: [
        {
          question: "Arranged Employment in Canada (Max. 10 Points)",
          options: [
            {
              label:
                "Do you have a valid arranged employment in Canada? ",
              points: 10,
            },
            { label: "No valid job offers?", points: 0 },
          ],
        },
      ],
    },

    // Section 6: Work Experience (Max. 15 Points)
    {
      heading: "",
      type: "radio",
      questions: [
        {
          question: "Work experience (maximum 15 points)",
          options: [
            { label: "1 Year", points: 9 },
            { label: "2-3 Years", points: 11 },
            { label: "4-5 Years", points: 13 },
            { label: "6 or More Years", points: 15 },
          ],
        },
      ],
    },

    // Section 7: Adaptability (Max. 10 Points)
    {
      heading: "",
      type: "radio-stacked",
      questions: [
        {
          question: "Adaptability (maximum 10 points) ",
          options: [
            {
              label:
                "Your spouse or partner\u2019s language level: Spouse or common-law partner has a CLB 4 or higher in all 4 language abilities ",
              points: 5,
            },
            {
              label:
                "Your past studies in Canada You completed at least 2 academic years of full-time study at a secondary or post-secondary school in Canada ",
              points: 5,
            },
            {
              label:
                "Your spouse or partner\u2019s past studies in Canada: Spouse or common-law partner completed at least 2 academic years of full-time study in Canada",
              points: 5,
            },
            {
              label:
                "Your past work in Canada: You completed at least 1 year of full-time work in Canada in a TEER 0, 1, 2, or 3 categories ",
              points: 10,
            },
            {
              label:
                "Your spouse or partner\u2019s past work in Canada:  Spouse or common-law partner completed at least 1 year of full-time work in Canada",
              points: 5,
            },
            {
              label:
                "Arranged employment in Canada: Do you have a qualifying offer of arranged employment?",
              points: 5,
            },
            {
              label:
                "Relatives in Canada: You or your spouse/common-law partner have a relative who is 18 years or older, a Canadian citizen or permanent resident",
              points: 5,
            },
          ],
        },
      ],
    },
  ],
};
