import { generatePageMetadata } from "@/data/generate-metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = generatePageMetadata("more-services");

const services = [
  {
    name: "Permanent Residency",
    desc: "Canada welcomes thousands of skilled individuals from around the world every year...",
    link: "/permanent-residency",
  },
  {
    name: "Temporary Residence",
    desc: "Temporary residency in Canada is a status granted by Canadian immigration...",
    link: "/temporary-residency",
  },
  {
    name: "Family Reunification & Sponsorship",
    desc: "Canada is renowned for its welcoming spirit...",
    link: "/family-reunification-sponsorship",
  },
  {
    name: "LMIA Work Permit",
    desc: "If you're looking to apply for an LMIA, it's because you are either a foreign worker who wants to apply for a job on a temporary...",
    link: "/lmia-reviewed",
  },
  {
    name: "Citizenship",
    desc: "After completing your 3 years of PR journey in Canada...",
    link: "/citizenship",
  },
  {
    name: "Express Entry",
    desc: "The Canadian Express Entry Program is a points-based system used by the residence...",
    link: "/express-entry",
  },
  {
    name: "PNP",
    desc: "While the federal Express Entry system remains a popular pathway to Canadian residence...",
    link: "/pnp",
  },
  {
    name: "Franco-Mobility Program",
    desc: "Mobilité Francophone: Unlocking Opportunities for French-Speaking Workers...",
    link: "/francophone-mobility-program",
  },
  {
    name: "Work Permit",
    desc: "The Canadian Work Permit is your key to accessing these exciting professional opportunities...",
    link: "/work-permit",
  },
  {
    name: "PR Renewal",
    desc: "You have lived in Canada for at least 2 years out of the last 5 years...",
    link: "/pr-renewal",
  },
  {
    name: "Super Visa",
    desc: "The Super Visa is a temporary visa program offered to parents and grandparents of Canadian citizens...",
    link: "/super-visa",
  },
  {
    name: "Spousal Sponsorship",
    desc: "The Canadian government understands the importance of bringing loved ones together...",
    link: "/spouse-common-law-sponsorship",
  },
  {
    name: "Temporary Resident Permit",
    desc: "The Temporary Resident Permit (TRP) is a legal document issued by Citizenship and Immigration Canada...",
    link: "/temporary-resident-permit",
  },
  {
    name: "Emergency Visa",
    desc: "An emergency visa is a type of visa that allows individuals to travel to a country urgently due to unforeseen circumstances...",
    link: "/visitor-visa",
  },
  {
    name: "PGWP",
    desc: "If you are an international student who has graduated from a designated learning institution (DLI) in Canada, you may be eligible for a PGWP...",
    link: "/pgwp",
  },
  {
    name: "Flagpoling",
    desc: "Flagpoling is a legal process of exiting Canada and re-entering the country without physically crossing into the USA...",
    link: "/flagpoling",
  },
  {
    name: "Restoration Status Draft",
    desc: "Are you a temporary resident in Canada who has lost status? Don't despair! There is a way to regain your legal standing...",
    link: "/restoration-of-status",
  },
  {
    name: "Humanitarian and Compassionate (H&C)",
    desc: "Unlike traditional immigration programs that prioritize factors like education, work experience, and language proficiency...",
    link: "/humanitarian-compassionate",
  },
  {
    name: "PFL",
    desc: "Responding to a Procedural Fairness Letter (PFL) is a crucial step in addressing concerns raised...",
    link: "/reply-to-pfl",
  },
  {
    name: "Dual Intent Visa",
    desc: "A Dual Intent Visa allows you to have two different reasons for visiting Canada...",
    link: "/dual-intent-visa",
  },
  {
    name: "Extension of Temporary Status",
    desc: "The plans can change, and you may need to extend your stay in Canada for various reasons...",
    link: "/extensions-draft",
  },
  {
    name: "Caregiver",
    desc: "The Canadian government is actively welcoming foreign residents with the right skills and experience to fill the country's critical need for caregivers...",
    link: "/pathways-for-caregiver",
  },
];

export default function MoreServicesPage() {
  return (
    <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto py-[100px] pt-[230px] max-[1000px]:pt-[180px]">
      {/* Heading */}
      <div className="text-center mb-[60px]">
        <h1 className="text-primary text-[60px] max-[800px]:text-[40px] max-[580px]:text-[30px] mb-[20px]">
          What We Do
        </h1>
        <p className="text-gray-text text-[20px] max-[800px]:text-[16px] leading-[1.8] max-w-[800px] mx-auto">
          Bright Light Immigration Inc. is a trusted immigration consulting firm
          based in Vancouver, serving Globally. We provide comprehensive services
          to individuals seeking to immigrate to Canada.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[30px]">
        {services.map((service) => (
          <Link
            key={service.name}
            href={service.link}
            className="group block bg-white rounded-[15px] shadow-[0_3px_15px_rgba(0,0,0,0.1)] p-[30px] no-underline transition-all duration-300 hover:shadow-[0_5px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1"
          >
            <div className="flex items-center gap-[15px] mb-[15px]">
              <Image
                loading="lazy"
                height={40}
                width={40}
                src="/images/api/more-services-card-blue_stroke_img.png"
                alt=""
                className="w-[40px] h-[40px] group-hover:hidden"
              />
              <Image
                loading="lazy"
                height={40}
                width={40}
                src="/images/api/more-services-card-white_stroke_img.png"
                alt=""
                className="w-[40px] h-[40px] hidden group-hover:block"
              />
              <h3 className="text-primary text-[20px] max-[800px]:text-[16px] font-semibold">
                {service.name}
              </h3>
            </div>
            <p className="text-gray-text text-[15px] leading-[1.6]">
              {service.desc}
            </p>
            <span className="inline-block mt-[15px] text-gold font-semibold text-[14px]">
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
