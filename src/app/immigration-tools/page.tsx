import { generatePageMetadata } from "@/data/generate-metadata";
import Link from "next/link";

export const metadata = generatePageMetadata("immigration-tools");

const tools = [
  {
    name: "Federal Skilled Worker Calculator",
    description:
      "Calculate your CRS score for the Federal Skilled Worker Program and assess your eligibility.",
    href: "/federal-skilled",
  },
  {
    name: "CLB / IELTS Calculator",
    description:
      "Convert your IELTS, CELPIP, or TEF scores to Canadian Language Benchmark (CLB) levels.",
    href: "/clb-ilets-calculator",
  },
  {
    name: "BCPNP Calculator",
    description:
      "Calculate your BC PNP score and assess your eligibility for the BC Provincial Nominee Program.",
    href: "/bcpnp-calculator",
  },
];

export default function ImmigrationToolsPage() {
  return (
    <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto py-[100px] pt-[230px] max-[1000px]:pt-[180px]">
      <div className="text-center mb-[60px]">
        <h1 className="text-primary text-[50px] max-[800px]:text-[35px] mb-[20px]">
          Immigration Tools
        </h1>
        <p className="text-gray-text text-[20px] max-[800px]:text-[16px] leading-[1.8]">
          Use our free calculators and tools to assess your eligibility for
          various Canadian immigration programs.
        </p>
      </div>

      <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[30px]">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="block bg-white rounded-[15px] shadow-[0_3px_15px_rgba(0,0,0,0.1)] p-[30px] no-underline transition-all duration-300 hover:shadow-[0_5px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1"
          >
            <h3 className="text-primary text-[22px] max-[800px]:text-[18px] font-semibold mb-[15px]">
              {tool.name}
            </h3>
            <p className="text-gray-text text-[15px] leading-[1.6]">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
