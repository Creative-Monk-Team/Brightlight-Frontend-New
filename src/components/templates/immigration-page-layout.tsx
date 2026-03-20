"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OurProcess from "@/components/sections/our-process";
import FAQInternal from "@/components/sections/faq-internal";
import Testimonials from "@/components/sections/testimonials";
import RecentBlogs from "@/components/sections/recent-blogs";

/* ------------------------------------------------------------------
   Type definitions for immigration page data
   ------------------------------------------------------------------ */

export interface QuickAccessItem {
  label: string;
  id: string;
}

export interface EligibilityCard {
  text: string;
  href: string;
}

export interface DrawCard {
  text: string;
  href: string;
}

export interface WhyChooseUsItem {
  boldText: string;
  rest: string;
}

export interface ImmigrationPageData {
  heading: string;
  description: string;
  description2?: string;

  aboutDescription: string;
  aboutDescription2?: string;
  aboutImage?: string;

  benefitsHeading?: string;
  benefits?: string[];

  eligibilityHeading?: string;
  eligibilityDescription?: string;
  eligibilityCards?: EligibilityCard[];

  drawHeading?: string;
  drawCards?: DrawCard[];

  advantageHeading?: string;
  advantageDescription?: string;
  advantages?: string[];

  drawHistoryButton?: { text: string; href: string };

  refusalHeading?: string;
  refusals?: string[];

  whyChooseUsHeading?: string;
  whyChooseUsItems?: WhyChooseUsItem[];

  appointmentHeading?: string;
  appointmentDescription?: string;

  faqHeading?: string;
  faqs?: { question: string; answer: string }[];

  showTestimonials?: boolean;
}

/* ------------------------------------------------------------------
   Quick Access items shared across all template pages
   ------------------------------------------------------------------ */
const DEFAULT_QUICK_ACCESS: QuickAccessItem[] = [
  { label: "About the program", id: "about-program" },
  { label: "Eligibility", id: "eligibility" },
  { label: "Advantages", id: "advantages" },
  { label: "Refusal Reason", id: "refusal-reason" },
  { label: "Draw History", id: "draw-history" },
  { label: "Appointment", id: "appointment" },
  { label: "Why Choose us", id: "why-choose-us" },
  { label: "Testimonials", id: "testimonials" },
  { label: "FAQs", id: "faqs" },
  { label: "Blogs", id: "blogs" },
];

/* ------------------------------------------------------------------
   ImmigrationPageLayout - reusable template for ~65 immigration pages
   ------------------------------------------------------------------ */
export default function ImmigrationPageLayout({
  data,
  quickAccess,
}: {
  data: ImmigrationPageData;
  quickAccess?: QuickAccessItem[];
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const items = quickAccess || DEFAULT_QUICK_ACCESS;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Build FAQ data object for FAQInternal component
  const faqData: Record<string, string> = {};
  if (data.faqHeading) faqData.faq_heading = data.faqHeading;
  if (data.faqs) {
    data.faqs.forEach((faq, i) => {
      faqData[`q${i + 1}`] = faq.question;
      faqData[`qa${i + 1}`] = faq.answer;
    });
  }

  return (
    <>
      {/* ===== BANNER ===== */}
      <div
        className="w-full bg-cover bg-no-repeat bg-center py-[100px] pt-[230px] max-[1000px]:pt-[180px] max-[580px]:pt-[150px]"
        style={{ backgroundImage: "url('/images/canadaBlue.jpeg')" }}
      >
        <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto text-center">
          <div>
            <h1 className="text-gold text-[50px] max-[580px]:text-[34px]">
              {data.heading}
            </h1>
            <p className="text-white w-[74%] max-[1000px]:w-full mx-auto text-[25px] max-[580px]:text-[18px] leading-[1.8] pt-[20px]">
              {data.description}
            </p>
            {data.description2 && (
              <p className="text-white w-[74%] max-[1000px]:w-full mx-auto text-[25px] max-[580px]:text-[18px] leading-[1.8] pt-[20px]">
                {data.description2}
              </p>
            )}
          </div>

          {/* Quick Access dropdown */}
          <div
            className={`w-[700px] max-[1080px]:w-full mx-auto flex max-[1080px]:flex-col text-center justify-center items-center text-white mt-[50px] ${
              isDropdownOpen ? "active" : ""
            }`}
          >
            <div
              className="max-[1080px]:flex max-[1080px]:justify-between max-[1080px]:items-center max-[1080px]:cursor-pointer max-[1080px]:w-full border-b border-white max-[1080px]:border-none pb-5 max-[1080px]:pb-0"
              style={{ transform: "rotate(-90deg)" }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <h3 className="text-[30px] max-[1080px]:text-[24px] max-[730px]:text-[20px] max-[490px]:text-[18px] max-[1080px]:transform-none whitespace-nowrap">
                QUICK ACCESS
              </h3>
            </div>
            <div
              className={`ml-[-50px] max-[1080px]:ml-0 max-[1080px]:bg-[#f7f7f7] max-[1080px]:p-[10px] max-[1080px]:absolute max-[1080px]:top-full max-[1080px]:left-0 max-[1080px]:w-full max-[1080px]:z-10 max-[1080px]:shadow-[0_4px_6px_rgba(0,0,0,0.1)] ${
                isDropdownOpen ? "max-[1080px]:block" : "max-[1080px]:hidden"
              }`}
            >
              {items.map((item) => (
                <p
                  key={item.id}
                  className="text-left max-[1080px]:text-center pb-[8px] max-[1080px]:pb-0 max-[1080px]:py-[10px] text-[28px] max-[1080px]:text-[18px] max-[1080px]:text-[#00273f] cursor-pointer"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== ABOUT PROGRAM ===== */}
      <div
        id="about-program"
        className="max-w-[1440px] max-[1460px]:max-w-[95%] flex max-[1000px]:flex-col-reverse justify-between items-center mx-auto text-left my-[100px] max-[1000px]:my-[60px]"
      >
        <div className="w-[46%] max-[1000px]:w-full max-[1000px]:text-center text-gray-text text-[20px] max-[580px]:text-[16px] leading-[1.8]">
          <p className="mb-[35px]">{data.aboutDescription}</p>
          {data.aboutDescription2 && (
            <p className="mb-[35px]">{data.aboutDescription2}</p>
          )}
        </div>
        {data.aboutImage && (
          <div className="w-[46%] max-[1000px]:w-full max-[1000px]:mb-[80px]">
            <Image
              loading="lazy"
              height={500}
              width={500}
              src={data.aboutImage}
              alt="About Program"
              className="rounded-[20px] w-full h-auto"
            />
          </div>
        )}
      </div>

      {/* ===== BENEFITS ===== */}
      {data.benefitsHeading && data.benefits && data.benefits.length > 0 && (
        <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto">
          <h1 className="text-[50px] max-[580px]:text-[34px] text-[#153b58] mb-[50px]">
            {data.benefitsHeading}
          </h1>
          <ul className="ml-[40px] list-disc">
            {data.benefits.map((b, i) => (
              <li
                key={i}
                className="text-gray-text text-[25px] max-[580px]:text-[18px] mb-[30px] leading-[1.8]"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ===== ELIGIBILITY / PATHWAYS ===== */}
      {data.eligibilityHeading && (
        <div
          id="eligibility"
          className="w-full bg-primary py-[100px] max-[580px]:py-[60px]"
        >
          <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto">
            <h1 className="text-white text-[60px] max-[1000px]:text-[50px] max-[580px]:text-[34px] max-[490px]:text-[26px] text-center">
              {data.eligibilityHeading}
            </h1>
            {data.eligibilityDescription && (
              <p className="text-white/80 text-[20px] max-[580px]:text-[16px] text-center mt-4">
                {data.eligibilityDescription}
              </p>
            )}
            {data.eligibilityCards && data.eligibilityCards.length > 0 && (
              <div className="flex justify-around mt-[90px] max-[1000px]:grid max-[1000px]:grid-cols-2 max-[1000px]:gap-[40px] max-[1000px]:justify-items-center max-[330px]:flex max-[330px]:flex-col max-[330px]:items-center">
                {data.eligibilityCards.map((card, i) => (
                  <Link
                    key={i}
                    href={card.href}
                    className="h-[270px] w-[275px] max-[1260px]:w-[240px] max-[540px]:w-[170px] max-[540px]:h-[210px] max-[490px]:w-[150px] max-[490px]:h-[150px] max-[445px]:w-[170px] max-[445px]:h-[170px] max-[395px]:w-[150px] max-[395px]:h-[150px] max-[330px]:w-[60%] max-[330px]:h-[180px] bg-white flex flex-col items-center justify-center text-center rounded-[20px] text-primary p-[60px_20px] max-[540px]:p-[33px_20px] max-[490px]:p-[28px_20px] transition-all duration-300 hover:bg-gold hover:text-white cursor-pointer no-underline"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/graduatedStudent.png"
                      alt={card.text}
                      className="h-[100px] w-[100px] max-[540px]:h-[84px] max-[540px]:w-[84px] max-[490px]:h-[65px] max-[490px]:w-[65px]"
                    />
                    <h2 className="text-2xl font-semibold mt-[40px] max-[540px]:text-[18px] max-[490px]:text-[16px] max-[445px]:text-[14px] max-[395px]:text-[13px] max-[490px]:mt-[20px]">
                      {card.text}
                    </h2>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== DRAW HISTORY ===== */}
      {data.drawHeading && data.drawCards && data.drawCards.length > 0 && (
        <div id="draw-history" className="bg-primary">
          <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto text-left py-[50px] text-gold">
            <h1 className="text-[60px] max-[1000px]:text-[36px] max-[580px]:text-[26px] max-[1000px]:text-center pb-[30px]">
              {data.drawHeading}
            </h1>
            <div className="flex max-[1000px]:flex-col mx-auto py-[50px] justify-between gap-4">
              {data.drawCards.map((card, i) => (
                <Link
                  key={i}
                  href={card.href}
                  className="h-[180px] max-[1000px]:h-[180px] max-[1000px]:w-[300px] max-[1000px]:mb-[40px] max-[1000px]:mx-auto py-[70px] w-[340px] max-[1090px]:w-[250px] max-[490px]:w-[220px] max-[490px]:h-[140px] max-[490px]:py-[65px] max-[490px]:px-[10px] bg-white text-primary rounded-[15px] mx-auto items-center text-center cursor-pointer hover:opacity-90 no-underline flex items-center justify-center"
                >
                  <h2 className="text-[24px] max-[1090px]:text-[14px] max-[490px]:text-[14px]">
                    {card.text}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== ADVANTAGES ===== */}
      {data.advantageHeading && (
        <div id="advantages" className="w-full pb-[20px] pt-[100px]">
          <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto max-[1000px]:text-center">
            <h1 className="text-[50px] max-[580px]:text-[34px] text-[#153b58] mb-[50px]">
              {data.advantageHeading}
            </h1>
            {data.advantageDescription && (
              <p className="text-gray-text text-[25px] max-[580px]:text-[18px] mb-[30px] leading-[1.8]">
                {data.advantageDescription}
              </p>
            )}
            {data.advantages && data.advantages.length > 0 && (
              <ul className="list-disc ml-[50px] w-[90%] flex flex-col gap-4 mb-10">
                {data.advantages.map((a, i) => (
                  <li
                    key={i}
                    className="text-gray-text text-[25px] max-[580px]:text-[18px] leading-[1.8]"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* ===== PREVIOUS DRAW HISTORY BUTTON ===== */}
      {data.drawHistoryButton && (
        <div className="block mx-auto text-center mb-[50px]">
          <Link
            href={data.drawHistoryButton.href}
            className="bg-[#00273f] text-white border-none rounded-[10px] px-[30px] py-[20px] max-[730px]:px-[15px] max-[730px]:py-[10px] text-[20px] max-[730px]:text-[15px] uppercase cursor-pointer hover:opacity-90 no-underline inline-block"
          >
            {data.drawHistoryButton.text}
          </Link>
        </div>
      )}

      {/* ===== REFUSAL REASONS ===== */}
      {data.refusalHeading && data.refusals && data.refusals.length > 0 && (
        <div id="refusal-reason" className="w-full bg-primary py-[100px]">
          <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto">
            <h1 className="text-[#ecca86] text-left max-[1000px]:text-center text-[50px] max-[580px]:text-[26px]">
              {data.refusalHeading}
            </h1>
            <ul className="ml-[40px] pt-[40px] list-disc">
              {data.refusals.map((r, i) => (
                <li
                  key={i}
                  className="text-white max-w-[1340px] max-[1460px]:max-w-full text-left max-[1000px]:text-center mt-[50px] text-[25px] max-[580px]:text-[18px] leading-[1.8]"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ===== WHY CHOOSE US ===== */}
      {data.whyChooseUsHeading &&
        data.whyChooseUsItems &&
        data.whyChooseUsItems.length > 0 && (
          <div
            id="why-choose-us"
            className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto mt-[30px] mb-[50px]"
          >
            <h2 className="text-[44px] max-[1460px]:text-[34px]">
              {data.whyChooseUsHeading}
            </h2>
            <ul className="ml-[40px] mt-[30px] list-disc">
              {data.whyChooseUsItems.map((item, i) => (
                <li
                  key={i}
                  className="text-[20px] max-[1460px]:text-[16px] mt-[8px]"
                >
                  <strong>{item.boldText}</strong> {item.rest}
                </li>
              ))}
            </ul>
          </div>
        )}

      {/* ===== APPOINTMENT ===== */}
      {data.appointmentHeading && (
        <div id="appointment" className="w-full py-[50px]">
          <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto text-left max-[1000px]:text-center">
            <h1 className="text-primary text-[70px] max-[580px]:text-[40px] pb-[40px]">
              {data.appointmentHeading}
            </h1>
            {data.appointmentDescription && (
              <p className="text-black leading-[1.9] text-[27px] max-[1000px]:text-[20px]">
                {data.appointmentDescription}
              </p>
            )}
            <Link
              href="/booking"
              className="inline-block bg-[#00273f] text-white py-[15px] px-[25px] text-center no-underline rounded-[5px] text-base mt-[30px] cursor-pointer hover:opacity-90 mx-auto block"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}

      {/* ===== OUR PROCESS (matching old site service pages) ===== */}
      <div id="Our-process">
        <OurProcess />
      </div>

      {/* ===== FAQ ===== */}
      {data.faqs && data.faqs.length > 0 && (
        <div id="faqs">
          <FAQInternal data={faqData} />
        </div>
      )}

      {/* ===== TESTIMONIALS ===== */}
      {data.showTestimonials && (
        <div id="testimonials">
          <Testimonials />
        </div>
      )}

      {/* ===== RECENT BLOGS ===== */}
      <div id="blogs">
        <RecentBlogs />
      </div>
    </>
  );
}
