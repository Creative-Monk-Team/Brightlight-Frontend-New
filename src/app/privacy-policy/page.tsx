import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy of Bright Light Immigration Inc. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    heading: "Information Gathering and Dissemination",
    content:
      "Brightlight Immigration does not sell, resell, lease, disclose, or license your personal information including your name, phone number, or email address to third parties without your consent. All information provided is kept in the strictest confidence. Brightlight Immigration discloses potentially-identifying and personally-identifying information only to its employees, contractors, or affiliated organizations where necessary to process it on Brightlight Immigration's behalf or to provide services available at Brightlight Immigration's websites.",
  },
  {
    heading: "Website Visitors",
    content:
      "We use your IP address to help us identify problems with our server and to administer our website. We also use your IP address to gather broad demographic information for our internal use. Brightlight Immigration collects non-personally-identifying information to better understand how our visitors use our website.",
  },
  {
    heading: "Cookies",
    content:
      "Brightlight Immigration uses cookies to help us identify and track visitors, their usage of our website, and their website access preferences. Visitors to our website who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Brightlight Immigration's websites.",
  },
  {
    heading: "Aggregated Statistics",
    content:
      "Brightlight Immigration may collect statistics about the behavior of visitors to our websites. However, Brightlight Immigration does not disclose personally-identifying information.",
  },
  {
    heading: "Business Transfers",
    content:
      "If Brightlight Immigration or substantially all of its assets were acquired or in the unlikely event that Brightlight Immigration goes out of business, user information would be one of the assets that is transferred or acquired by a third party.",
  },
  {
    heading: "Ads",
    content:
      "Ads appearing on any of our websites may be delivered to users by advertising partners who may set cookies to compile information about you.",
  },
  {
    heading: "External Links",
    content:
      "Our website contains hyperlinks to other websites operated by third parties who are not affiliated with Brightlight Immigration. We are not responsible for the privacy practices or content of such websites.",
  },
  {
    heading: "Public Forum/Newsgroup",
    content:
      "This website may make available the use of a public forum/newsgroup. Please note that any information disclosed in this forum becomes public information.",
  },
  {
    heading: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this website, please contact us.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto py-[100px] pt-[230px] max-[1000px]:pt-[180px]">
      <h1 className="text-primary text-[50px] max-[800px]:text-[35px] max-[580px]:text-[28px] mb-[30px]">
        Privacy &amp; Policy
      </h1>
      <p className="text-gray-text text-[18px] max-[800px]:text-[16px] leading-[1.8] mb-[50px]">
        Bright Light Immigration Inc. (herein referred to as &quot;Brightlight
        Immigration&quot; or &quot;our&quot; or &quot;we&quot;) owns the domain
        name www.brightlightimmigration.ca and may operate other websites. It is
        our policy to respect your privacy regarding information we may collect
        while operating our websites. We created this Privacy Policy in order to
        demonstrate our commitment to privacy. The following discloses our
        information gathering and dissemination practices for this website.
      </p>

      {sections.map((section) => (
        <div key={section.heading} className="mb-[40px]">
          <h2 className="text-primary text-[28px] max-[800px]:text-[22px] mb-[15px]">
            {section.heading}
          </h2>
          <p className="text-gray-text text-[18px] max-[800px]:text-[16px] leading-[1.8]">
            {section.content}
          </p>
        </div>
      ))}
    </div>
  );
}
