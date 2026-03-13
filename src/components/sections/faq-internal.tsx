"use client";

import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

interface FAQData {
  faq_heading?: string;
  [key: string]: string | undefined;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQInternal({ data }: { data: FAQData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [faqHeading, setFaqHeading] = useState("");

  useEffect(() => {
    if (data) {
      setFaqHeading(data.faq_heading || "");
      const items: FAQItem[] = [];
      for (let i = 1; i <= 21; i++) {
        const question = data[`q${i}`]?.trim();
        const answer = data[`qa${i}`]?.trim();
        if (question && answer) {
          items.push({ question, answer });
        }
      }
      setFaqData(items);
    }
  }, [data]);

  if (!faqData.length) return null;

  return (
    <section
      id="faqs"
      className="w-full bg-[url('/images/faqimage1.png')] bg-no-repeat bg-[position:calc(110%+1%)_calc(100%-50%)] bg-[size:40%] overflow-hidden flex items-center justify-center py-[50px]"
    >
      {/* Desktop Layout */}
      <div className="max-w-[1440px] w-full hidden min-[1100px]:flex items-center justify-between max-[1380px]:w-[95%]">
        <div className="flex items-start justify-start gap-[30px] w-[60%]">
          <div
            className="w-[150px] h-[150px] bg-[url('/images/blue-polygon.webp')] bg-cover flex items-center justify-center text-white font-extrabold text-[100px] shrink-0"
          >
            <p>?</p>
          </div>
          <div className="w-[75%]">
            <h1 className="text-primary text-[50px] font-extrabold max-[820px]:text-[40px]">
              {faqHeading}
            </h1>
            <div className="border-r border-primary pr-[30px] py-[10px]">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-start justify-between cursor-pointer mt-[20px] first:mt-[30px] hover:-translate-y-[5px] transition-transform duration-300 ${
                    activeIndex === index ? "[&_p]:font-extrabold [&_svg]:block" : ""
                  }`}
                >
                  <p className="w-[90%] text-primary transition-all duration-100 text-[20px]">
                    {item.question}
                  </p>
                  <FaChevronRight className="hidden w-[30px] h-[30px] text-primary shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="w-[38%] -mt-[30px] text-[20px] [&_p]:mb-2 [&_ul]:ml-5 [&_ol]:ml-5 [&_li]:mb-2"
          dangerouslySetInnerHTML={{ __html: faqData[activeIndex]?.answer }}
        />
      </div>

      {/* Mobile Layout */}
      <div className="max-w-[1440px] w-full flex min-[1100px]:hidden flex-col justify-between max-[1380px]:w-[95%]">
        <div className="flex items-start justify-start gap-[30px] w-full max-[820px]:flex-col">
          <div
            className="w-[100px] h-[100px] bg-[url('/images/blue-polygon.webp')] bg-cover flex items-center justify-center text-white font-extrabold text-[50px] shrink-0"
          >
            <p>?</p>
          </div>
          <div className="w-full">
            <h1 className="text-primary text-[50px] font-extrabold text-left max-[820px]:text-[40px]">
              {faqHeading}
            </h1>
            <div className="py-[10px]">
              {faqData.map((item, index) => (
                <div key={index}>
                  <div
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-start justify-between cursor-pointer mt-5 first:mt-[30px] hover:-translate-y-[5px] transition-transform duration-300 ${
                      activeIndex === index ? "[&_p]:font-extrabold [&_svg]:block" : ""
                    }`}
                  >
                    <p className="w-[90%] text-primary transition-all duration-100 text-[20px] max-[820px]:text-[15px]">
                      {item.question}
                    </p>
                    <FaChevronRight className="hidden w-[15px] h-[15px] rotate-90 text-primary shrink-0" />
                  </div>
                  {activeIndex === index && (
                    <div
                      className="w-full mx-auto text-[15px] mb-10 mt-[10px] pt-5 border-t border-primary [&_p]:mb-2 [&_ul]:ml-5 [&_ol]:ml-5 [&_li]:mb-2"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
