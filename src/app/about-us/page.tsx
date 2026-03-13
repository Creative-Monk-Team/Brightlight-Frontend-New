import Image from "next/image";
import Link from "next/link";
import { aboutUsData } from "@/data/pages/about-us";
import BestChoice from "@/components/sections/best-choice";
import AnimatedCounter from "@/components/ui/animated-counter";
import RevealSection from "@/components/ui/reveal-section";

export default function AboutUsPage() {
  const data = aboutUsData;

  return (
    <>
      {/* ============================================================ */}
      {/* 1. BANNER                                                    */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat bg-center pt-[230px] pb-[120px]"
        style={{ backgroundImage: "url('/images/about-banner.png')" }}
      >
        <div className="mx-auto max-w-[1440px] text-center px-4 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px]">
          <div className="flex justify-center">
            <Image
              src="/images/brightlight-main-logo.webp"
              alt="Brightlight Immigration logo"
              width={400} height={200}
              className="h-auto w-[400px] md:w-[300px] sm:w-[250px]"
              priority
            />
          </div>

          <h1 className="mx-auto mt-[130px] mb-[130px] max-w-[700px] text-[30px] text-white text-center font-bold leading-snug lg:mt-20 lg:mb-20 md:mt-14 md:mb-14 md:text-[24px] sm:text-[20px]">
            {data.topSection.heading}
          </h1>

          <div className="flex items-center justify-center gap-[50px] md:flex-col md:gap-6">
            <div className="flex w-[40%] items-center justify-between gap-2.5 rounded-[40px] bg-[rgba(233,233,24,0.122)] pr-2.5 transition-transform duration-300 hover:-translate-y-[5px] xl:w-[50%] lg:w-full md:w-[85%] sm:w-full sm:rounded-[20px]">
              <div className="flex w-[30%] items-center justify-center rounded-[20px] border-[3px] border-white bg-[#132f46] p-10 sm:p-6">
                <Image src="/images/12-years22.png" alt="12 years" width={70} height={70} className="h-[70px] w-[70px] object-cover sm:h-[50px] sm:w-[50px]" />
              </div>
              <p className="w-[65%] text-left text-[25px] text-[#ecca87] lg:text-[20px] md:text-[18px] sm:text-[16px]">
                {data.topSection.feature1Heading}
              </p>
            </div>

            <div className="flex w-[40%] items-center justify-between gap-2.5 rounded-[40px] bg-[rgba(233,233,24,0.122)] pr-2.5 transition-transform duration-300 hover:-translate-y-[5px] xl:w-[50%] lg:w-full md:w-[85%] sm:w-full sm:rounded-[20px]">
              <div className="flex w-[30%] items-center justify-center rounded-[20px] border-[3px] border-white bg-[#132f46] p-10 sm:p-6">
                <Image src="/images/comprehensive11.png" alt="Comprehensive" width={70} height={70} className="h-[70px] w-[70px] object-cover sm:h-[50px] sm:w-[50px]" />
              </div>
              <p className="w-[65%] text-left text-[25px] text-[#ecca87] lg:text-[20px] md:text-[18px] sm:text-[16px]">
                {data.topSection.feature2Heading}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-[70px] w-[80%] text-center md:w-[90%]">
          <p className="text-[25px] leading-[1.5] text-white lg:text-[20px] md:text-[18px] sm:text-[16px]">
            {data.topSection.description}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FOUNDATION                                                */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[120px] flex items-center justify-center md:py-16"
        style={{ backgroundImage: "url('/images/aboutLeaf.png')" }}
      >
        <RevealSection
          variant="top"
          className="mx-auto flex max-w-[1440px] items-center justify-between px-4 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px] md:flex-col"
        >
          <div className="w-[47%] md:w-full md:text-center">
            <Image
              src={data.foundationImage}
              alt="Our Foundation"
              width={500} height={500}
              className="mr-[150px] h-auto w-[75%] xl:w-[68%] lg:w-[68%] md:mx-auto md:mr-auto md:w-[60%]"
            />
            <div className="mt-[50px] w-full text-[#132f46] lg:mx-auto lg:mt-[100px] lg:w-[75%]">
              <h2 className="mb-10 text-left text-[50px] font-bold leading-tight lg:text-[40px] md:text-center md:text-[36px] sm:text-[28px]">
                {data.foundationSection.heading}
              </h2>
              <h3 className="mb-[30px] border-b border-[#132f46] pb-4 text-left text-[30px] font-semibold lg:text-[24px] md:text-center md:text-[20px] sm:text-[18px]">
                {data.foundationSection.headline1}
              </h3>
              <h3 className="text-left text-[30px] font-semibold lg:text-[24px] md:text-center md:text-[20px] sm:text-[18px]">
                {data.foundationSection.headline2}
              </h3>
            </div>
          </div>

          <div className="w-[47%] md:mt-10 md:w-full">
            <p className="mb-[50px] text-left text-[22px] leading-[1.9] text-[#132f46] lg:text-[18px] md:text-center md:text-[16px]">
              {data.foundationSection.description1}
            </p>
            <p className="text-left text-[22px] leading-[1.9] text-[#132f46] lg:text-[18px] md:text-center md:text-[16px]">
              {data.foundationSection.description2}
            </p>
          </div>
        </RevealSection>
      </section>

      {/* ============================================================ */}
      {/* 3. VISION                                                    */}
      {/* ============================================================ */}
      <section className="flex w-full items-center justify-center bg-gradient-to-r from-[#ddd] to-[#f4f6f8] py-[120px] md:py-16">
        <RevealSection
          variant="left"
          className="mx-auto flex max-w-[1440px] items-center justify-between px-4 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px] md:flex-col-reverse"
        >
          <div className="w-[47%] md:mt-10 md:w-full">
            <p className="mx-auto w-[70%] text-left text-[20px] leading-[1.9] text-[#132f46] lg:text-[18px] md:w-full md:text-center md:text-[16px]">
              {data.visionSection.description}
            </p>
          </div>

          <div className="w-[47%] md:w-full md:text-center">
            <div className="flex w-full justify-start md:justify-center">
              <Image
                src={data.visionImage}
                alt="Our Vision"
                width={220} height={220}
                className="h-auto w-[220px] object-cover xl:w-[180px] lg:w-[150px] md:w-[130px]"
              />
            </div>
            <div className="mt-[50px] w-full text-[#132f46]">
              <h2 className="mb-10 text-left text-[50px] font-bold leading-tight lg:text-[40px] md:text-center md:text-[36px] sm:text-[28px]">
                {data.visionSection.heading}
              </h2>
              <h3 className="mb-4 text-left text-[30px] font-semibold lg:text-[24px] md:text-center md:text-[20px] sm:text-[18px]">
                {data.visionSection.headline1}
              </h3>
              <hr className="my-4 border-[#132f46]" />
              <h3 className="text-left text-[30px] font-semibold lg:text-[24px] md:text-center md:text-[20px] sm:text-[18px]">
                {data.visionSection.headline2}
              </h3>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ============================================================ */}
      {/* 4. PILLARS                                                   */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[150px] md:py-16"
        style={{ backgroundImage: "url('/images/pillars-bg.png')" }}
      >
        <RevealSection
          variant="top"
          className="mx-auto flex max-w-[1440px] items-stretch justify-between px-4 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px] md:flex-col md:items-center md:gap-10"
        >
          <div className="w-[47%] md:w-full md:text-center">
            <Image
              src={data.pillarsImage}
              alt="Our Pillars"
              width={300} height={300}
              className="h-auto w-[40%] md:mx-auto"
            />
            <div className="w-full text-white">
              <h2 className="pt-[30px] text-[60px] font-bold lg:text-[48px] md:text-[40px] sm:text-[32px]">
                {data.pillarsSection.heading}
              </h2>
              <p className="pt-10 text-[20px] leading-[1.9] lg:text-[18px] md:text-[16px]">
                {data.pillarsSection.description1}
              </p>
            </div>
          </div>

          <div className="flex w-[47%] flex-col items-end justify-end gap-[30px] text-center md:w-full md:items-center">
            {[
              { icon: "/images/integrity1.png",    heading: data.pillarsSection.pillar1Heading, description: data.pillarsSection.pillar1Description },
              { icon: "/images/responsibility.png", heading: data.pillarsSection.pillar2Heading, description: data.pillarsSection.pillar2Description },
              { icon: "/images/reliability.png",   heading: data.pillarsSection.pillar3Heading, description: data.pillarsSection.pillar3Description },
            ].map((pillar, i) => (
              <div
                key={i}
                className="group w-[60%] rounded-[10px] bg-gradient-to-b from-[#14334c] to-[rgba(3,12,20,0.07)] px-2.5 pb-[30px] pt-2.5 transition-all duration-300 hover:-translate-y-2.5 hover:bg-[#1c2e3f] hover:shadow-lg md:w-[80%] sm:w-full"
              >
                <Image
                  src={pillar.icon}
                  alt={pillar.heading}
                  width={100} height={50}
                  className="relative -top-[25px] mx-auto h-auto w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <h4 className="mb-2.5 text-center text-[35px] font-bold text-[#cfb681] transition-transform duration-300 group-hover:-translate-y-[5px] lg:text-[28px] md:text-[24px]">
                  {pillar.heading}
                </h4>
                <p className="text-[22px] text-[#cfb681] transition-transform duration-300 group-hover:-translate-y-[3px] lg:text-[18px] md:text-[16px]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* ============================================================ */}
      {/* 5. DIRECTORS                                                 */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[100px] md:py-16"
        style={{ backgroundImage: "url('/images/meet-directors-bg.png')" }}
      >
        <RevealSection variant="left">
          <div className="mx-auto max-w-[1440px] text-center px-4 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px]">
            <h2 className="text-[40px] font-bold text-[#132f46] transition-transform duration-300 hover:scale-105 lg:text-[36px] md:text-[30px] sm:text-[24px]">
              {data.directors.heading}
            </h2>
          </div>

          {data.directors.list.map((director, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={director.name}
                className={`mx-auto mt-[50px] flex max-w-[1440px] items-center justify-around px-4 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px] md:flex-col md:gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-[45%] md:w-full md:text-center">
                  <h3 className="text-[50px] font-bold leading-[50px] text-[#e9c67f] transition-transform duration-300 hover:-translate-y-[5px] lg:text-[40px] lg:leading-[40px] md:text-[36px] md:leading-snug sm:text-[28px]">
                    {director.name}
                  </h3>
                  <h4 className="pt-2.5 text-[22px] font-semibold text-[#132f46] transition-transform duration-300 hover:-translate-y-[3px] lg:text-[20px] md:text-[18px]">
                    {director.designation}
                  </h4>
                  <p className="pt-[30px] text-[20px] leading-[33px] text-[#132f46] transition-opacity duration-300 hover:opacity-80 lg:text-[18px] md:text-[16px]">
                    {director.description}
                  </p>
                </div>
                <div className="md:order-first">
                  <Image
                    src={director.image}
                    alt={director.name}
                    width={350} height={350}
                    className="h-auto w-[350px] transition-transform duration-300 hover:scale-110 lg:w-[300px] md:w-[280px] sm:w-[250px]"
                  />
                </div>
              </div>
            );
          })}
        </RevealSection>
      </section>

      {/* ============================================================ */}
      {/* 6. WE ARE                                                    */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[180px] md:py-20"
        style={{ backgroundImage: "url('/images/we-are-background.png')" }}
      >
        <RevealSection
          variant="top"
          className="mx-auto max-w-[1440px] px-4 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px]"
        >
          <Image
            src={data.weAreImage}
            alt="We Are Brightlight"
            width={1440} height={600}
            className="h-auto w-full"
          />
        </RevealSection>
      </section>

      {/* ============================================================ */}
      {/* 7. ACHIEVEMENTS                                              */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat pb-[100px] pt-[50px]"
        style={{ backgroundImage: "url('/images/and-bg.png')" }}
      >
        <p className="relative -top-[180px] text-center text-[180px] font-bold text-[#132f46] md:text-[120px] sm:text-[80px] sm:-top-[100px]">
          &amp;
        </p>

        <RevealSection
          variant="top"
          className="mx-auto -mt-[100px] max-w-[1440px] text-center text-[#132f46] px-4 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px] sm:-mt-[50px]"
        >
          <h2 className="mx-auto text-center text-[65px] font-bold lg:text-[50px] md:text-[40px] sm:text-[28px]">
            {data.achievements.heading}
          </h2>

          <div className="mx-auto mt-[100px] flex max-w-[1240px] items-stretch justify-between gap-6 xl:max-w-[1100px] lg:max-w-[950px] md:flex-col md:items-center md:gap-8 sm:mt-12">
            {data.achievements.cards.map((card, i) => (
              <div
                key={i}
                className="rounded-[18.7px] bg-white px-[35px] py-[60px] text-center transition-transform duration-300 hover:-translate-y-2 lg:px-[25px] lg:py-[50px] md:w-[80%] md:px-[20px] md:py-[30px] sm:w-full"
              >
                <Image src={card.icon} alt={card.heading} width={100} height={100} className="mx-auto h-auto w-[100px] md:w-[80px]" />
                <h3 className="flex items-start justify-center pt-[30px] text-[70px] font-bold lg:text-[56px] md:text-[48px] sm:text-[36px]">
                  <AnimatedCounter target={parseInt(card.numbers)} />
                  <span className="-mt-3 text-[70px] lg:text-[56px] md:text-[48px] sm:text-[36px]">+</span>
                </h3>
                <p className="text-[30px] font-semibold lg:text-[24px] md:text-[20px] sm:text-[18px]">
                  {card.heading}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* ============================================================ */}
      {/* 8. BEST CHOICE                                               */}
      {/* ============================================================ */}
      <BestChoice />

      {/* ============================================================ */}
      {/* 9. SOCIAL PRESENCE                                           */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[100px] md:py-16"
        style={{ backgroundImage: "url('/images/pillars-bg.png')" }}
      >
        <RevealSection
          variant="top"
          className="mx-auto max-w-[1440px] text-center text-white px-4 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px]"
        >
          <h2 className="text-[60px] font-bold lg:text-[48px] md:text-[40px] sm:text-[28px]">
            {data.socialPresence.heading}
          </h2>
          <p className="mx-auto w-[67%] pt-[50px] text-[22px] leading-[1.9] lg:text-[18px] lg:w-[80%] md:w-full md:text-[16px]">
            {data.socialPresence.description1}
          </p>
          <p className="mx-auto w-[67%] pt-[50px] text-[22px] leading-[1.9] lg:text-[18px] lg:w-[80%] md:w-full md:text-[16px]">
            {data.socialPresence.description2}
          </p>

          <div className="flex w-full items-center justify-center">
            <div className="relative my-5 h-[82vh] w-[18vw] pt-[70px] md:h-[60vh] md:w-[40vw] sm:h-[50vh] sm:w-[60vw]">
              <Image
                src={data.socialPresence.phoneImage}
                alt="Social media phone mockup"
                fill
                className="object-contain transition-transform duration-300 hover:-translate-y-[7px]"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-white text-[22px] lg:text-[18px] md:text-[16px]">{data.socialPresence.findUsOnHeading}</p>
            <div className="mx-auto mt-[30px] flex max-w-[1240px] items-center justify-center gap-[25px] lg:max-w-[1000px] md:flex-wrap">
              {data.socialPresence.socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <Image src={link.icon} alt={link.name} width={100} height={50} className="h-auto w-full md:w-[80px] sm:w-[60px]" />
                </Link>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ============================================================ */}
      {/* 10. GLOBALLY                                                 */}
      {/* ============================================================ */}
      <section
        className="h-[830px] w-full bg-cover bg-center bg-no-repeat md:h-[500px] sm:h-[350px]"
        style={{ backgroundImage: `url('${data.globally.backgroundImage}')` }}
      >
        <RevealSection
          variant="left"
          className="mx-auto max-w-[1440px] text-center text-[#132f46] px-4 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px]"
        >
          <h2 className="pt-[140px] text-[60px] font-bold lg:text-[48px] md:pt-[80px] md:text-[36px] sm:pt-[50px] sm:text-[24px]">
            {data.globally.heading}
          </h2>
        </RevealSection>
      </section>

      {/* ============================================================ */}
      {/* 11. MAP                                                      */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[100px] md:py-16"
        style={{ backgroundImage: "url('/images/mainbg.png')" }}
      >
        <div className="mx-auto max-w-[1440px] text-center px-4 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.0812218508793!2d-122.7567043!3d49.1040734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485da0fa5b1bb09%3A0x6a54cd78f3bc1e91!2sBrightlight%20Immigration%20Inc.!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
            title="Brightlight Immigration office location"
            className="h-[590px] w-full rounded-[20px] border-none md:h-[400px] sm:h-[300px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
