import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brightlight-node.onrender.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "brightlightimmigration.ca" }],
        destination: "https://www.brightlightimmigration.ca/:path*",
        permanent: true,
      },
      {
        source: "/ParentsGrandparents",
        destination: "/parents-grandparents",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/dash/panel/overwrite",
        destination: "/",
        permanent: false,
      },
      {
        source: "/auth/panel/dash/bright",
        destination: "/",
        permanent: false,
      },
      {
        source: "/ways-to-prove-you-will-leave-canada-at-the-end-of-your-temporary-stay",
        destination:
          "/blogs/8-ways-to-prove-you-will-leave-canada-at-the-end-of-your-temporary-stay-visitor-visa-study-permit-and-work-permit",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/6-options-after-your-pgwp-expires",
        destination:
          "/blogs/6-options-after-your-pgwp-expires-staying-in-canada",
        permanent: true,
      },
      {
        source: "/outside-cananda",
        destination: "/outside-canada",
        permanent: true,
      },
      {
        source: "/business-investor-immigration",
        destination: "/business-visitor-visa",
        permanent: true,
      },
      {
        source: "/study-in-canada",
        destination: "/inside-canada",
        permanent: true,
      },
      {
        source: "/agricultureand-agri-food-occu",
        destination: "/agriculture-agri-food-occupation",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/booking",
        destination: "https://book.brightlightimmigration.ca/",
        permanent: true,
      },
      {
        source: "/login",
        destination: "/admin",
        permanent: false,
      },
      {
        source: "/bridging-open-work-permit-lp",
        destination: "/bridging-open-work-permit",
        permanent: true,
      },
      {
        source: "/education-category",
        destination: "/education-based-draws",
        permanent: true,
      },
      {
        source: "/open-work-dependent-children",
        destination: "/open-work-dependent-child",
        permanent: true,
      },
      {
        source: "/parents-grandparents",
        destination: "/parents-grandparents-sponsorship",
        permanent: true,
      },
      {
        source: "/permanent-residence-pathways-caregivers-lp",
        destination: "/permanent-residency-pathways-caregivers",
        permanent: true,
      },
      {
        source: "/reply-to-pfl-page",
        destination: "/reply-to-pfl",
        permanent: true,
      },
      {
        source: "/restoration-status-draft",
        destination: "/restoration-of-status",
        permanent: true,
      },
      {
        source: "/spouse-common-law-sponsership",
        destination: "/spouse-common-law-sponsorship",
        permanent: true,
      },
      {
        source: "/temporary-resident",
        destination: "/temporary-residency",
        permanent: true,
      },
      {
        source: "/temporary-resident-permit-draft",
        destination: "/temporary-resident-permit",
        permanent: true,
      },
      {
        source: "/inside-canada-1",
        destination: "/inside-canada",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
