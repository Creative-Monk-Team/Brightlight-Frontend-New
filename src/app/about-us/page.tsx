import Image from "next/image";
import Link from "next/link";
import { aboutUsData } from "@/data/pages/about-us";
import BestChoice from "@/components/sections/best-choice";
import AnimatedCounter from "@/components/ui/animated-counter";
import { generatePageMetadata } from "@/data/generate-metadata";

export const metadata = generatePageMetadata("about-us");

export default function AboutUsPage() {
  const data = aboutUsData;

  return (
    <>
      {/* ============================================================ */}
      {/* 1. BANNER                                                    */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat bg-center pt-[230px] pb-[120px] max-[1000px]:pt-[200px] max-[768px]:pt-[200px] max-[768px]:pb-16"
        style={{ backgroundImage: "url('/images/about-banner.png')" }}
      >
        <div className="mx-auto max-w-[1440px] max-[1500px]:max-w-[1400px] max-[1300px]:max-w-[1200px] max-[1100px]:max-w-[1000px] max-[900px]:max-w-[700px] max-[720px]:max-w-[620px] max-[620px]:max-w-[520px] max-[450px]:max-w-[380px] text-center px-4">
          <div className="flex justify-center">
            <Image
              src="/images/brightlight-main-logo.webp"
              alt="Brightlight Immigration logo"
              width={400} height={200}
              className="h-auto w-[400px] max-[430px]:w-[300px] max-[370px]:w-[240px]"
              priority
            />
          </div>

          <h1 className="mx-auto mt-[130px] mb-[130px] max-w-[700px] max-[720px]:max-w-[500px] text-[30px] max-[720px]:text-[25px] text-white text-center font-bold leading-snug max-[1000px]:mt-20 max-[1000px]:mb-20 max-[768px]:mt-14 max-[768px]:mb-14">
            {data.topSection.heading}
          </h1>

          <div className="flex items-center justify-center gap-[50px] max-[768px]:flex-col max-[768px]:gap-6">
            <div className="flex w-[40%] max-[1200px]:w-[50%] max-[1000px]:w-full max-[768px]:w-[85%] max-[480px]:w-full items-center justify-between gap-2.5 rounded-[40px] bg-[rgba(233,233,24,0.122)] pr-2.5 transition-transform duration-300 hover:-translate-y-[5px] max-[480px]:rounded-[20px]">
              <div className="flex w-[30%] items-center justify-center rounded-[20px] border-[3px] border-white bg-[#132f46] p-10 max-[620px]:p-6">
                <Image src="/images/12-years22.png" alt="12 years" width={70} height={70} className="h-[70px] w-[70px] object-cover max-[480px]:h-[50px] max-[480px]:w-[50px]" />
              </div>
              <p className="w-[65%] text-left text-[25px] text-[#ecca87] max-[1000px]:text-[20px] max-[620px]:text-[18px] max-[450px]:text-[15px] max-[370px]:text-[13px]">
                {data.topSection.feature1Heading}
              </p>
            </div>

            <div className="flex w-[40%] max-[1200px]:w-[50%] max-[1000px]:w-full max-[768px]:w-[85%] max-[480px]:w-full items-center justify-between gap-2.5 rounded-[40px] bg-[rgba(233,233,24,0.122)] pr-2.5 transition-transform duration-300 hover:-translate-y-[5px] max-[480px]:rounded-[20px]">
              <div className="flex w-[30%] items-center justify-center rounded-[20px] border-[3px] border-white bg-[#132f46] p-10 max-[620px]:p-6">
                <Image src="/images/comprehensive11.png" alt="Comprehensive" width={70} height={70} className="h-[70px] w-[70px] object-cover max-[480px]:h-[50px] max-[480px]:w-[50px]" />
              </div>
              <p className="w-[65%] text-left text-[25px] text-[#ecca87] max-[1000px]:text-[20px] max-[620px]:text-[18px] max-[450px]:text-[15px] max-[370px]:text-[13px]">
                {data.topSection.feature2Heading}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-[70px] w-[80%] text-center max-[768px]:w-[90%]">
          <p className="text-[25px] leading-[1.5] text-white max-[1000px]:text-[20px] max-[768px]:text-[18px] max-[480px]:text-[16px]">
            {data.topSection.description}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FOUNDATION — 2-column: image+heading left, text right     */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[120px] flex items-center justify-center max-[768px]:py-16"
        style={{ backgroundImage: "url('/images/aboutLeaf.png')" }}
      >
        <div className="mx-auto flex max-w-[1440px] max-[1500px]:max-w-[1400px] max-[1300px]:max-w-[1200px] max-[1100px]:max-w-[1000px] max-[1000px]:flex-col items-center justify-between px-4">
          <div className="w-[47%] max-[1000px]:w-full max-[1000px]:text-center">
            <Image
              src={data.foundationImage}
              alt="Our Foundation"
              width={500} height={500}
              className="mr-[150px] h-auto w-[75%] max-[1200px]:w-[68%] max-[1000px]:mx-auto max-[1000px]:mr-auto max-[768px]:w-[60%]"
            />
            <div className="mt-[50px] w-full text-[#132f46] max-[1000px]:mx-auto max-[1000px]:mt-[100px] max-[1000px]:w-[75%]">
              <h2 className="mb-10 text-left text-[50px] font-bold leading-tight max-[1000px]:text-center max-[1000px]:text-[40px] max-[768px]:text-[36px] max-[480px]:text-[28px]">
                {data.foundationSection.heading}
              </h2>
              <h3 className="mb-[30px] border-b border-[#132f46] pb-4 text-left text-[30px] font-semibold max-[1000px]:text-center max-[1000px]:text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px]">
                {data.foundationSection.headline1}
              </h3>
              <h3 className="text-left text-[30px] font-semibold max-[1000px]:text-center max-[1000px]:text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px]">
                {data.foundationSection.headline2}
              </h3>
            </div>
          </div>

          <div className="w-[47%] max-[1000px]:mt-10 max-[1000px]:w-full">
            <p className="mb-[50px] text-left text-[22px] leading-[1.9] text-[#132f46] max-[1000px]:text-center max-[1000px]:text-[18px] max-[768px]:text-[16px]">
              {data.foundationSection.description1}
            </p>
            <p className="text-left text-[22px] leading-[1.9] text-[#132f46] max-[1000px]:text-center max-[1000px]:text-[18px] max-[768px]:text-[16px]">
              {data.foundationSection.description2}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. VISION — 2-column: text left, icon+heading right          */}
      {/* ============================================================ */}
      <section className="flex w-full items-center justify-center bg-gradient-to-r from-[#ddd] to-[#f4f6f8] py-[120px] max-[768px]:py-16">
        <div className="mx-auto flex max-w-[1440px] max-[1500px]:max-w-[1400px] max-[1300px]:max-w-[1200px] max-[1100px]:max-w-[1000px] max-[1000px]:flex-col-reverse items-center justify-between px-4">
          <div className="w-[47%] max-[1000px]:mt-10 max-[1000px]:w-full">
            <p className="mx-auto w-[70%] text-left text-[20px] leading-[1.9] text-[#132f46] max-[1000px]:w-full max-[1000px]:text-center max-[768px]:text-[16px]">
              {data.visionSection.description}
            </p>
          </div>

          <div className="w-[47%] max-[1000px]:w-full max-[1000px]:text-center">
            <div className="flex w-full justify-start max-[1000px]:justify-center">
              <Image
                src={data.visionImage}
                alt="Our Vision"
                width={220} height={220}
                className="h-auto w-[220px] object-cover max-[1300px]:w-[180px] max-[1200px]:w-[150px] max-[768px]:w-[130px]"
              />
            </div>
            <div className="mt-[50px] w-full text-[#132f46]">
              <h2 className="mb-10 text-left text-[50px] font-bold leading-tight max-[1000px]:text-center max-[1000px]:text-[40px] max-[768px]:text-[36px] max-[480px]:text-[28px]">
                {data.visionSection.heading}
              </h2>
              <h3 className="mb-4 text-left text-[30px] font-semibold max-[1000px]:text-center max-[1000px]:text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px]">
                {data.visionSection.headline1}
              </h3>
              <hr className="my-4 border-[#132f46]" />
              <h3 className="text-left text-[30px] font-semibold max-[1000px]:text-center max-[1000px]:text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px]">
                {data.visionSection.headline2}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PILLARS — 2-column: image+heading left, cards right       */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[150px] max-[768px]:py-16"
        style={{ backgroundImage: "url('/images/pillars-bg.png')" }}
      >
        <div className="mx-auto flex max-w-[1440px] max-[1500px]:max-w-[1400px] max-[1300px]:max-w-[1200px] max-[1100px]:max-w-[1000px] max-[1000px]:flex-col items-stretch justify-between px-4 max-[1000px]:items-center max-[1000px]:gap-10">
          <div className="w-[47%] max-[1000px]:w-full max-[1000px]:text-center">
            <Image
              src={data.pillarsImage}
              alt="Our Pillars"
              width={300} height={300}
              className="h-auto w-[40%] max-[1000px]:mx-auto"
            />
            <div className="w-full text-white">
              <h2 className="pt-[30px] text-[60px] font-bold max-[1000px]:text-[48px] max-[768px]:text-[40px] max-[480px]:text-[32px]">
                {data.pillarsSection.heading}
              </h2>
              <p className="pt-10 text-[20px] leading-[1.9] max-[768px]:text-[16px]">
                {data.pillarsSection.description1}
              </p>
            </div>
          </div>

          <div className="flex w-[47%] flex-col items-end justify-end gap-[30px] text-center max-[1000px]:w-full max-[1000px]:items-center">
            {[
              { icon: "/images/integrity1.png",    heading: data.pillarsSection.pillar1Heading, description: data.pillarsSection.pillar1Description },
              { icon: "/images/responsibility.png", heading: data.pillarsSection.pillar2Heading, description: data.pillarsSection.pillar2Description },
              { icon: "/images/reliability.png",   heading: data.pillarsSection.pillar3Heading, description: data.pillarsSection.pillar3Description },
            ].map((pillar, i) => (
              <div
                key={i}
                className="group w-[60%] rounded-[10px] bg-gradient-to-b from-[#14334c] to-[rgba(3,12,20,0.07)] px-2.5 pb-[30px] pt-2.5 transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1000px]:w-[80%] max-[480px]:w-full"
              >
                <Image
                  src={pillar.icon}
                  alt={pillar.heading}
                  width={100} height={50}
                  className="relative -top-[25px] mx-auto h-auto w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <h4 className="mb-2.5 text-center text-[35px] font-bold text-[#cfb681] transition-transform duration-300 group-hover:-translate-y-[5px] max-[1000px]:text-[28px] max-[768px]:text-[24px]">
                  {pillar.heading}
                </h4>
                <p className="text-[22px] text-[#cfb681] transition-transform duration-300 group-hover:-translate-y-[3px] max-[1000px]:text-[18px] max-[768px]:text-[16px]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. DIRECTORS                                                 */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[100px] max-[768px]:py-16"
        style={{ backgroundImage: "url('/images/meet-directors-bg.png')" }}
      >
        <div className="mx-auto max-w-[1440px] max-[1500px]:max-w-[1400px] max-[1300px]:max-w-[1200px] max-[1100px]:max-w-[1000px] text-center px-4">
          <h2 className="text-[40px] font-bold text-[#132f46] transition-transform duration-300 hover:scale-105 max-[768px]:text-[30px] max-[480px]:text-[24px]">
            {data.directors.heading}
          </h2>
        </div>

        {data.directors.list.map((director, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={director.name}
              className={`mx-auto mt-[50px] flex max-w-[1440px] max-[1500px]:max-w-[1400px] max-[1300px]:max-w-[1200px] max-[1100px]:max-w-[1000px] items-center justify-around px-4 max-[1000px]:flex-col max-[1000px]:gap-8 max-[1000px]:text-center ${isEven ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className="w-[34%] max-[1000px]:w-full">
                <h3 className="text-[50px] font-bold leading-[50px] text-[#e9c67f] transition-transform duration-300 hover:-translate-y-[5px] max-[1000px]:text-[40px] max-[768px]:text-[36px] max-[480px]:text-[28px]">
                  {director.name}
                </h3>
                <h4 className="pt-2.5 text-[22px] font-semibold text-[#132f46] max-[768px]:text-[18px]">
                  {director.designation}
                </h4>
                <p className="pt-[30px] text-[20px] leading-[33px] text-[#132f46] max-[768px]:text-[16px]">
                  {director.description}
                </p>
              </div>
              <div className="max-[1000px]:order-first">
                <Image
                  src={director.image}
                  alt={director.name}
                  width={350} height={350}
                  className="h-auto w-[350px] transition-transform duration-300 hover:scale-110 max-[1000px]:w-[300px] max-[620px]:w-[220px]"
                />
              </div>
            </div>
          );
        })}
      </section>

      {/* ============================================================ */}
      {/* 6. WE ARE                                                    */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[180px] max-[768px]:py-20"
        style={{ backgroundImage: "url('/images/we-are-background.png')" }}
      >
        <div className="mx-auto max-w-[1440px] max-[1500px]:max-w-[1400px] max-[1300px]:max-w-[1200px] max-[1100px]:max-w-[1000px] px-4">
          <Image
            src={data.weAreImage}
            alt="We Are Brightlight"
            width={1440} height={600}
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. ACHIEVEMENTS                                              */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat pb-[100px] pt-[50px]"
        style={{ backgroundImage: "url('/images/and-bg.png')" }}
      >
        <p className="relative -top-[180px] text-center text-[180px] font-bold text-[#132f46] max-[768px]:text-[120px] max-[480px]:text-[80px] max-[480px]:-top-[100px]">
          &amp;
        </p>

        <div className="mx-auto -mt-[100px] max-w-[1440px] max-[1500px]:max-w-[1400px] max-[1300px]:max-w-[1200px] max-[1100px]:max-w-[1000px] text-center text-[#132f46] px-4 max-[480px]:-mt-[50px]">
          <h2 className="mx-auto text-center text-[65px] font-bold max-[1000px]:text-[50px] max-[768px]:text-[40px] max-[480px]:text-[28px]">
            {data.achievements.heading}
          </h2>

          <div className="mx-auto mt-[100px] flex max-w-[1240px] max-[1300px]:max-w-[1150px] max-[1200px]:max-w-[1050px] items-stretch justify-between gap-6 max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:gap-8 max-[480px]:mt-12">
            {data.achievements.cards.map((card, i) => (
              <div
                key={i}
                className="rounded-[18.7px] bg-white px-[35px] py-[60px] text-center transition-transform duration-300 hover:-translate-y-2 max-[1000px]:w-[350px] max-[768px]:w-[80%] max-[480px]:w-full max-[1000px]:px-[25px] max-[1000px]:py-[40px]"
              >
                <Image src={card.icon} alt={card.heading} width={100} height={100} className="mx-auto h-auto w-[100px] max-[768px]:w-[80px]" />
                <h3 className="flex items-start justify-center pt-[30px] text-[70px] font-bold max-[1150px]:text-[56px] max-[768px]:text-[48px] max-[480px]:text-[36px]">
                  <AnimatedCounter target={parseInt(card.numbers)} />
                  <span className="-mt-3 text-[70px] max-[1150px]:text-[56px] max-[768px]:text-[48px] max-[480px]:text-[36px]">+</span>
                </h3>
                <p className="text-[30px] font-semibold max-[1000px]:text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px]">
                  {card.heading}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. BEST CHOICE                                               */}
      {/* ============================================================ */}
      <BestChoice />

      {/* ============================================================ */}
      {/* 9. SOCIAL PRESENCE                                           */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[100px] max-[768px]:py-16"
        style={{ backgroundImage: "url('/images/pillars-bg.png')" }}
      >
        <div className="mx-auto max-w-[1440px] max-[1500px]:max-w-[1400px] max-[1300px]:max-w-[1200px] max-[1100px]:max-w-[1000px] text-center text-white px-4">
          <h2 className="text-[60px] font-bold max-[1000px]:text-[48px] max-[768px]:text-[40px] max-[480px]:text-[28px]">
            {data.socialPresence.heading}
          </h2>
          <p className="mx-auto w-[67%] pt-[50px] text-[22px] leading-[1.9] max-[1000px]:text-[18px] max-[1000px]:w-[80%] max-[768px]:w-full max-[768px]:text-[16px]">
            {data.socialPresence.description1}
          </p>
          <p className="mx-auto w-[67%] pt-[50px] text-[22px] leading-[1.9] max-[1000px]:text-[18px] max-[1000px]:w-[80%] max-[768px]:w-full max-[768px]:text-[16px]">
            {data.socialPresence.description2}
          </p>

          <div className="flex w-full items-center justify-center">
            <div className="relative my-5 h-[82vh] w-[18vw] pt-[70px] max-[768px]:h-[60vh] max-[768px]:w-[40vw] max-[480px]:h-[50vh] max-[480px]:w-[60vw]">
              <Image
                src={data.socialPresence.phoneImage}
                alt="Social media phone mockup"
                fill
                className="object-contain transition-transform duration-300 hover:-translate-y-[7px]"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-white text-[22px] max-[1000px]:text-[18px] max-[768px]:text-[16px]">{data.socialPresence.findUsOnHeading}</p>
            <div className="mx-auto mt-[30px] flex max-w-[1240px] max-[1000px]:max-w-[1000px] items-center justify-center gap-[25px] max-[768px]:flex-wrap">
              {data.socialPresence.socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <Image src={link.icon} alt={link.name} width={100} height={50} className="h-auto w-full max-[768px]:w-[80px] max-[480px]:w-[60px]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. GLOBALLY                                                 */}
      {/* ============================================================ */}
      <section
        className="h-[830px] w-full bg-cover bg-center bg-no-repeat max-[1000px]:h-[500px] max-[560px]:h-[400px] max-[450px]:h-[350px] max-[430px]:h-[300px]"
        style={{ backgroundImage: `url('${data.globally.backgroundImage}')` }}
      >
        <div className="mx-auto max-w-[1440px] max-[1500px]:max-w-[1400px] max-[1300px]:max-w-[1200px] max-[1100px]:max-w-[1000px] text-center text-[#132f46] px-4">
          <h2 className="pt-[140px] text-[60px] font-bold max-[1000px]:text-[48px] max-[768px]:pt-[80px] max-[768px]:text-[36px] max-[480px]:pt-[50px] max-[480px]:text-[24px]">
            {data.globally.heading}
          </h2>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. MAP                                                      */}
      {/* ============================================================ */}
      <section
        className="w-full bg-cover bg-no-repeat py-[100px] max-[768px]:py-16"
        style={{ backgroundImage: "url('/images/mainbg.png')" }}
      >
        <div className="mx-auto max-w-[1440px] max-[1500px]:max-w-[1400px] max-[1300px]:max-w-[1200px] max-[1100px]:max-w-[1000px] text-center px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.0812218508793!2d-122.7567043!3d49.1040734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485da0fa5b1bb09%3A0x6a54cd78f3bc1e91!2sBrightlight%20Immigration%20Inc.!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
            title="Brightlight Immigration office location"
            className="h-[590px] w-full rounded-[20px] border-none max-[768px]:h-[400px] max-[480px]:h-[300px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
