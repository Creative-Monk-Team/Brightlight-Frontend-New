#!/usr/bin/env node
/**
 * This script updates all immigration service page.tsx files to use
 * generatePageMetadata() for self-referencing canonical URLs and per-page OG tags.
 * 
 * It replaces:
 *   import type { Metadata } from "next";
 *   ...
 *   export const metadata: Metadata = {
 *     title: "...",
 *     description: "...",
 *   };
 * 
 * With:
 *   import { generatePageMetadata } from "@/data/generate-metadata";
 *   ...
 *   export const metadata = generatePageMetadata("slug-name");
 */

const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../src/app');
const skipDirs = new Set(['admin', 'search', 'layout.tsx', 'page.tsx', 'globals.css', 'robots.ts', 'sitemap.ts', 'not-found.tsx']);

// Pages that have "use client" and can't use generateMetadata
const clientPages = new Set();

let updated = 0;
let skipped = 0;

const dirs = fs.readdirSync(appDir).filter(item => {
  const fullPath = path.join(appDir, item);
  return fs.statSync(fullPath).isDirectory() && !skipDirs.has(item);
});

for (const dir of dirs) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    continue;
  }
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Skip client components (they can't export metadata)
  if (content.includes('"use client"') || content.includes("'use client'")) {
    skipped++;
    console.log(`SKIP (client): ${dir}`);
    continue;
  }
  
  // Skip if already using generatePageMetadata
  if (content.includes('generatePageMetadata')) {
    skipped++;
    console.log(`SKIP (already updated): ${dir}`);
    continue;
  }
  
  // Check if it has the standard metadata pattern
  if (!content.includes('export const metadata: Metadata = {')) {
    skipped++;
    console.log(`SKIP (no metadata pattern): ${dir}`);
    continue;
  }
  
  const slug = dir;
  
  // Replace the import
  content = content.replace(
    'import type { Metadata } from "next";',
    'import { generatePageMetadata } from "@/data/generate-metadata";'
  );
  
  // Replace the metadata export - match multi-line pattern
  content = content.replace(
    /export const metadata: Metadata = \{[\s\S]*?\n\};/,
    `export const metadata = generatePageMetadata("${slug}");`
  );
  
  fs.writeFileSync(pagePath, content, 'utf8');
  updated++;
  console.log(`UPDATED: ${dir}`);
}

console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`);
