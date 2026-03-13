"use client";

import { useState, useEffect } from "react";
import { bcpnpCalculatorData } from "@/data/pages/bcpnp-calculator";

const data = bcpnpCalculatorData;

/* ------------------------------------------------------------------ */
/*  Section Number Badge                                               */
/* ------------------------------------------------------------------ */
function SectionNumber({ num }: { num: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="text-sm max-[460px]:text-sm bg-primary min-w-[28px] max-[460px]:min-w-[20px] h-7 max-[460px]:h-5 border-none rounded-full text-white flex items-center justify-center text-center">
        {num}
      </div>
      <p className="h-[1.1px] w-full bg-primary" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Radio Item                                                         */
/* ------------------------------------------------------------------ */
function RadioItem({
  name,
  value,
  label,
  onChange,
  onClick,
  disabled,
}: {
  name: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="w-[45%] max-[1030px]:w-[30%] my-[30px] mb-[50px] max-[980px]:my-[30px] max-[980px]:mb-[20px] max-[780px]:my-[24px] max-[780px]:mb-[20px] max-[560px]:my-[22px] max-[560px]:mb-[16px] max-[460px]:my-[20px] max-[460px]:mb-[16px] max-[370px]:my-[10px] max-[370px]:mb-[16px]">
      <label className="flex items-center gap-[5px] cursor-pointer">
        <input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          onClick={onClick}
          disabled={disabled}
          className="max-[560px]:w-2 max-[460px]:w-[7px] accent-primary"
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                                */
/* ------------------------------------------------------------------ */
export default function BCPNPCalculatorPage() {
  const [applicableLastSection, setApplicableLastSection] = useState(false);

  // Point states for each section
  const [points, setPoints] = useState(0);
  const [canadaExperiencePoints, setCanadaExperiencePoints] = useState(0);
  const [currentJobPoints, setCurrentJobPoints] = useState(0);
  const [educationPoints, setEducationPoints] = useState(0);
  const [bcEducationPoints, setBcEducationPoints] = useState(0);
  const [canadaEducationPoints, setCanadaEducationPoints] = useState(0);
  const [occupationPoints, setOccupationPoints] = useState(0);
  const [languagePoints, setLanguagePoints] = useState(0);
  const [languageProficiencyPoints, setLanguageProficiencyPoints] = useState(0);
  const [hourlyWagePoints, setHourlyWagePoints] = useState(0);
  const [employmentAreaPoints, setEmploymentAreaPoints] = useState(0);
  const [languageProficiencyRegionPoints, setLanguageProficiencyRegionPoints] =
    useState(0);

  // Reset last section points when area changes to Area 1
  useEffect(() => {
    if (!applicableLastSection) {
      setLanguageProficiencyRegionPoints(0);
    }
  }, [applicableLastSection]);

  /* ---- Section 1: Directly Related Work Experience ---- */
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    switch (v) {
      case "1":
        setPoints(Math.floor(data.fsq1o1p));
        break;
      case "2":
        setPoints(Math.floor(data.fsq1o2p));
        break;
      case "3":
        setPoints(Math.floor(data.fsq1o3p));
        break;
      case "4":
        setPoints(Math.floor(data.fsq1o4p));
        break;
      case "5":
        setPoints(Math.floor(data.fsq1o5p));
        break;
      case "6":
        setPoints(Math.floor(data.fsq1o6p));
        break;
      case "7":
        setPoints(Math.floor(data.fsq1o7p));
        break;
      default:
        setPoints(0);
        break;
    }
  };

  /* ---- Section 2: Canada Experience ---- */
  const handleCanadaExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value === "1") {
      setCanadaExperiencePoints(Math.floor(data.ssq1o1p));
    } else {
      setCanadaExperiencePoints(Math.floor(data.ssq1o2p));
    }
  };

  /* ---- Section 3: Current Job ---- */
  const handleCurrentJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "1") {
      setCurrentJobPoints(Math.floor(data.tsq1o1p));
    } else {
      setCurrentJobPoints(Math.floor(data.tsq1o2p));
    }
  };

  /* ---- Section 4: Education ---- */
  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    switch (v) {
      case "1":
        setEducationPoints(Math.floor(data.fosq1o1p));
        break;
      case "2":
        setEducationPoints(Math.floor(data.fosq1o2p));
        break;
      case "3":
        setEducationPoints(Math.floor(data.fosq1o3p));
        break;
      case "4":
        setEducationPoints(Math.floor(data.fosq1o4p));
        break;
      case "5":
        setEducationPoints(Math.floor(data.fosq1o5p));
        break;
      case "6":
        setEducationPoints(Math.floor(data.fosq1o6p));
        break;
      case "7":
        setEducationPoints(Math.floor(data.fosq1o7p));
        break;
      default:
        setEducationPoints(0);
        break;
    }
  };

  /* ---- Section 5: Post-Secondary Education in B.C. ---- */
  const handleBcEducationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "1") {
      setBcEducationPoints(Math.floor(data.ffsq1o1p));
    } else {
      setBcEducationPoints(Math.floor(data.ffsq1o2p));
    }
  };

  /* ---- Section 6: Post-Secondary Education in Canada (Outside B.C.) ---- */
  const handleCanadaEducationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value === "1") {
      setCanadaEducationPoints(Math.floor(data.sxsq1o1p));
    } else {
      setCanadaEducationPoints(Math.floor(data.sxsq1o2p));
    }
  };

  /* ---- Section 7: Professional Designation in B.C. ---- */
  const handleOccupationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "1") {
      setOccupationPoints(Math.floor(data.svsq1o1p));
    } else {
      setOccupationPoints(Math.floor(data.svsq1o2p));
    }
  };

  /* ---- Section 8: Language Points ---- */
  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    switch (v) {
      case "1":
        setLanguagePoints(Math.floor(data.egsq1o1p));
        break;
      case "2":
        setLanguagePoints(Math.floor(data.egsq1o2p));
        break;
      case "3":
        setLanguagePoints(Math.floor(data.egsq1o3p));
        break;
      case "4":
        setLanguagePoints(Math.floor(data.egsq1o4p));
        break;
      case "5":
        setLanguagePoints(Math.floor(data.egsq1o5p));
        break;
      case "6":
        setLanguagePoints(Math.floor(data.egsq1o6p));
        break;
      case "7":
        setLanguagePoints(Math.floor(data.egsq1o7p));
        break;
      default:
        setLanguagePoints(0);
        break;
    }
  };

  /* ---- Section 9: Language Proficiency in English & French ---- */
  const handleLanguageProficiencyChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value === "1") {
      setLanguageProficiencyPoints(Math.floor(data.nnsq1o1p));
    } else {
      setLanguageProficiencyPoints(Math.floor(data.nnsq1o2p));
    }
  };

  /* ---- Section 10: Hourly Wage ---- */
  const handleHourlyWageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const wageValue = parseFloat(e.target.value);

    if (isNaN(wageValue) || wageValue < 16) {
      setHourlyWagePoints(0);
    } else if (wageValue >= 70) {
      setHourlyWagePoints(55);
    } else if (wageValue >= 69) {
      setHourlyWagePoints(54);
    } else if (wageValue >= 68) {
      setHourlyWagePoints(53);
    } else if (wageValue >= 67) {
      setHourlyWagePoints(52);
    } else if (wageValue >= 66) {
      setHourlyWagePoints(51);
    } else if (wageValue >= 65) {
      setHourlyWagePoints(50);
    } else if (wageValue >= 64) {
      setHourlyWagePoints(49);
    } else if (wageValue >= 63) {
      setHourlyWagePoints(48);
    } else if (wageValue >= 62) {
      setHourlyWagePoints(47);
    } else if (wageValue >= 61) {
      setHourlyWagePoints(46);
    } else if (wageValue >= 60) {
      setHourlyWagePoints(45);
    } else if (wageValue >= 59) {
      setHourlyWagePoints(44);
    } else if (wageValue >= 58) {
      setHourlyWagePoints(43);
    } else if (wageValue >= 57) {
      setHourlyWagePoints(42);
    } else if (wageValue >= 56) {
      setHourlyWagePoints(41);
    } else if (wageValue >= 55) {
      setHourlyWagePoints(40);
    } else if (wageValue >= 54) {
      setHourlyWagePoints(39);
    } else if (wageValue >= 53) {
      setHourlyWagePoints(38);
    } else if (wageValue >= 52) {
      setHourlyWagePoints(37);
    } else if (wageValue >= 51) {
      setHourlyWagePoints(36);
    } else if (wageValue >= 50) {
      setHourlyWagePoints(35);
    } else if (wageValue >= 49) {
      setHourlyWagePoints(34);
    } else if (wageValue >= 48) {
      setHourlyWagePoints(33);
    } else if (wageValue >= 47) {
      setHourlyWagePoints(32);
    } else if (wageValue >= 46) {
      setHourlyWagePoints(31);
    } else if (wageValue >= 45) {
      setHourlyWagePoints(30);
    } else if (wageValue >= 44) {
      setHourlyWagePoints(29);
    } else if (wageValue >= 43) {
      setHourlyWagePoints(28);
    } else if (wageValue >= 42) {
      setHourlyWagePoints(27);
    } else if (wageValue >= 41) {
      setHourlyWagePoints(26);
    } else if (wageValue >= 40) {
      setHourlyWagePoints(25);
    } else if (wageValue >= 39) {
      setHourlyWagePoints(24);
    } else if (wageValue >= 38) {
      setHourlyWagePoints(23);
    } else if (wageValue >= 37) {
      setHourlyWagePoints(22);
    } else if (wageValue >= 36) {
      setHourlyWagePoints(21);
    } else if (wageValue >= 35) {
      setHourlyWagePoints(20);
    } else if (wageValue >= 34) {
      setHourlyWagePoints(19);
    } else if (wageValue >= 33) {
      setHourlyWagePoints(18);
    } else if (wageValue >= 32) {
      setHourlyWagePoints(17);
    } else if (wageValue >= 31) {
      setHourlyWagePoints(16);
    } else if (wageValue >= 30) {
      setHourlyWagePoints(15);
    } else if (wageValue >= 29) {
      setHourlyWagePoints(14);
    } else if (wageValue >= 28) {
      setHourlyWagePoints(13);
    } else if (wageValue >= 27) {
      setHourlyWagePoints(12);
    } else if (wageValue >= 26) {
      setHourlyWagePoints(11);
    } else if (wageValue >= 25) {
      setHourlyWagePoints(10);
    } else if (wageValue >= 24) {
      setHourlyWagePoints(9);
    } else if (wageValue >= 23) {
      setHourlyWagePoints(8);
    } else if (wageValue >= 22) {
      setHourlyWagePoints(7);
    } else if (wageValue >= 21) {
      setHourlyWagePoints(6);
    } else if (wageValue >= 20) {
      setHourlyWagePoints(5);
    } else if (wageValue >= 19) {
      setHourlyWagePoints(4);
    } else if (wageValue >= 18) {
      setHourlyWagePoints(3);
    } else if (wageValue >= 17) {
      setHourlyWagePoints(2);
    } else if (wageValue >= 16) {
      setHourlyWagePoints(1);
    }
  };

  /* ---- Section 11: Area of Employment ---- */
  const handleEmploymentAreaChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const v = e.target.value;
    switch (v) {
      case "1":
        setEmploymentAreaPoints(Math.floor(data.elsq1o1p));
        break;
      case "2":
        setEmploymentAreaPoints(Math.floor(data.elsq1o2p));
        break;
      case "3":
        setEmploymentAreaPoints(Math.floor(data.elsq1o3p));
        break;
      default:
        setEmploymentAreaPoints(0);
        break;
    }
  };

  /* ---- Section 12: Additional points for area of employment ---- */
  const handleLanguageProficiencyRegionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const v = e.target.value;
    switch (v) {
      case "1":
        setLanguageProficiencyRegionPoints(Math.floor(data.twsq1o1p));
        break;
      case "2":
        setLanguageProficiencyRegionPoints(Math.floor(data.twsq1o2p));
        break;
      case "3":
        setLanguageProficiencyRegionPoints(Math.floor(data.twsq1o3p));
        break;
      default:
        setLanguageProficiencyRegionPoints(0);
        break;
    }
  };

  /* ---- Total Points ---- */
  const totalPoints =
    points +
    canadaExperiencePoints +
    currentJobPoints +
    educationPoints +
    bcEducationPoints +
    canadaEducationPoints +
    occupationPoints +
    languagePoints +
    languageProficiencyPoints +
    hourlyWagePoints +
    employmentAreaPoints +
    languageProficiencyRegionPoints;

  /* ---- Sidebar content (shared between sticky and inline) ---- */
  const sidebarContent = (
    <>
      {/* Total Points Box */}
      <div className="w-full mx-auto py-5 rounded-[20px] bg-primary text-white text-center z-50 max-[1030px]:px-[30px] max-[1030px]:py-[30px] max-[1030px]:h-[100px] max-[1030px]:flex max-[1030px]:justify-between max-[1030px]:items-center max-[680px]:items-center max-[460px]:px-[23px] max-[460px]:py-[20px] max-[460px]:items-center max-[460px]:h-[70px] max-[370px]:px-[23px] max-[370px]:py-[10px]">
        <h2 className="text-[30px] text-white max-[1030px]:text-[25px] max-[680px]:text-[20px] max-[460px]:text-sm">
          Total Points
        </h2>
        <div className="text-lg font-bold">
          <h1 className="text-[40px] text-white max-[680px]:text-[30px] max-[460px]:text-[22px]">
            {totalPoints}
          </h1>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-5">
        <p className="text-[11px]">
          <span className="text-[rgb(163,13,13)]">Disclaimer:</span> This
          calculator is intended to provide general information and should not be
          relied upon as a substitute for professional advice. While we have
          taken great care to ensure the accuracy of the calculations provided,
          we cannot guarantee their correctness or completeness. The results
          provided by this calculator are based on input provided by the user and
          do not take into account all possible factors that may affect the
          calculation. Therefore, we cannot be held responsible for any errors or
          omissions in the information provided by this calculator. By using this
          calculator, you agree to indemnify and hold us harmless from claims,
          damages, or liabilities arising from the use of this calculator or the
          information it provides.
        </p>
      </div>

      {/* RCIC Appointment Button */}
      <div
        onClick={() => window.open("/booking", "_blank")}
        className="border-2 border-primary rounded-[10px] mx-auto mt-5 py-5 px-2.5 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[rgba(0,0,0,0.2)_0px_12px_28px_0px,rgba(0,0,0,0.1)_0px_2px_4px_0px,rgba(255,255,255,0.05)_0px_0px_0px_1px_inset]"
      >
        <h2 className="text-[22px] text-center">RCIC Appointment</h2>
        <p className="text-sm text-center mt-[5px]">
          To find out if you are eligible for PR, under FSWP Program book an
          appointment with our RCIC.
        </p>
      </div>
    </>
  );

  return (
    <>
      {/* ============================================================= */}
      {/*  Banner                                                        */}
      {/* ============================================================= */}
      <div className="bg-[url('/images/canadaBlue.jpeg')] bg-no-repeat bg-cover w-full py-[100px] pt-[230px] max-[780px]:pt-[150px] max-[780px]:pb-[110px] max-[460px]:pt-[150px] max-[460px]:pb-[80px] max-[355px]:pt-[150px] max-[355px]:pb-[70px]">
        <div className="max-w-[1440px] mx-auto text-center max-[1130px]:w-[95%] max-[1130px]:pt-[100px]">
          <h1 className="text-[#e0b969] text-[50px] max-[980px]:text-[35px] max-[460px]:text-[30px] max-[355px]:text-[26px]">
            {data.heading}
          </h1>
          <p className="text-white text-[35px] font-light pt-[100px] max-[1130px]:pt-[80px] max-[980px]:text-[20px] max-[680px]:leading-[34px] max-[680px]:pt-[60px] max-[460px]:text-base max-[460px]:pt-[40px]">
            {data.description}
          </p>
        </div>
      </div>

      {/* ============================================================= */}
      {/*  Main Content: Questions + Sidebar                             */}
      {/* ============================================================= */}
      <div className="flex items-stretch justify-between max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto mt-[100px] max-[1030px]:flex-col">
        {/* ----------------------------------------------------------- */}
        {/*  Left Column: Questions                                      */}
        {/* ----------------------------------------------------------- */}
        <div className="w-[66%] max-[1030px]:w-[95%] max-[1030px]:mx-auto">
          {/* ======== Section 1: Directly Related Work Experience ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <div className="text-2xl font-bold max-w-[900px]">
              <SectionNumber num={1} />
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.fsq1}
              </h5>
            </div>

            <div className="flex flex-wrap justify-between mb-5 max-[980px]:text-[15px] max-[780px]:text-sm max-[680px]:text-xs max-[680px]:mb-[2px] max-[560px]:text-xs max-[560px]:mb-0 max-[460px]:text-[10px] max-[370px]:text-[9px]">
              <RadioItem name="experience" value="1" label={data.fsq1o1} onChange={handleExperienceChange} />
              <RadioItem name="experience" value="2" label={data.fsq1o2} onChange={handleExperienceChange} />
              <RadioItem name="experience" value="3" label={data.fsq1o3} onChange={handleExperienceChange} />
              <RadioItem name="experience" value="4" label={data.fsq1o4} onChange={handleExperienceChange} />
              <RadioItem name="experience" value="5" label={data.fsq1o5} onChange={handleExperienceChange} />
              <RadioItem name="experience" value="6" label={data.fsq1o6} onChange={handleExperienceChange} />
              <RadioItem name="experience" value="7" label={data.fsq1o7} onChange={handleExperienceChange} />
            </div>
          </div>

          {/* ======== Section 2: At Least 1 Year in Canada ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <div className="text-2xl font-bold max-w-[900px]">
              <SectionNumber num={2} />
              <h4 className="text-primary my-5 mb-[30px] max-[780px]:text-[22px] max-[680px]:text-xl max-[560px]:text-lg max-[460px]:text-sm max-[370px]:text-xs">
                {data.secondSectionHeading}
              </h4>
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.ssq1}
              </h5>
            </div>

            <div className="flex flex-wrap justify-between mb-5 max-[980px]:text-[15px] max-[780px]:text-sm max-[680px]:text-xs max-[680px]:mb-[2px] max-[560px]:text-xs max-[560px]:mb-0 max-[460px]:text-[10px] max-[370px]:text-[9px]">
              <RadioItem name="canadaExperience" value="1" label={data.ssq1o1} onChange={handleCanadaExperienceChange} />
              <RadioItem name="canadaExperience" value="2" label={data.ssq1o2} onChange={handleCanadaExperienceChange} />
            </div>
          </div>

          {/* ======== Section 3: Currently Working Full-Time in B.C. ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <div className="text-2xl font-bold max-w-[900px]">
              <SectionNumber num={3} />
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.tsq1}
              </h5>
            </div>

            <div className="flex flex-wrap justify-between mb-5 max-[980px]:text-[15px] max-[780px]:text-sm max-[680px]:text-xs max-[680px]:mb-[2px] max-[560px]:text-xs max-[560px]:mb-0 max-[460px]:text-[10px] max-[370px]:text-[9px]">
              <RadioItem name="currentJob" value="1" label={data.tsq1o1} onChange={handleCurrentJobChange} />
              <RadioItem name="currentJob" value="2" label={data.tsq1o2} onChange={handleCurrentJobChange} />
            </div>
          </div>

          {/* ======== Section 4: Education Level ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <SectionNumber num={4} />
            <div className="text-2xl font-bold max-w-[900px]">
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.fosq1}
              </h5>
            </div>

            <div className="flex flex-wrap justify-between mb-5 max-[980px]:text-[15px] max-[780px]:text-sm max-[680px]:text-xs max-[680px]:mb-[2px] max-[560px]:text-xs max-[560px]:mb-0 max-[460px]:text-[10px] max-[370px]:text-[9px]">
              <RadioItem name="education" value="1" label={data.fosq1o1} onChange={handleEducationChange} />
              <RadioItem name="education" value="2" label={data.fosq1o2} onChange={handleEducationChange} />
              <RadioItem name="education" value="3" label={data.fosq1o3} onChange={handleEducationChange} />
              <RadioItem name="education" value="4" label={data.fosq1o4} onChange={handleEducationChange} />
              <RadioItem name="education" value="5" label={data.fosq1o5} onChange={handleEducationChange} />
              <RadioItem name="education" value="6" label={data.fosq1o6} onChange={handleEducationChange} />
              <RadioItem name="education" value="7" label={data.fosq1o7} onChange={handleEducationChange} />
            </div>
          </div>

          {/* ======== Section 5: Post-Secondary Education in B.C. ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <div className="text-2xl font-bold max-w-[900px]">
              <SectionNumber num={5} />
              <h4 className="text-primary my-5 mb-[30px] max-[780px]:text-[22px] max-[680px]:text-xl max-[560px]:text-lg max-[460px]:text-sm max-[370px]:text-xs">
                {data.fifthSectionHeading}
              </h4>
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.ffsq1}
              </h5>
            </div>

            <div className="flex flex-wrap justify-between mb-5 max-[980px]:text-[15px] max-[780px]:text-sm max-[680px]:text-xs max-[680px]:mb-[2px] max-[560px]:text-xs max-[560px]:mb-0 max-[460px]:text-[10px] max-[370px]:text-[9px]">
              <RadioItem name="bcEducation" value="1" label={data.ffsq1o1} onChange={handleBcEducationChange} />
              <RadioItem name="bcEducation" value="2" label={data.ffsq1o2} onChange={handleBcEducationChange} />
            </div>
          </div>

          {/* ======== Section 6: Post-Secondary Education in Canada (Outside B.C.) ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <div className="text-2xl font-bold max-w-[900px]">
              <SectionNumber num={6} />
              <h4 className="text-primary my-5 mb-[30px] max-[780px]:text-[22px] max-[680px]:text-xl max-[560px]:text-lg max-[460px]:text-sm max-[370px]:text-xs">
                {data.sixthSectionHeading}
              </h4>
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.sxsq1}
              </h5>
            </div>

            <div className="flex flex-wrap justify-between mb-5 max-[980px]:text-[15px] max-[780px]:text-sm max-[680px]:text-xs max-[680px]:mb-[2px] max-[560px]:text-xs max-[560px]:mb-0 max-[460px]:text-[10px] max-[370px]:text-[9px]">
              <RadioItem name="canadaEducation" value="1" label={data.sxsq1o1} onChange={handleCanadaEducationChange} />
              <RadioItem name="canadaEducation" value="2" label={data.sxsq1o2} onChange={handleCanadaEducationChange} />
            </div>
          </div>

          {/* ======== Section 7: Professional Designation in B.C. ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <div className="text-2xl font-bold max-w-[900px]">
              <SectionNumber num={7} />
              <h4 className="text-primary my-5 mb-[30px] max-[780px]:text-[22px] max-[680px]:text-xl max-[560px]:text-lg max-[460px]:text-sm max-[370px]:text-xs">
                {data.seventhSectionHeading}
              </h4>
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.svsq1}
              </h5>
            </div>

            <div className="flex flex-wrap justify-between mb-5 max-[980px]:text-[15px] max-[780px]:text-sm max-[680px]:text-xs max-[680px]:mb-[2px] max-[560px]:text-xs max-[560px]:mb-0 max-[460px]:text-[10px] max-[370px]:text-[9px]">
              <RadioItem name="occupation" value="1" label={data.svsq1o1} onChange={handleOccupationChange} />
              <RadioItem name="occupation" value="2" label={data.svsq1o2} onChange={handleOccupationChange} />
            </div>

            {/* Occupation list */}
            <div className="max-[980px]:w-[90%] max-[980px]:mt-5">
              <p className="text-base text-[#4d4d4d] mb-2.5 max-[980px]:text-sm max-[780px]:text-xs max-[680px]:text-[11px] max-[560px]:text-[10px] max-[460px]:text-[9px] max-[355px]:text-[8px]">
                {data.svt1}
              </p>
              <p className="text-base text-[#4d4d4d] mb-2.5 max-[980px]:text-sm max-[780px]:text-xs max-[680px]:text-[11px] max-[560px]:text-[10px] max-[460px]:text-[9px] max-[355px]:text-[8px]">
                {data.svt2}
              </p>
              <p className="text-base text-[#4d4d4d] mb-2.5 max-[980px]:text-sm max-[780px]:text-xs max-[680px]:text-[11px] max-[560px]:text-[10px] max-[460px]:text-[9px] max-[355px]:text-[8px]">
                {data.svt3}
              </p>
              <p className="text-base text-[#4d4d4d] mb-2.5 max-[980px]:text-sm max-[780px]:text-xs max-[680px]:text-[11px] max-[560px]:text-[10px] max-[460px]:text-[9px] max-[355px]:text-[8px]">
                {data.svt4}
              </p>
              <p className="text-base text-[#4d4d4d] mb-2.5 max-[980px]:text-sm max-[780px]:text-xs max-[680px]:text-[11px] max-[560px]:text-[10px] max-[460px]:text-[9px] max-[355px]:text-[8px]">
                {data.svt5}
              </p>
              <p className="text-base text-[#4d4d4d] mb-2.5 max-[980px]:text-sm max-[780px]:text-xs max-[680px]:text-[11px] max-[560px]:text-[10px] max-[460px]:text-[9px] max-[355px]:text-[8px]">
                {data.svt6}
              </p>
              <p className="text-base text-[#4d4d4d] mb-2.5 max-[980px]:text-sm max-[780px]:text-xs max-[680px]:text-[11px] max-[560px]:text-[10px] max-[460px]:text-[9px] max-[355px]:text-[8px]">
                {data.svt7}
              </p>
              <p className="text-base text-[#4d4d4d] mb-2.5 max-[980px]:text-sm max-[780px]:text-xs max-[680px]:text-[11px] max-[560px]:text-[10px] max-[460px]:text-[9px] max-[355px]:text-[8px]">
                {data.svt8}
              </p>
              <p className="text-base text-[#4d4d4d] mb-2.5 max-[980px]:text-sm max-[780px]:text-xs max-[680px]:text-[11px] max-[560px]:text-[10px] max-[460px]:text-[9px] max-[355px]:text-[8px]">
                {data.svt9}
              </p>
              <p className="text-base text-[#4d4d4d] mb-2.5 max-[980px]:text-sm max-[780px]:text-xs max-[680px]:text-[11px] max-[560px]:text-[10px] max-[460px]:text-[9px] max-[355px]:text-[8px]">
                {data.svt10}
              </p>
              <p className="text-base text-[#4d4d4d] mb-2.5 max-[980px]:text-sm max-[780px]:text-xs max-[680px]:text-[11px] max-[560px]:text-[10px] max-[460px]:text-[9px] max-[355px]:text-[8px]">
                {data.svt11}
              </p>
            </div>
          </div>

          {/* ======== Section 8: Language Points ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <div className="text-2xl font-bold max-w-[900px]">
              <SectionNumber num={8} />
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.egsq1}
              </h5>
            </div>

            <div className="flex flex-wrap justify-between mb-5 max-[980px]:text-[15px] max-[780px]:text-sm max-[680px]:text-xs max-[680px]:mb-[2px] max-[560px]:text-xs max-[560px]:mb-0 max-[460px]:text-[10px] max-[370px]:text-[9px]">
              <RadioItem name="language" value="1" label={data.egsq1o1} onChange={handleLanguageChange} />
              <RadioItem name="language" value="2" label={data.egsq1o2} onChange={handleLanguageChange} />
              <RadioItem name="language" value="3" label={data.egsq1o3} onChange={handleLanguageChange} />
              <RadioItem name="language" value="4" label={data.egsq1o4} onChange={handleLanguageChange} />
              <RadioItem name="language" value="5" label={data.egsq1o5} onChange={handleLanguageChange} />
              <RadioItem name="language" value="6" label={data.egsq1o6} onChange={handleLanguageChange} />
              <RadioItem name="language" value="7" label={data.egsq1o7} onChange={handleLanguageChange} />
            </div>
          </div>

          {/* ======== Section 9: Language Proficiency in English & French ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <div className="text-2xl font-bold max-w-[900px]">
              <SectionNumber num={9} />
              <h4 className="text-primary my-5 mb-[30px] max-[780px]:text-[22px] max-[680px]:text-xl max-[560px]:text-lg max-[460px]:text-sm max-[370px]:text-xs">
                {data.ninthHeading}
              </h4>
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.nnsq1}
              </h5>
              <p className="text-xs !text-red-600 -mt-[5px]">
                *CLB 4 or higher in each of 4 competencies on both tests
                Required
              </p>
            </div>

            <div className="flex flex-wrap justify-between mb-5 max-[980px]:text-[15px] max-[780px]:text-sm max-[680px]:text-xs max-[680px]:mb-[2px] max-[560px]:text-xs max-[560px]:mb-0 max-[460px]:text-[10px] max-[370px]:text-[9px]">
              <RadioItem name="languageProficiency" value="1" label={data.nnsq1o1} onChange={handleLanguageProficiencyChange} />
              <RadioItem name="languageProficiency" value="2" label={data.nnsq1o2} onChange={handleLanguageProficiencyChange} />
            </div>
          </div>

          {/* ======== Section 10: Hourly Wage ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <div className="text-2xl font-bold max-w-[900px]">
              <SectionNumber num={10} />
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.tenthHeading}{" "}
                <input
                  type="number"
                  onChange={handleHourlyWageChange}
                  className="w-[120px] max-[460px]:w-[80px] text-[11px] py-[5px] px-2.5 max-[460px]:py-[1px] max-[460px]:px-2.5 no-underline border border-gray-400 rounded text-center focus:outline-none focus:border-gray-400"
                />
              </h5>
            </div>
          </div>

          {/* ======== Section 11: Area of Employment within B.C. ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <SectionNumber num={11} />
            <div className="text-2xl font-bold max-w-[900px]">
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.elsq1}
              </h5>
            </div>

            <div className="flex flex-wrap justify-between mb-5 max-[980px]:text-[15px] max-[780px]:text-sm max-[680px]:text-xs max-[680px]:mb-[2px] max-[560px]:text-xs max-[560px]:mb-0 max-[460px]:text-[10px] max-[370px]:text-[9px]">
              <RadioItem
                name="employmentArea"
                value="1"
                label={data.elsq1o1}
                onChange={handleEmploymentAreaChange}
                onClick={() => setApplicableLastSection(false)}
              />
              <RadioItem
                name="employmentArea"
                value="2"
                label={data.elsq1o2}
                onChange={handleEmploymentAreaChange}
                onClick={() => setApplicableLastSection(true)}
              />
              <RadioItem
                name="employmentArea"
                value="3"
                label={data.elsq1o3}
                onChange={handleEmploymentAreaChange}
                onClick={() => setApplicableLastSection(true)}
              />
            </div>
          </div>

          {/* ======== Section 12: Additional Points for Area of Employment ======== */}
          <div className="my-[50px] mx-auto p-5 border border-primary rounded-[20px] bg-white">
            <div className="text-2xl font-bold max-w-[900px]">
              <SectionNumber num={12} />
              <h5 className="mt-5 text-[#4d4d4d] text-2xl max-[980px]:text-xl max-[780px]:text-base max-[680px]:text-sm max-[560px]:text-[13px] max-[460px]:text-xs max-[370px]:text-[11px]">
                {data.twsq1}
              </h5>
            </div>
            <p className="text-xs !text-red-600 -mt-[5px]">
              Only Applies If You have selected Area 2 or Area 3 in the question
              above
            </p>

            <div className="flex flex-wrap justify-between mb-5 max-[980px]:text-[15px] max-[780px]:text-sm max-[680px]:text-xs max-[680px]:mb-[2px] max-[560px]:text-xs max-[560px]:mb-0 max-[460px]:text-[10px] max-[370px]:text-[9px]">
              <RadioItem
                name="languageProficiencyRegion"
                value={applicableLastSection ? "1" : "0"}
                label={data.twsq1o1}
                onChange={handleLanguageProficiencyRegionChange}
                disabled={!applicableLastSection}
              />
              <RadioItem
                name="languageProficiencyRegion"
                value={applicableLastSection ? "2" : "0"}
                label={data.twsq1o2}
                onChange={handleLanguageProficiencyRegionChange}
                disabled={!applicableLastSection}
              />
              <RadioItem
                name="languageProficiencyRegion"
                value={applicableLastSection ? "3" : "0"}
                label={data.twsq1o3}
                onChange={handleLanguageProficiencyRegionChange}
                disabled={!applicableLastSection}
              />
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------- */}
        {/*  Right Column: Sticky Points Sidebar                         */}
        {/* ----------------------------------------------------------- */}
        <div className="my-[50px] mx-auto w-[350px] max-[1200px]:w-[300px] sticky top-[100px] self-start max-[1030px]:static max-[1030px]:w-[99%] max-[1030px]:mx-auto bg-white">
          {sidebarContent}
        </div>
      </div>
    </>
  );
}
