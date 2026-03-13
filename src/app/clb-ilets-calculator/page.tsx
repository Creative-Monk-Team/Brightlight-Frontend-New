"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { clbCalculatorData } from "@/data/pages/clb-ilets-calculator";

/* ------------------------------------------------------------------ */
/*  Score display component                                           */
/* ------------------------------------------------------------------ */
function ScoreDisplay({
  scores,
}: {
  scores: { listening: string; reading: string; writing: string; speaking: string };
}) {
  return (
    <div
      className="
        flex justify-between w-full max-w-[960px] mx-auto bg-primary rounded-2xl
        px-[30px] py-[20px] mt-[50px] mb-[50px]
        max-[1080px]:w-[90%] max-[1080px]:text-center max-[1080px]:items-center max-[1080px]:px-[20px]
        max-[930px]:w-full max-[930px]:px-[25px]
        max-[680px]:px-[20px]
        max-[490px]:grid max-[490px]:grid-cols-2 max-[490px]:items-start max-[490px]:justify-between max-[490px]:gap-y-[20px] max-[490px]:mt-[70px] max-[490px]:pb-[35px]
        max-[380px]:w-full max-[380px]:grid-cols-[50%_50%] max-[380px]:px-[38px] max-[380px]:pb-[60px]
        max-[320px]:w-[95%] max-[320px]:grid-cols-[38%_38%] max-[320px]:px-[8px] max-[320px]:pb-[50px]
      "
    >
      {(["listening", "reading", "writing", "speaking"] as const).map((skill) => (
        <div
          key={skill}
          className="bg-primary text-white flex flex-col items-center justify-center text-lg font-bold"
        >
          <h5
            className="
              text-[30px] text-white
              max-[680px]:text-[20px]
              max-[490px]:text-[25px] max-[490px]:mb-[-20px]
            "
          >
            {scores[skill]}
          </h5>
          <br />
          <p className="text-[15px] font-light">{skill.charAt(0).toUpperCase() + skill.slice(1)}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CLB level box                                                     */
/* ------------------------------------------------------------------ */
function ClbBox({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`
        w-[160px] h-[160px] flex items-center justify-center text-[26px] font-bold
        m-[5px] border border-[#b3b3b3] rounded-xl cursor-pointer
        transition-colors duration-200
        max-[780px]:w-[130px] max-[780px]:h-[130px]
        max-[620px]:w-[120px] max-[620px]:h-[120px] max-[620px]:text-[22px]
        max-[590px]:w-[100px] max-[590px]:h-[100px] max-[590px]:text-[20px]
        max-[490px]:w-[95px] max-[490px]:h-[95px]
        max-[460px]:w-[93px] max-[460px]:h-[93px]
        max-[430px]:w-[92px] max-[430px]:h-[92px] max-[430px]:text-[15px]
        max-[380px]:w-[95px] max-[380px]:h-[80px] max-[380px]:text-[14px]
        max-[355px]:w-[95px] max-[355px]:h-[75px] max-[355px]:text-[14px]
        ${
          isSelected
            ? "bg-primary text-white"
            : "bg-[#f8f8f8] text-[#b3b3b3] hover:bg-primary hover:text-white"
        }
      `}
    >
      {label}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Helper: get points for a calculator + level index                 */
/* ------------------------------------------------------------------ */
function getPoints(
  calcPrefix: "c1" | "c2" | "c3",
  levelIndex: number
): { listening: string; reading: string; writing: string; speaking: string } {
  const key = `${calcPrefix}b${levelIndex}` as keyof typeof clbCalculatorData;
  const lKey = `${calcPrefix}b${levelIndex}PointsListening` as keyof typeof clbCalculatorData;
  const rKey = `${calcPrefix}b${levelIndex}PointsReading` as keyof typeof clbCalculatorData;
  const wKey = `${calcPrefix}b${levelIndex}PointsWriting` as keyof typeof clbCalculatorData;
  const sKey = `${calcPrefix}b${levelIndex}PointsSpeaking` as keyof typeof clbCalculatorData;

  return {
    listening: clbCalculatorData[lKey] ?? "",
    reading: clbCalculatorData[rKey] ?? "",
    writing: clbCalculatorData[wKey] ?? "",
    speaking: clbCalculatorData[sKey] ?? "",
  };
}

/* ------------------------------------------------------------------ */
/*  Main calculator content (needs Suspense for useSearchParams)      */
/* ------------------------------------------------------------------ */
function ClbCalculatorContent() {
  const data = clbCalculatorData;
  const searchParams = useSearchParams();

  /* ---- Tab selection ---- */
  const initialTab = (() => {
    const param = searchParams.get("selected");
    if (param === "type2") return 2;
    if (param === "type3") return 3;
    return 1;
  })();

  const [selected, setSelected] = useState(initialTab);

  /* ---- IELTS (calc 1) state ---- */
  const [selectedCLB, setSelectedCLB] = useState("CLB1");
  const [scores, setScores] = useState({
    listening: data.c1b4PointsListening,
    reading: data.c1b4PointsReading,
    writing: data.c1b4PointsWriting,
    speaking: data.c1b4PointsSpeaking,
  });

  /* ---- TEF (calc 2) state ---- */
  const [selectedCLB2, setSelectedCLB2] = useState("1");
  const [scores2, setScores2] = useState({
    listening: data.c2b1PointsListening,
    reading: data.c2b1PointsReading,
    writing: data.c2b1PointsWriting,
    speaking: data.c2b1PointsSpeaking,
  });

  /* ---- CELPIP (calc 3) state ---- */
  const [selectedCLB3, setSelectedCLB3] = useState("1");
  const [scores3, setScores3] = useState({
    listening: data.c3b4PointsListening,
    reading: data.c3b4PointsReading,
    writing: data.c3b4PointsWriting,
    speaking: data.c3b4PointsSpeaking,
  });

  /* ---- Tab switching + URL update ---- */
  const setSelectedAndUpdateURL = useCallback((tab: number) => {
    setSelected(tab);
    const params = new URLSearchParams(window.location.search);
    params.set("selected", `type${tab}`);
    window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
  }, []);

  /* ---- IELTS click handler ---- */
  const handleCLBClick = useCallback(
    (level: string) => {
      setSelectedCLB(level);
      const num = parseInt(level.replace("CLB", ""), 10);
      setScores(getPoints("c1", num));
    },
    []
  );

  /* ---- TEF click handler ---- */
  const handleCLBClick2 = useCallback(
    (level: string) => {
      setSelectedCLB2(level);
      const num = parseInt(level, 10);
      setScores2(getPoints("c2", num));
    },
    []
  );

  /* ---- CELPIP click handler ---- */
  const handleCLBClick3 = useCallback(
    (level: string) => {
      setSelectedCLB3(level);
      const num = parseInt(level, 10);
      setScores3(getPoints("c3", num));
    },
    []
  );

  return (
    <>
      {/* ============================================================ */}
      {/*  Banner                                                      */}
      {/* ============================================================ */}
      <div
        className="w-full bg-cover bg-no-repeat bg-center py-[100px] pt-[230px] max-[1000px]:pt-[180px] max-[580px]:pt-[150px]"
        style={{ backgroundImage: "url('/images/canadaBlue.jpeg')" }}
      >
        <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto text-center">
          <h1 className="text-gold text-[60px] font-black max-[490px]:text-[45px]">
            {data.heading}
          </h1>
          <h4 className="text-white pt-[50px]">{data.description}</h4>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Sub-heading + Tab buttons                                   */}
      {/* ============================================================ */}
      <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto py-[100px] text-center">
        <h1 className="text-[#12233d] mb-[90px] text-[50px] max-[490px]:text-[38px]">
          {data.subHeading}
        </h1>

        <div
          className="
            flex justify-around
            max-[1080px]:flex-col max-[1080px]:items-center
          "
        >
          {([
            { tab: 1, label: data.c1 },
            { tab: 2, label: data.c2 },
            { tab: 3, label: data.c3 },
          ] as const).map(({ tab, label }) => (
            <div key={tab} className="max-[1080px]:mt-[20px]">
              <button
                onClick={() => setSelectedAndUpdateURL(tab)}
                className={`
                  px-[70px] py-[20px] text-lg border border-[#12233d] rounded-xl cursor-pointer
                  transition-colors duration-200
                  max-[1080px]:w-[400px] max-[1080px]:py-[30px] max-[1080px]:px-[70px]
                  max-[460px]:w-[340px] max-[460px]:py-[30px] max-[460px]:px-[60px]
                  max-[360px]:w-[280px] max-[360px]:py-[30px] max-[360px]:px-[30px]
                  ${
                    selected === tab
                      ? "bg-[#12233d] text-white"
                      : "bg-white text-[#12233d] hover:bg-[#12233d] hover:text-white"
                  }
                `}
              >
                {label}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Calculator 1 - IELTS                                        */}
      {/* ============================================================ */}
      {selected === 1 && (
        <div
          className="
            max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto text-center
            max-[460px]:w-[90%] max-[430px]:w-[90%]
          "
        >
          {/* Hidden row (CLB1-CLB4): hidden on all screens */}
          <div className="hidden">
            {[1, 2, 3, 4].map((n) => (
              <ClbBox
                key={n}
                label={data[`c1b${n}` as keyof typeof data]}
                isSelected={selectedCLB === `CLB${n}`}
                onClick={() => handleCLBClick(`CLB${n}`)}
              />
            ))}
          </div>

          {/* Row: CLB4, CLB5, CLB6 */}
          <div
            className="
              flex justify-center mb-[10px] gap-[60px]
              max-[900px]:gap-[20px] max-[780px]:gap-[10px] max-[620px]:gap-[10px]
              max-[590px]:gap-[8px] max-[490px]:gap-[7px] max-[460px]:gap-[5px]
              max-[430px]:gap-[4px] max-[380px]:gap-0 max-[355px]:gap-0
            "
          >
            {[4, 5, 6].map((n) => (
              <ClbBox
                key={n}
                label={data[`c1b${n}` as keyof typeof data]}
                isSelected={selectedCLB === `CLB${n}`}
                onClick={() => handleCLBClick(`CLB${n}`)}
              />
            ))}
          </div>

          {/* Row: CLB7, CLB8, CLB9 */}
          <div
            className="
              flex justify-center mb-[10px] gap-[60px]
              max-[900px]:gap-[20px] max-[780px]:gap-[10px] max-[620px]:gap-[10px]
              max-[590px]:gap-[8px] max-[490px]:gap-[7px] max-[460px]:gap-[5px]
              max-[430px]:gap-[4px] max-[380px]:gap-0 max-[355px]:gap-0
            "
          >
            {[7, 8, 9].map((n) => (
              <ClbBox
                key={n}
                label={data[`c1b${n}` as keyof typeof data]}
                isSelected={selectedCLB === `CLB${n}`}
                onClick={() => handleCLBClick(`CLB${n}`)}
              />
            ))}
          </div>

          {/* Row: CLB10 */}
          <div
            className="
              flex justify-center mb-[10px] gap-[60px]
              max-[900px]:gap-[20px] max-[780px]:gap-[10px] max-[620px]:gap-[10px]
              max-[590px]:gap-[8px] max-[490px]:gap-[7px] max-[460px]:gap-[5px]
              max-[430px]:gap-[4px] max-[380px]:gap-0 max-[355px]:gap-0
            "
          >
            <ClbBox
              label={data.c1b10}
              isSelected={selectedCLB === "CLB10"}
              onClick={() => handleCLBClick("CLB10")}
            />
          </div>

          <ScoreDisplay scores={scores} />
        </div>
      )}

      {/* ============================================================ */}
      {/*  Calculator 2 - TEF                                          */}
      {/* ============================================================ */}
      {selected === 2 && (
        <div
          className="
            max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto text-center
            max-[460px]:w-[90%] max-[430px]:w-[90%]
          "
        >
          {/* Row: TEF1-TEF4 */}
          <div
            className="
              flex justify-center mb-[10px] gap-[60px]
              max-[900px]:gap-[20px] max-[780px]:gap-[10px] max-[620px]:gap-[10px]
              max-[590px]:gap-[8px] max-[490px]:gap-[7px] max-[460px]:gap-[5px]
              max-[430px]:gap-[4px] max-[380px]:gap-0 max-[355px]:gap-0
            "
          >
            {[1, 2, 3, 4].map((n) => (
              <ClbBox
                key={n}
                label={data[`c2b${n}` as keyof typeof data]}
                isSelected={selectedCLB2 === String(n)}
                onClick={() => handleCLBClick2(String(n))}
              />
            ))}
          </div>

          {/* Row: TEF5-TEF8 */}
          <div
            className="
              flex justify-center mb-[10px] gap-[60px]
              max-[900px]:gap-[20px] max-[780px]:gap-[10px] max-[620px]:gap-[10px]
              max-[590px]:gap-[8px] max-[490px]:gap-[7px] max-[460px]:gap-[5px]
              max-[430px]:gap-[4px] max-[380px]:gap-0 max-[355px]:gap-0
            "
          >
            {[5, 6, 7, 8].map((n) => (
              <ClbBox
                key={n}
                label={data[`c2b${n}` as keyof typeof data]}
                isSelected={selectedCLB2 === String(n)}
                onClick={() => handleCLBClick2(String(n))}
              />
            ))}
          </div>

          {/* Row: TEF9-TEF12 */}
          <div
            className="
              flex justify-center mb-[10px] gap-[60px]
              max-[900px]:gap-[20px] max-[780px]:gap-[10px] max-[620px]:gap-[10px]
              max-[590px]:gap-[8px] max-[490px]:gap-[7px] max-[460px]:gap-[5px]
              max-[430px]:gap-[4px] max-[380px]:gap-0 max-[355px]:gap-0
            "
          >
            {[9, 10, 11, 12].map((n) => (
              <ClbBox
                key={n}
                label={data[`c2b${n}` as keyof typeof data]}
                isSelected={selectedCLB2 === String(n)}
                onClick={() => handleCLBClick2(String(n))}
              />
            ))}
          </div>

          <ScoreDisplay scores={scores2} />
        </div>
      )}

      {/* ============================================================ */}
      {/*  Calculator 3 - CELPIP                                       */}
      {/* ============================================================ */}
      {selected === 3 && (
        <div
          className="
            max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto text-center
            max-[460px]:w-[90%] max-[430px]:w-[90%]
          "
        >
          {/* Hidden row (CELPIP1-CELPIP4): hidden on all screens */}
          <div className="hidden">
            {[1, 2, 3, 4].map((n) => (
              <ClbBox
                key={n}
                label={data[`c3b${n}` as keyof typeof data]}
                isSelected={selectedCLB3 === String(n)}
                onClick={() => handleCLBClick3(String(n))}
              />
            ))}
          </div>

          {/* Row: CELPIP4, CELPIP5, CELPIP6 */}
          <div
            className="
              flex justify-center mb-[10px] gap-[60px]
              max-[900px]:gap-[20px] max-[780px]:gap-[10px] max-[620px]:gap-[10px]
              max-[590px]:gap-[8px] max-[490px]:gap-[7px] max-[460px]:gap-[5px]
              max-[430px]:gap-[4px] max-[380px]:gap-0 max-[355px]:gap-0
            "
          >
            {[4, 5, 6].map((n) => (
              <ClbBox
                key={n}
                label={data[`c3b${n}` as keyof typeof data]}
                isSelected={selectedCLB3 === String(n)}
                onClick={() => handleCLBClick3(String(n))}
              />
            ))}
          </div>

          {/* Row: CELPIP7, CELPIP8, CELPIP9 */}
          <div
            className="
              flex justify-center mb-[10px] gap-[60px]
              max-[900px]:gap-[20px] max-[780px]:gap-[10px] max-[620px]:gap-[10px]
              max-[590px]:gap-[8px] max-[490px]:gap-[7px] max-[460px]:gap-[5px]
              max-[430px]:gap-[4px] max-[380px]:gap-0 max-[355px]:gap-0
            "
          >
            {[7, 8, 9].map((n) => (
              <ClbBox
                key={n}
                label={data[`c3b${n}` as keyof typeof data]}
                isSelected={selectedCLB3 === String(n)}
                onClick={() => handleCLBClick3(String(n))}
              />
            ))}
          </div>

          {/* Row: CELPIP10 */}
          <div
            className="
              flex justify-center mb-[10px] gap-[60px]
              max-[900px]:gap-[20px] max-[780px]:gap-[10px] max-[620px]:gap-[10px]
              max-[590px]:gap-[8px] max-[490px]:gap-[7px] max-[460px]:gap-[5px]
              max-[430px]:gap-[4px] max-[380px]:gap-0 max-[355px]:gap-0
            "
          >
            <ClbBox
              label={data.c3b10}
              isSelected={selectedCLB3 === "10"}
              onClick={() => handleCLBClick3("10")}
            />
          </div>

          <ScoreDisplay scores={scores3} />
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Page (wraps content in Suspense for useSearchParams)              */
/* ------------------------------------------------------------------ */
export default function ClbIletsCalculatorPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full py-[230px] text-center">
          <p className="text-primary text-xl">Loading calculator...</p>
        </div>
      }
    >
      <ClbCalculatorContent />
    </Suspense>
  );
}
