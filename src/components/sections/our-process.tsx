"use client";

import { useState, useEffect, useRef } from "react";
import { ourProcessSection, processSteps } from "@/data/pages/homepage";

const PLANE_POSITIONS = ["20%", "35%", "50%", "65%"];

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40 && rect.bottom >= 0) return;
    el.classList.add("fade-up");
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          obs.disconnect();
        }
      },
      { rootMargin: "-40px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

export default function OurProcess() {
  const [planePos, setPlanePos] = useState(PLANE_POSITIONS[0]);

  // HowTo JSON-LD schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Immigrate to Canada with Bright Light Immigration",
    description: ourProcessSection.description,
    step: processSteps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.heading,
      text: step.points.join(" "),
    })),
  };

  return (
    <section className="w-full py-[40px] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="max-w-[1440px] mx-auto max-[1470px]:w-[95%]">
        <FadeIn className="text-center">
          <h2 className="text-primary text-[60px] max-[790px]:text-[40px] max-[580px]:text-[30px] font-semibold">
            {ourProcessSection.heading}
          </h2>
          <p className="text-primary text-[24px] max-[790px]:text-[18px] max-[580px]:text-[16px] tracking-[1px] font-semibold mt-5">
            {ourProcessSection.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[580px]:grid-cols-1 gap-10 mt-[100px] max-[580px]:mt-[60px]">
          {processSteps.map((step, index) => {
            const isBlue = index % 2 === 0;
            return (
              <FadeIn key={index} delay={index * 0.12} className="h-full">
                <div
                  onMouseEnter={() => setPlanePos(PLANE_POSITIONS[index])}
                  className={`p-10 max-[580px]:p-5 group hover:scale-[1.03] transition-all duration-500 rounded-4xl h-full ${
                    isBlue
                      ? "our-process-card-odd-shadow"
                      : "our-process-card-even-shadow"
                  }`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={isBlue ? "/images/blue-pointer.png" : "/images/golden-pointer.png"}
                      alt={`Step ${index + 1}`}
                      className="h-40 w-36 object-cover transition-all duration-500 group-hover:-rotate-90"
                    />
                    <p
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[70px] max-[580px]:text-[50px] font-[1000] ${
                        isBlue ? "text-[#184d79]" : "text-[#e0b969]"
                      }`}
                    >
                      {index + 1}
                    </p>
                  </div>
                  <h3 className="text-[19px] max-[580px]:text-[16px] font-semibold text-primary mb-[25px] mt-4 text-left ml-[25px] max-[580px]:ml-0">
                    {step.heading}
                  </h3>
                  <ul className="list-disc w-[250px] max-[580px]:w-full mx-auto text-left">
                    {step.points.map((point, pi) => (
                      <li
                        key={pi}
                        className="text-[13px] max-[580px]:text-[12px] mb-[10px] leading-relaxed"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Runway with animated plane */}
        <div className="mt-8 max-[790px]:hidden relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/runway.png" alt="Process runway" className="w-full h-auto" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/plane.png"
            alt="Airplane"
            className="absolute bottom-[30px] w-[150px] h-auto transition-all duration-500 ease-in-out"
            style={{ left: planePos }}
          />
        </div>
      </div>
    </section>
  );
}
