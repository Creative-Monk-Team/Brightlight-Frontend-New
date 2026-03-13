import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions for using Bright Light Immigration Inc. services and website.",
};

const sections = [
  {
    heading: "1. General Information",
    content:
      "We are a licensed Canadian Immigration Consultant (RCIC) providing immigration consultation services to individuals seeking assistance with Canadian immigration processes. Our services include consultations, document preparation, submission of applications, and other related immigration services.",
  },
  {
    heading: "2. Services Provided",
    content:
      "We will provide the services as per our agreement with you, which may include but is not limited to, consultation, document review, and representation before relevant immigration authorities. Please note that the outcome of any immigration application is at the sole discretion of the relevant government authorities. We do not and cannot guarantee the approval of any visa, status, or application.",
  },
  {
    heading: "3. Client Responsibilities",
    content:
      "As a client, you agree to: Provide accurate and complete information regarding your immigration application. Cooperate fully with us in the preparation and submission of your application, including providing all necessary documentation. Respond promptly to our requests for information and maintain regular communication regarding your case. Failure to comply with these responsibilities may result in delays, or application refusal for which we are not responsible.",
  },
  {
    heading: "4. Refund Policy",
    content:
      "Our fees are for professional services rendered in accordance with the scope of work agreed upon. These fees are not contingent on the outcome of your application. In any case of disputes, the final decision making authority is Loveneet Paneswar. The initial payment for services is non-refundable under all circumstances. No refunds will be issued if your application is refused by immigration authorities due to false information, misrepresentation, fraud, medical or security inadmissibility, or failure to adhere to the terms of the agreement.",
  },
  {
    heading: "5. Limitation of Liability",
    content:
      "We are not responsible for delays in processing times, application refusals, or other decisions made by Canadian immigration authorities. The immigration process is at the sole discretion of the relevant government authorities, and we cannot guarantee the outcome of any application.",
  },
  {
    heading: "6. No Services to Sanctioned Countries",
    content:
      "Please note that we do not offer services to any countries that are subject to sanctions by Canada or the United States.",
  },
  {
    heading: "7. Content Protection",
    content:
      "Please note that all content on our website is the intellectual property of Bright Light Immigration Services Inc. We do not permit copying, scraping, or otherwise using our content without our explicit permission.",
  },
  {
    heading: "8. Governing Law",
    content:
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein.",
  },
  {
    heading: "9. Amendments",
    content:
      "We reserve the right to update or amend these Terms and Conditions at any time without prior notice. Any changes will be effective upon posting to the website. It is your responsibility to review these Terms and Conditions periodically.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto py-[100px] pt-[230px] max-[1000px]:pt-[180px]">
      <h1 className="text-primary text-[50px] max-[800px]:text-[35px] max-[580px]:text-[28px] mb-[30px]">
        Terms and Conditions
      </h1>
      <p className="text-gray-text text-[18px] max-[800px]:text-[16px] leading-[1.8] mb-[50px]">
        Welcome to Bright Light Immigration Services Inc. These Terms and
        Conditions govern your use of our website and the services we provide as
        a Regulated Canadian Immigration Consultant. By accessing or using this
        website and our services, you agree to be bound by these Terms and
        Conditions. If you do not agree, please do not use our services.
      </p>

      {sections.map((section) => (
        <div key={section.heading} className="mb-[40px]">
          <h2 className="text-primary text-[28px] max-[800px]:text-[22px] mb-[15px]">
            {section.heading}
          </h2>
          <p className="text-gray-text text-[18px] max-[800px]:text-[16px] leading-[1.8] whitespace-pre-line">
            {section.content}
          </p>
        </div>
      ))}
    </div>
  );
}
