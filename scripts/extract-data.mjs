#!/usr/bin/env node
/**
 * One-time script to extract all data from the Brightlight backend API.
 * Saves JSON responses to data/api-responses/ directory.
 * Decodes base64 images and saves them to public/images/api/.
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://brightlight-node.onrender.com";
const DATA_DIR = join(__dirname, "..", "src", "data", "api-responses");
const IMG_DIR = join(__dirname, "..", "public", "images", "api");

// Create output directories
mkdirSync(DATA_DIR, { recursive: true });
mkdirSync(IMG_DIR, { recursive: true });

// All endpoints to fetch (page endpoints + shared section endpoints)
const ENDPOINTS = [
  // Homepage sections
  "home-top",
  "news-section",
  "loveneet",
  "loveneetBg",
  "loveneetBgAlt",
  "featuresAlt",
  "memberOfAlt",
  "member-of",
  "features",
  "achievements-section",
  "services-section",
  "blog-section",

  // Shared sections
  "faq-section",
  "videos-section",
  "testimonials-section",
  "aboutUsBestChoiceSection",
  "bestChoice",
  "plane",
  "our-process",
  "map",

  // About Us sections
  "aboutUsTopSection",
  "aboutUsVisionSection",
  "aboutUsFoundationSection",
  "aboutUsPillarsSection",
  "aboutUsAchievementsSection",
  "aboutUsGloballySection",
  "aboutUsSocialPresenceSection",
  "directors",
  "we-are",
  "weAreSmall",
  "ourFoundationSection",
  "ourVisionSection",
  "ourPillarsSection",
  "globally",
  "socialMedia",

  // Contact
  "contact-page",

  // Immigration page endpoints
  "express-entry",
  "permanent-residency",
  "category-based",
  "categoryBasedExpress",
  "federal-skilled",
  "federalSkilledWorkerProgam",
  "federalSkilledTradedProgam",
  "canadianExperienceClass",
  "entry-level-semi-skilled",
  "bc-pnp-page",
  "bcpnp",
  "pnp-page",
  "rnip-page",
  "rcip-page",
  "skilled-worker-stream",
  "health-authority-stream",
  "international-graduate-program-page",
  "international-post-graduate-program-page",
  "priorities-program-page",
  "pilotProgram",
  "agiFoodPilotProgram",
  "frenchTargatedDraw",
  "healthcareTargatedDraw",
  "stemTagatedDraw",
  "tradeOccupationTargetedDraw",
  "transportOccupaationTargetedDraw",
  "agricultureAgriFoodOccupation",
  "educationCategory",
  "studentVisa",
  "insideCanada",
  "outsideCanada",
  "sds",
  "nonSds",
  "studyPermitMinors",
  "visitorVisa",
  "buisinessVisitorVisa",
  "superVisa",
  "dualIntetVisa",
  "temporaryResidency",
  "temporaryResidentPermit",
  "extensionsDraft",
  "visitorToStudent",
  "changeCollegeProgram",
  "workPermit",
  "openWorkPer",
  "OpenWorkPermitForSpouseIn",
  "openWorkDependentChild",
  "openWorkVulnerable",
  "pgwp",
  "spousalOpenWorkPermit",
  "bridgingOpenWork",
  "Lmia",
  "lowWageLmia",
  "globalStreamLmia",
  "agricultureStreamLmia",
  "francoMob",
  "in-home-caregiver",
  "pathway-for-caregiver",
  "permanentResidencyPathwayCaregiver",
  "spouseCommomlawSponsership",
  "SpouseInland",
  "SpouseOutland",
  "commonLawPartnerTemporary",
  "commonLawPartnerPermanent",
  "comLawPartnerIntern",
  "ParentsGrandparents",
  "dependentChildren",
  "familyReunification",
  "sameSex",
  "cby",
  "pr-renewal",
  "citizenship",
  "flagpoling",
  "restorationStatus",
  "reconsideration",
  "replyPFl",
  "additionalDocument",
  "humanitarian-compassionate",
  "adoption",
  "orphan",
  "lonelyCanadian",
  "clb-calculator",
  "moreServicesPage",
  "more-services-card",
  "immigrationToolsPage",
  "adding-immigration-tools",
  "privacy-policy",
  "terms-conditions",

  // Previous draw history
  "previous-draw-history",
];

async function fetchEndpoint(endpoint) {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!res.ok) {
      console.error(`  [FAIL] ${endpoint}: HTTP ${res.status}`);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`  [FAIL] ${endpoint}: ${error.message}`);
    return null;
  }
}

function extractAndSaveBase64Images(data, endpointName) {
  if (!data || typeof data !== "object") return data;

  const processValue = (value, key) => {
    if (typeof value === "string" && value.startsWith("data:image/")) {
      const match = value.match(/^data:image\/(\w+);base64,(.+)$/);
      if (match) {
        const ext = match[1] === "jpeg" ? "jpg" : match[1];
        const filename = `${endpointName}-${key}.${ext}`;
        const filepath = join(IMG_DIR, filename);
        try {
          writeFileSync(filepath, Buffer.from(match[2], "base64"));
          console.log(`    Saved image: ${filename}`);
          return `/images/api/${filename}`;
        } catch (e) {
          console.error(`    Failed to save image: ${e.message}`);
        }
      }
    }
    return value;
  };

  const processObject = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map((item) => processObject(item));
    }
    if (obj && typeof obj === "object") {
      const result = {};
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "object" && value !== null) {
          result[key] = processObject(value);
        } else {
          result[key] = processValue(value, key);
        }
      }
      return result;
    }
    return obj;
  };

  return processObject(data);
}

async function main() {
  console.log("Starting API data extraction...");
  console.log(`Backend: ${BASE_URL}`);
  console.log(`Total endpoints: ${ENDPOINTS.length}\n`);

  // First, wake up the server (Render free tier cold start)
  console.log("Waking up server...");
  try {
    await fetch(BASE_URL, { signal: AbortSignal.timeout(60000) });
    console.log("Server is awake.\n");
  } catch {
    console.log("Server wake-up attempt completed.\n");
  }

  let success = 0;
  let failed = 0;

  // Process in batches of 5 to avoid overwhelming the server
  for (let i = 0; i < ENDPOINTS.length; i += 5) {
    const batch = ENDPOINTS.slice(i, i + 5);
    const results = await Promise.all(
      batch.map(async (endpoint) => {
        process.stdout.write(`[${i + batch.indexOf(endpoint) + 1}/${ENDPOINTS.length}] ${endpoint}...`);
        const data = await fetchEndpoint(endpoint);

        if (data !== null) {
          // Extract base64 images and replace with file paths
          const processedData = extractAndSaveBase64Images(data, endpoint);

          // Save JSON response
          const filepath = join(DATA_DIR, `${endpoint.replace(/\//g, "_")}.json`);
          writeFileSync(filepath, JSON.stringify(processedData, null, 2));
          console.log(` OK (${Array.isArray(data) ? data.length + " items" : "object"})`);
          success++;
        } else {
          failed++;
        }

        return { endpoint, data };
      })
    );

    // Small delay between batches
    if (i + 5 < ENDPOINTS.length) {
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  console.log(`\nExtraction complete!`);
  console.log(`Success: ${success}/${ENDPOINTS.length}`);
  console.log(`Failed: ${failed}/${ENDPOINTS.length}`);
  console.log(`Data saved to: ${DATA_DIR}`);
  console.log(`Images saved to: ${IMG_DIR}`);
}

main().catch(console.error);
