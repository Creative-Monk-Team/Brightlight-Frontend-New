"use client";

import { useState, useMemo } from "react";
import {
  federalSkilledData,
  type FederalSkilledOption,
} from "@/data/pages/federal-skilled";

const data = federalSkilledData;

// Build a flat list of question keys: "s{sectionIndex}-q{questionIndex}"
function buildQuestionKeys() {
  const keys: string[] = [];
  data.sections.forEach((section, si) => {
    section.questions.forEach((_, qi) => {
      keys.push(`s${si}-q${qi}`);
    });
  });
  return keys;
}

const questionKeys = buildQuestionKeys();

export default function FederalSkilledPage() {
  // Track points per individual question (keyed by "s{sectionIdx}-q{questionIdx}")
  const [questionPoints, setQuestionPoints] = useState<
    Record<string, number | "NaN">
  >(() => {
    const initial: Record<string, number | "NaN"> = {};
    questionKeys.forEach((key) => {
      initial[key] = 0;
    });
    return initial;
  });

  const handlePointChange = (
    sectionIndex: number,
    questionIndex: number,
    option: FederalSkilledOption
  ) => {
    const key = `s${sectionIndex}-q${questionIndex}`;
    setQuestionPoints((prev) => ({
      ...prev,
      [key]: option.points,
    }));
  };

  const handleSelectChange = (
    sectionIndex: number,
    questionIndex: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const optionIndex = parseInt(e.target.value, 10);
    const options =
      data.sections[sectionIndex].questions[questionIndex].options;
    const option = options[optionIndex];
    handlePointChange(sectionIndex, questionIndex, option);
  };

  // Calculate total -- if any question has "NaN" points, the entire result is NaN
  const { isNotEligible, displayResult } = useMemo(() => {
    const values = Object.values(questionPoints);
    const hasNaN = values.some((p) => p === "NaN");
    if (hasNaN) {
      return {
        isNotEligible: true,
        displayResult: "Not Eligible To Apply" as string | number,
      };
    }
    const total = (values as number[]).reduce((sum, p) => sum + p, 0);
    return {
      isNotEligible: false,
      displayResult: total as string | number,
    };
  }, [questionPoints]);

  return (
    <>
      {/* Banner */}
      <div className="bg-[url('/images/canadaBlue.jpeg')] bg-no-repeat bg-cover w-full py-[100px] pt-[230px]">
        <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto text-center text-white">
          <h1 className="text-[60px] max-[1400px]:text-[45px] max-[1080px]:text-[42px] max-[860px]:text-[40px] max-[700px]:text-[32px] max-[490px]:text-[30px] pb-[80px] text-[#dec18f] font-bold">
            {data.heading}
          </h1>
          <p className="font-light text-[28px] max-[1400px]:text-[25px] max-[1080px]:text-[18px] max-[700px]:text-[15px] leading-[45px] max-[860px]:leading-[30px] max-[860px]:pb-[20px] max-[1080px]:pb-[40px]">
            {data.description}
          </p>
          {data.description2 && (
            <p className="font-light text-[28px] max-[1400px]:text-[25px] max-[1080px]:text-[18px] max-[700px]:text-[15px] leading-[45px] max-[860px]:leading-[30px]">
              {data.description2}
            </p>
          )}
        </div>
      </div>

      {/* Calculator Content */}
      <div className="flex items-stretch justify-between max-w-[1440px] max-[1440px]:max-w-[95%] mx-auto mt-[100px] max-[1080px]:flex-col">
        {/* Left: Questions */}
        <div className="w-[66%] max-[1080px]:w-[95%] max-[1080px]:mx-auto">
          {data.sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white"
            >
              {/* Section Header */}
              <div className="text-[24px] font-bold">
                <div className="flex items-center gap-[10px]">
                  <div>{sectionIndex + 1}</div>
                  <p className="h-[1.1px] w-full bg-primary" />
                  {section.heading && (
                    <h3 className="w-full text-primary font-medium max-[730px]:text-[20px] max-[530px]:text-[16px] max-[460px]:text-[14px] max-[405px]:text-[12px]">
                      {section.heading}
                    </h3>
                  )}
                </div>

                {/* For sections without a heading in the header line, display the question as h4 */}
                {!section.heading &&
                  section.questions.map((q, qi) => (
                    <h4
                      key={qi}
                      className="text-[#4d4d4d] mt-[20px] mb-[30px] max-[530px]:text-[19px]"
                    >
                      {q.question}
                    </h4>
                  ))}
              </div>

              {/* Questions and Options */}
              {section.questions.map((q, qi) => {
                const radioName = `section-${sectionIndex}-q-${qi}`;

                // Select dropdown (Section 4: Age)
                if (section.type === "select") {
                  return (
                    <div key={qi}>
                      {section.heading && (
                        <h4 className="text-[#4d4d4d] mt-[20px] mb-[30px] text-[24px] font-bold max-[530px]:text-[19px]">
                          {q.question}
                        </h4>
                      )}
                      <select
                        className="w-[240px] h-[45px] p-2 rounded-[10px] border border-[#ddd] text-[16px] bg-[#e6e6e6] mb-5 text-[#4d4d4d] cursor-pointer max-[490px]:w-[180px] max-[490px]:text-[14px]"
                        onChange={(e) => handleSelectChange(sectionIndex, qi, e)}
                      >
                        {q.options.map((opt, oi) => (
                          <option key={oi} value={oi}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }

                // Radio - stacked (full width per item, e.g. Education, Adaptability)
                if (section.type === "radio-stacked") {
                  return (
                    <div key={qi} className="mb-5">
                      {section.heading && (
                        <div className="text-[20px] font-bold mt-[10px] w-full mb-5">
                          <h4 className="text-[#4d4d4d]">{q.question}</h4>
                        </div>
                      )}
                      {q.options.map((opt, oi) => (
                        <div
                          key={oi}
                          className="text-[#666] mt-5 mb-[30px] max-[530px]:text-xs max-[460px]:text-[10px]"
                        >
                          <label className="flex items-center gap-[6px]">
                            <input
                              type="radio"
                              name={radioName}
                              value={String(oi)}
                              className="max-[600px]:w-2 max-[460px]:w-1.5"
                              onChange={() =>
                                handlePointChange(sectionIndex, qi, opt)
                              }
                            />{" "}
                            {opt.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  );
                }

                // Radio inline (flex-start, e.g. CLB 5 Yes/No, Employment Yes/No)
                if (section.type === "radio-inline") {
                  return (
                    <div
                      key={qi}
                      className="flex flex-wrap justify-start mb-5"
                    >
                      {q.options.map((opt, oi) => (
                        <div
                          key={oi}
                          className="text-[#666] w-[20%] mb-2.5 max-[600px]:text-xs max-[530px]:w-[40%] max-[460px]:text-[10px]"
                        >
                          <label className="flex items-center gap-[6px]">
                            <input
                              type="radio"
                              name={radioName}
                              value={String(oi)}
                              className="max-[600px]:w-2 max-[460px]:w-1.5"
                              onChange={() =>
                                handlePointChange(sectionIndex, qi, opt)
                              }
                            />{" "}
                            {opt.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  );
                }

                // Radio - default flex-wrap layout (e.g. Language, Experience)
                return (
                  <div key={qi}>
                    {/* Sub-header for multi-question sections */}
                    {section.heading && section.questions.length > 1 && (
                      <div className="text-[20px] font-bold mt-[10px] w-full mb-5">
                        <h4 className="text-[#4d4d4d]">{q.question}</h4>
                      </div>
                    )}
                    <div className="flex flex-wrap justify-between mb-5">
                      {q.options.map((opt, oi) => (
                        <div
                          key={oi}
                          className="text-[#666] w-[20%] mb-2.5 max-[600px]:text-xs max-[530px]:w-[40%] max-[460px]:text-[10px]"
                        >
                          <label className="flex items-center gap-[6px]">
                            <input
                              type="radio"
                              name={radioName}
                              value={String(oi)}
                              className="max-[600px]:w-2 max-[460px]:w-1.5"
                              onChange={() =>
                                handlePointChange(sectionIndex, qi, opt)
                              }
                            />{" "}
                            {opt.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Right: Sticky Total Points Sidebar */}
        <div className="my-[50px] mx-auto w-[350px] max-[1200px]:w-[300px] sticky top-[100px] self-start max-[1080px]:w-[99%] max-[1080px]:static">
          {/* Points Display */}
          <div className="mx-auto p-5 rounded-[20px] bg-primary text-white text-center max-[1080px]:flex max-[1080px]:justify-between max-[1080px]:items-center max-[1080px]:px-[50px] max-[900px]:px-[30px] max-[700px]:px-[25px] max-[490px]:px-5">
            <div className="text-[24px] font-bold">
              <h2 className="text-white text-[30px] max-[1080px]:text-[24px] max-[900px]:text-[20px] max-[700px]:text-[14px] max-[530px]:text-[13px] max-[490px]:text-[11px] max-[370px]:text-[9.5px]">
                Total Points
              </h2>
            </div>
            <div className="text-[18px] font-bold">
              <h1
                className={`text-white ${
                  isNotEligible
                    ? "text-[20px] max-[1080px]:text-[18px] max-[700px]:text-[14px] max-[530px]:text-[12px]"
                    : "text-[40px] max-[1080px]:text-[28px] max-[900px]:text-[24px] max-[700px]:text-[21px] max-[530px]:text-[18px] max-[490px]:text-[16px] max-[370px]:text-[15px]"
                }`}
              >
                {displayResult}
              </h1>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-5">
            <p className="text-[11px]">
              <span className="text-[rgb(163,13,13)]">Disclaimer:</span>{" "}
              This calculator is intended to provide general information and
              should not be relied upon as a substitute for professional
              advice. While we have taken great care to ensure the accuracy
              of the calculations provided, we cannot guarantee their
              correctness or completeness. The results provided by this
              calculator are based on input provided by the user and do not
              take into account all possible factors that may affect the
              calculation. Therefore, we cannot be held responsible for any
              errors or omissions in the information provided by this
              calculator. By using this calculator, you agree to indemnify
              and hold us harmless from claims, damages, or liabilities
              arising from the use of this calculator or the information it
              provides.
            </p>
          </div>

          {/* RCIC Appointment CTA */}
          <div
            onClick={() => window.open("/booking", "_blank")}
            className="border-2 border-primary rounded-[10px] mx-auto mt-5 p-5 cursor-pointer hover:shadow-[0px_12px_28px_0px_rgba(0,0,0,0.2),0px_2px_4px_0px_rgba(0,0,0,0.1),inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]"
          >
            <h2 className="text-[22px] text-center font-bold">
              RCIC Appointment
            </h2>
            <p className="text-[14px] text-center mt-[5px]">
              To find out if you are eligible for PR, under FSWP Program
              book an appointment with our RCIC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
