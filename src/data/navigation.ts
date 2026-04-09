export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  nestedContainer?: "permanent" | "double";
  children?: MenuItem[];
}

export const SERVICES_MENU: MenuItem[] = [
  {
    id: "pr",
    label: "Permanent Residency",
    href: "/permanent-residency",
    nestedContainer: "permanent",
    children: [
      {
        id: "express-entry",
        label: "Express Entry",
        href: "/express-entry",
        nestedContainer: "double",
        children: [
          { id: "fswp", label: "FSWP", href: "/federal-skilled-worker-program" },
          { id: "fstp", label: "FSTP", href: "/federal-skilled-trades-program" },
          { id: "cec", label: "CEC", href: "/canadian-experience-class" },
          {
            id: "category-based",
            label: "Category Based",
            href: "/category-based",
            nestedContainer: "double",
            children: [
              { id: "cat-french", label: "French Language Proficiency", href: "/french-targeted-draw" },
              { id: "cat-health", label: "Healthcare Occupations", href: "/healthcare-targeted-draw" },
              { id: "cat-stem", label: "STEM Occupations", href: "/stem-targeted-draw" },
              { id: "cat-trade", label: "Trade Occupations", href: "/trade-occupation-targeted-draw" },
              { id: "cat-transport", label: "Transport Occupation Targeted Draws", href: "/transport-occupation-targeted-draw" },
              { id: "cat-agri", label: "Agriculture and Agri-Food Occupation", href: "/agriculture-agri-food-occupation" },
              { id: "cat-education", label: "Education Occupations", href: "/education-based-draws" },
            ],
          },
        ],
      },
      {
        id: "pilot",
        label: "Pilot Program",
        href: "/pilot-programs",
        nestedContainer: "double",
        children: [
          { id: "agri-food", label: "Agri Food Pilot", href: "/agri-food-pilot-program" },
        ],
      },
      {
        id: "pnp",
        label: "Provincial Nominee Programs (PNP)",
        href: "/pnp",
        nestedContainer: "double",
        children: [
          {
            id: "bcpnp",
            label: "BCPNP",
            href: "/bc-pnp",
            nestedContainer: "double",
            children: [
              { id: "bcpnp-skilled", label: "Skilled Worker", href: "/skilled-worker-stream" },
              { id: "bcpnp-health", label: "Health Authority", href: "/health-authority-stream" },
              { id: "bcpnp-elss", label: "Entry Level and Semi-Skilled (ELSS)", href: "/entry-level-semi-skilled" },
              { id: "bcpnp-ig", label: "International Graduate", href: "/international-graduate-program" },
              { id: "bcpnp-ipg", label: "International Post-Graduate", href: "/international-post-graduate-program" },
              { id: "bcpnp-priorities", label: "Program Priorities", href: "/priorities-program" },
            ],
          },
        ],
      },
      {
        id: "other-pr",
        label: "Other PR Pathways",
        href: "#",
        nestedContainer: "double",
        children: [
          { id: "rnip", label: "RNIP (Rural and Northern Immigration Pilot)", href: "/rnip" },
          { id: "rcip", label: "RCIP (Rural Community Immigration Pilot)", href: "/rcip" },
        ],
      },
    ],
  },

  {
    id: "temporary",
    label: "Temporary Residency",
    href: "/temporary-residency",
    nestedContainer: "permanent",
    children: [
      { id: "super-visa", label: "Super Visa", href: "/super-visa" },
      {
        id: "visitor-visa",
        label: "Visitor Visa",
        href: "/visitor-visa",
        nestedContainer: "double",
        children: [
          { id: "business-visitor", label: "Business Visitor Visa", href: "/business-visitor-visa" },
          { id: "dual-intent", label: "Dual Intent Visa", href: "/dual-intent-visa" },
          { id: "reconsideration", label: "Reconsideration for Refusal", href: "/reconsideration" },
        ],
      },
      { id: "trp", label: "Temporary Resident Permits", href: "/temporary-resident-permit" },
      { id: "restoration", label: "Restoration", href: "/restoration-of-status" },
      { id: "extend-stay", label: "Extend Stay", href: "/extensions-draft" },
      { id: "flagpoling", label: "Flagpoling", href: "/flagpoling" },
      {
        id: "spousal-owp",
        label: "Spousal Open Work Permit",
        href: "/spousal-open-work-permit",
        nestedContainer: "double",
        children: [
          { id: "owp-spouse-worker", label: "Open Work Permit - For Spouse of Worker", href: "/common-law-partner-temporary" },
          { id: "owp-spouse-student", label: "Open Work Permit - For Spouse of Student", href: "/cby" },
          { id: "owp-pr-inland", label: "PR Open Work Permit, Inland", href: "/open-work-permit-for-spouse-inland" },
          { id: "owp-franco", label: "Francophone Mobility Program", href: "/francophone-mobility-program" },
        ],
      },
    ],
  },

  {
    id: "student",
    label: "Student Visa",
    href: "/student-visa",
    nestedContainer: "permanent",
    children: [
      {
        id: "outside-canada",
        label: "Outside Canada",
        href: "/outside-canada",
        nestedContainer: "double",
        children: [
          { id: "sds", label: "SDS", href: "/sds" },
          { id: "non-sds", label: "NON SDS", href: "/non-sds" },
        ],
      },
      {
        id: "inside-canada",
        label: "Inside Canada",
        href: "/inside-canada",
        nestedContainer: "double",
        children: [
          { id: "visitor-to-student", label: "Visitor to Student", href: "/visitor-to-student" },
          { id: "dli-change", label: "DLI Change", href: "/change-college-program" },
        ],
      },
      { id: "minor", label: "Study Permit For Minor", href: "/study-permit-minors" },
    ],
  },

  {
    id: "family",
    label: "Family Reunification & Sponsorship",
    href: "/family-reunification-sponsorship",
    nestedContainer: "permanent",
    children: [
      {
        id: "spousal-sponsorship",
        label: "Spousal Sponsorship",
        href: "/spouse-common-law-sponsorship",
        nestedContainer: "permanent",
        children: [
          { id: "spouse-inland", label: "Inside Canada", href: "/spouse-inland" },
          { id: "spouse-outland", label: "Outside Canada", href: "/spouse-outland" },
          { id: "same-sex", label: "Same Sex", href: "/same-sex" },
        ],
      },
      { id: "parents", label: "Parents / Grandparents", href: "/parents-grandparents-sponsorship" },
      { id: "dependent-children", label: "Dependent Children", href: "/dependent-children" },
      { id: "hc", label: "H & C", href: "/humanitarian-compassionate" },
      { id: "orphan", label: "Orphan", href: "/orphan" },
      { id: "adoption", label: "Adoption", href: "/adoption" },
      { id: "lonely-canadian", label: "Lonely Canadian", href: "/lonely-canadian" },
    ],
  },

  {
    id: "work",
    label: "Work Permit",
    href: "/work-permit",
    nestedContainer: "permanent",
    children: [
      {
        id: "lmia",
        label: "LMIA",
        href: "/lmia-reviewed",
        nestedContainer: "double",
        children: [
          { id: "lmia-wage", label: "High Wage / Low Wage", href: "/low-wage-lmia" },
          { id: "lmia-agri", label: "Agriculture", href: "/agriculture-stream-lmia" },
          { id: "lmia-global", label: "Global Talent Stream", href: "/global-stream-lmia" },
          { id: "lmia-caregiver", label: "Caregiver LMIA", href: "/in-home-caregiver-program-lp" },
        ],
      },
      {
        id: "open-work",
        label: "Open Work Permit",
        href: "/open-work-permit",
        nestedContainer: "double",
        children: [
          { id: "bowp", label: "BOWP - Bridging Open Work Permit", href: "/bridging-open-work-permit" },
          { id: "pgwp", label: "PGWP - Post Graduate Open Work Permit", href: "/pgwp" },
          { id: "sowp", label: "SOWP - Spousal Open Work Permit", href: "/spousal-open-work-permit" },
          { id: "franco", label: "Francophone Mobility Program", href: "/francophone-mobility-program" },
          { id: "vulnerable", label: "Vulnerable Worker", href: "/open-work-vulnerable-lp" },
          { id: "dep-child", label: "Dependent Child of Worker", href: "/open-work-dependent-child" },
        ],
      },
      {
        id: "spousal-permit",
        label: "Spousal Permit",
        href: "/spouse-common-law-sponsorship",
        nestedContainer: "double",
        children: [
          { id: "spousal-worker", label: "Open Work Permit - For Spouse of Worker", href: "/spousal-open-work-permit" },
          { id: "spousal-student", label: "Open Work Permit - For Spouse of Student", href: "/cby" },
          { id: "spousal-pr", label: "Open Work Permit - For Spouse of PR", href: "/open-work-permit" },
        ],
      },
      { id: "franco-standalone", label: "Francophone Mobility Program", href: "/francophone-mobility-program" },
    ],
  },

  // Standalone links within Services dropdown
  { id: "lmia-standalone", label: "LMIA", href: "/lmia-reviewed" },
  { id: "franco-standalone2", label: "Francophone Mobility Program", href: "/francophone-mobility-program" },

  {
    id: "caregiver",
    label: "Caregiver",
    href: "/pathways-for-caregiver",
    nestedContainer: "permanent",
    children: [
      { id: "care-in-lmia", label: "Inside - With LMIA", href: "/in-home-caregiver-program-lp" },
      { id: "care-pr", label: "PR Pathways for Care-Giver", href: "/permanent-residency-pathways-caregivers" },
    ],
  },

  // Single-link groups preserved
  {
    id: "pr-renewal",
    label: "PR Renewal",
    href: "/pr-renewal",
    nestedContainer: "permanent",
    children: [
      { id: "pr-renewal-link", label: "PR Renewal", href: "/pr-renewal" },
    ],
  },
  {
    id: "citizenship",
    label: "Citizenship",
    href: "/citizenship",
    nestedContainer: "permanent",
    children: [
      { id: "citizenship-link", label: "Citizenship", href: "/citizenship" },
    ],
  },

  {
    id: "other-services",
    label: "Other Services",
    href: "#",
    nestedContainer: "permanent",
    children: [
      { id: "reconsideration2", label: "Reconsideration of Refusal Decision", href: "/reconsideration" },
      { id: "additional-doc", label: "Additional Document Request", href: "/additional-document" },
      { id: "pfl", label: "PFL", href: "/reply-to-pfl" },
    ],
  },
];

export const CALCULATORS: MenuItem[] = [
  { id: "fswp-calc", label: "FSWP Calculator", href: "/federal-skilled" },
  { id: "clb-calc", label: "CLB Calculator", href: "/clb-ilets-calculator" },
  { id: "bcpnp-calc", label: "BCPNP Calculator", href: "/bcpnp-calculator" },
  { id: "draws-history", label: "Previous Draws History", href: "/previous-draw-history" },
];
