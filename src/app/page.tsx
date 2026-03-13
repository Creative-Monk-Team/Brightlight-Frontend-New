"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaPassport, FaMedal, FaSmile, FaLightbulb, FaShieldAlt,
  FaClipboardList, FaHandshake, FaCheckCircle, FaLinkedin,
  FaHome, FaLeaf, FaPlaneDeparture, FaGraduationCap,
  FaUsers, FaBriefcase, FaFileAlt,
} from "react-icons/fa";

import Testimonials from "@/components/sections/testimonials";
import FAQInternal from "@/components/sections/faq-internal";
import RecentBlogs from "@/components/sections/recent-blogs";

import {
  homeTopSection,
  servicesSection,
  serviceCards,
  features,
  achievementsSection,
  achievements,
  loveneetSection,
  ourProcessSection,
  processSteps,
  homepageFaqData,
} from "@/data/pages/homepage";

// =============================================================================
// Helpers
// =============================================================================
function splitHeadline(text: string) {
  const words = text.trim().split(" ");
  const lastWord = words.pop() || "";
  return { rest: words.join(" "), last: lastWord };
}

// =============================================================================
// AnimatedCounter
// =============================================================================
function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          obs.disconnect();
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { rootMargin: "-50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

// =============================================================================
// FadeIn wrapper — progressive enhancement: elements are visible by default,
// animation added only after JS mounts so SSR/bots/screenshots always see content
// =============================================================================
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
    // Already in viewport — don't animate, leave visible
    if (rect.top < window.innerHeight - 40 && rect.bottom >= 0) return;
    // Below fold — apply animation and observe
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

// =============================================================================
// Section header with gold accent
// =============================================================================
function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
}: {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <FadeIn className="text-center mb-12">
      <span className={`inline-block text-[12px] font-bold uppercase tracking-[3px] mb-3 px-4 py-1.5 rounded-full ${light ? "bg-white/10 text-gold" : "bg-gold/10 text-gold"}`}>
        {label}
      </span>
      <h2 className={`text-[44px] max-[700px]:text-[30px] font-bold leading-tight ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[16px] max-w-[540px] mx-auto leading-relaxed ${light ? "text-white/60" : "text-gray-text"}`}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}

// =============================================================================
// Our Process
// =============================================================================
const STEP_ICONS = [FaClipboardList, FaHandshake, FaCheckCircle, FaShieldAlt];

function OurProcess() {
  return (
    <section className="w-full py-[80px] bg-gradient-to-b from-[#f5f8fc] to-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto max-[1470px]:w-[95%]">
        <SectionHeader
          label="How We Work"
          title={<>{ourProcessSection.heading}</>}
          subtitle={ourProcessSection.description}
        />

        <div className="grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1 mt-4 relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/20 via-gold/40 to-primary/20 hidden lg:block" />

          {processSteps.map((step, index) => {
            const isBlue = index % 2 === 0;
            const Icon = STEP_ICONS[index];
            return (
              <FadeIn
                key={index}
                delay={index * 0.12}
                className="flex flex-col items-center text-center group h-full"
              >
                {/* Number circle */}
                <div className={`relative z-10 w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center shadow-lg mb-6 transition-transform duration-300 group-hover:scale-110 shrink-0 ${isBlue ? "bg-primary" : "bg-gold"}`}>
                  <Icon className={`text-[22px] mb-1 ${isBlue ? "text-white" : "text-primary"}`} />
                  <span className={`text-[28px] font-bold leading-none ${isBlue ? "text-white" : "text-primary"}`}>
                    {index + 1}
                  </span>
                </div>

                {/* Card — flex-1 makes all cards fill the same row height */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(19,47,70,0.08)] hover:shadow-[0_8px_36px_rgba(19,47,70,0.14)] transition-all duration-300 hover:-translate-y-1 w-full text-left border border-primary/5">
                  <h3 className="text-[15px] font-bold text-primary mb-3 tracking-wide">
                    {step.heading}
                  </h3>
                  <ul className="space-y-2">
                    {step.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-[13px] text-gray-text leading-relaxed">
                        <span className={`mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold ${isBlue ? "bg-primary/10 text-primary" : "bg-gold/20 text-primary"}`}>
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// Feature icons map
// =============================================================================
const FEATURE_ICONS = [FaLightbulb, FaShieldAlt];

// =============================================================================
// Achievement icons map
// =============================================================================
const ACHIEVEMENT_ICONS = [FaPassport, FaMedal, FaSmile];

// =============================================================================
// Service card icons
// =============================================================================
const SERVICE_ICONS = [FaHome, FaLeaf, FaPlaneDeparture, FaGraduationCap, FaUsers, FaBriefcase, FaFileAlt];

// =============================================================================
// Main Page
// =============================================================================
export default function HomePage() {
  const headline1 = splitHeadline(homeTopSection.headline1);
  const headline2 = splitHeadline(homeTopSection.headline2);

  const handleCardClick = useCallback((href: string) => {
    window.location.href = href;
  }, []);

  return (
    <main>
      {/* ===================================================================
          SECTION 1 — Hero Banner
      =================================================================== */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#eef3f9] via-[#f7faff] to-white pt-[200px] pb-[70px] max-[1000px]:pt-[160px]">
        {/* Decorative background circles */}
        <div className="absolute top-[120px] right-[-80px] w-[420px] h-[420px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-[-60px] w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 text-center relative z-10">
          {/* Headline */}
          <div>
            <h1 className="hero-slide-left text-[58px] max-[1100px]:text-[46px] max-[790px]:text-[38px] max-[580px]:text-[30px] max-[415px]:text-[26px] font-bold leading-[1.12] text-primary">
              {headline1.rest}{" "}
              <span className="text-gold">{headline1.last}</span>
            </h1>
            <h1 className="hero-slide-right text-[58px] max-[1100px]:text-[46px] max-[790px]:text-[38px] max-[580px]:text-[30px] max-[415px]:text-[26px] font-bold leading-[1.12] text-primary mt-2">
              {headline2.rest}{" "}
              <span className="text-primary-light">{headline2.last}</span>
            </h1>
            <p className="hero-fade-up mt-5 text-[15px] font-semibold tracking-[0.18em] text-primary/60 uppercase max-[580px]:text-[12px]">
              {homeTopSection.smallHeadline1}
            </p>
          </div>

          {/* Service icon cards */}
          <div className="hero-cards mx-auto mt-12 mb-8 flex max-w-[1200px] flex-wrap items-center justify-center gap-3 max-[960px]:gap-2">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(card.href)}
                className="group flex h-[130px] w-[155px] max-[1100px]:w-[140px] max-[790px]:w-[130px] max-[580px]:h-[110px] max-[580px]:w-[110px] flex-col items-center justify-center rounded-2xl bg-white border border-primary/10 shadow-[0_4px_16px_rgba(19,47,70,0.08)] p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-primary hover:border-primary hover:shadow-[0_8px_24px_rgba(19,47,70,0.20)]"
              >
                <span className="text-[30px] max-[580px]:text-[24px] mb-2 transition-all duration-300 group-hover:scale-110 flex items-center justify-center text-primary group-hover:text-white">
                  {(() => { const Icon = SERVICE_ICONS[index]; return Icon ? <Icon /> : null; })()}
                </span>
                <p className="text-center text-[11px] max-[580px]:text-[10px] font-bold leading-tight tracking-wide text-primary group-hover:text-white transition-colors duration-300">
                  {card.title}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-btn flex items-center justify-center gap-4 flex-wrap">
            <Link href="/booking">
              <button className="inline-flex items-center justify-center rounded-full bg-primary text-white px-10 py-4 text-[15px] font-bold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(19,47,70,0.30)] max-[580px]:px-7 max-[580px]:text-[13px]">
                Book Free Assessment
              </button>
            </Link>
            <Link href="/more-services">
              <button className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary bg-transparent px-9 py-[14px] text-[15px] font-bold cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white max-[580px]:px-6 max-[580px]:text-[13px]">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 2 — Loveneet / Consultant Banner
      =================================================================== */}
      <section className="relative bg-primary overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="flex items-stretch min-h-[580px] max-[900px]:flex-col">
          {/* Image — fills left half naturally */}
          <div className="w-[48%] max-[1100px]:w-[44%] max-[900px]:w-full max-[900px]:h-[420px] shrink-0 relative overflow-hidden">
            {loveneetSection.bgImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={loveneetSection.bgImage}
                alt={loveneetSection.bgAlt}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            ) : (
              <div className="absolute inset-0 bg-primary-light/30 flex items-center justify-center text-white/20 text-[80px]">
                👩‍💼
              </div>
            )}
          </div>

          {/* Text — takes remaining width */}
          <div className="flex-1 flex items-center py-16 px-14 max-[1200px]:px-10 max-[900px]:px-7 max-[900px]:py-10 relative z-10">
            <FadeIn>
              <p className="text-gold text-[11px] font-bold uppercase tracking-[3px] mb-4">
                Meet Your Consultant
              </p>
              <h2 className="text-white text-[46px] max-[1200px]:text-[38px] max-[580px]:text-[30px] font-bold leading-tight mb-3">
                Loveneet Paneswar
              </h2>
              <p className="text-white/60 text-[15px] mb-1">
                Regulated Canadian Immigration Consultant
              </p>
              <p className="text-gold text-[14px] font-semibold mb-6">
                RCIC License #R522969
              </p>
              <p className="text-white/70 text-[16px] max-[580px]:text-[14px] leading-relaxed mb-8 max-w-[460px]">
                With a decade of experience and thousands of successful cases, Loveneet guides families, professionals, and students through every step of their Canadian immigration journey.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href={loveneetSection.rcicAppointmentUrl}
                  className="inline-flex items-center gap-2 bg-gold text-primary font-bold px-7 py-3 rounded-full text-[14px] no-underline hover:bg-gold/90 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book Appointment
                </Link>
                <Link
                  href={loveneetSection.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full text-[14px] no-underline hover:bg-white/10 transition-all duration-200"
                >
                  <FaLinkedin className="text-[16px]" />
                  LinkedIn
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 3 — Member Of / Credentials
      =================================================================== */}
      <section className="bg-gradient-to-r from-primary via-[#1a3d5c] to-primary py-12">
        <div className="max-w-[1200px] mx-auto max-[1240px]:w-[95%]">
          <FadeIn className="text-center mb-8">
            <p className="text-white/50 text-[12px] uppercase tracking-[3px] font-semibold">
              Trusted & Certified
            </p>
          </FadeIn>
          <div className="flex items-center justify-center gap-6 flex-wrap max-[600px]:gap-4">
            {[
              { label: "Member Of", name: "RCIC", full: "Regulated Canadian Immigration Consultants", color: "blue" },
              { label: "Member Of", name: "CAPIC", full: "Canadian Association of Professional Immigration Consultants", color: "gold" },
              { label: "Accepted By", name: "CICC", full: "College of Immigration & Citizenship Consultants", color: "blue" },
            ].map((badge, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-center min-w-[200px] max-[600px]:min-w-[160px] hover:bg-white/15 transition-colors duration-300">
                  <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">{badge.label}</p>
                  <p className="text-gold text-[32px] font-bold leading-none mb-2">{badge.name}</p>
                  <p className="text-white/60 text-[11px] leading-snug max-w-[160px] mx-auto">{badge.full}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 4 — Why Us / Features
      =================================================================== */}
      <section className="w-full py-[80px] max-[960px]:py-[60px] bg-gradient-to-b from-white to-[#f5f8fc]">
        <div className="max-w-[1340px] mx-auto max-[1380px]:w-[95%]">
          <SectionHeader
            label="Why Choose Us"
            title={<>We Make Immigration <span className="text-gold">Simple</span></>}
            subtitle="Expert guidance, proven results — we've helped thousands navigate Canada's complex immigration system."
          />

          <div className="grid grid-cols-2 max-[800px]:grid-cols-1 gap-6">
            {features.map((feature, num) => {
              const Icon = FEATURE_ICONS[num] || FaShieldAlt;
              return (
                <FadeIn key={num} delay={num * 0.15}>
                  <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(19,47,70,0.09)] hover:shadow-[0_12px_40px_rgba(19,47,70,0.16)] transition-all duration-300 hover:-translate-y-1 h-full flex gap-6 items-start group border border-primary/5">
                    <div className="w-[72px] h-[72px] rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300 shadow-[0_4px_16px_rgba(19,47,70,0.20)]">
                      <Icon className="text-white text-[28px]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[21px] max-[580px]:text-[18px] text-primary font-bold mb-3 leading-snug">
                        {feature.heading}
                      </h3>
                      <p className="text-gray-text text-[15px] leading-relaxed max-[580px]:text-[14px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 5 — Our Process
      =================================================================== */}
      <OurProcess />

      {/* ===================================================================
          SECTION 6 — Services Swiper
      =================================================================== */}
      <section className="w-full bg-gradient-to-br from-primary via-[#0d2e47] to-[#061e33] pt-[70px] pb-[90px]">
        <div className="max-w-[1200px] mx-auto max-[1240px]:w-[95%]">
          <SectionHeader
            label="Our Services"
            title={servicesSection.heading}
            subtitle={servicesSection.description}
            light
          />

          {/* 4-col grid, last 3 centred */}
          <div className="grid grid-cols-4 max-[1000px]:grid-cols-3 max-[680px]:grid-cols-2 gap-5 mt-4">
            {serviceCards.map((item, index) => {
              const Icon = SERVICE_ICONS[index];
              return (
                <FadeIn key={index} delay={index * 0.08}>
                  <Link href={item.href} className="no-underline group block h-full">
                    <div className="relative h-full flex flex-col rounded-2xl bg-white/6 border border-white/10 p-6 transition-all duration-300 hover:bg-white/12 hover:border-gold/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.30)] overflow-hidden">
                      {/* gold top bar on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

                      {/* icon */}
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300 shrink-0">
                        {Icon && <Icon className="text-gold group-hover:text-primary text-[20px] transition-colors duration-300" />}
                      </div>

                      <h4 className="text-white font-bold text-[16px] leading-snug mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/55 text-[13px] leading-relaxed flex-1 mb-4">
                        {item.desc}
                      </p>
                      <span className="text-gold text-[12px] font-semibold tracking-wide group-hover:gap-2 inline-flex items-center gap-1 transition-all duration-200">
                        Learn More <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn className="text-center mt-10">
            <Link href="/more-services">
              <button className="rounded-full border-2 border-white/40 bg-transparent px-10 py-3.5 text-[14px] font-semibold text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-primary hover:border-white">
                View All Services →
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===================================================================
          SECTION 7 — Achievements
      =================================================================== */}
      <section className="w-full py-[80px] max-[580px]:py-[60px] bg-gradient-to-b from-[#f5f8fc] to-white">
        <div className="max-w-[1440px] mx-auto max-[1470px]:w-[95%]">
          <SectionHeader
            label="Our Track Record"
            title={achievementsSection.heading}
            subtitle={achievementsSection.description}
          />

          <div className="grid grid-cols-3 max-[960px]:grid-cols-1 gap-6 max-w-[960px] mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = ACHIEVEMENT_ICONS[index] || FaMedal;
              return (
                <FadeIn
                  key={index}
                  delay={index * 0.15}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#0d3a5e] to-[#061e33] p-8 text-center border border-white/10 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 rounded-t-2xl" />
                  <div className="w-16 h-16 rounded-xl bg-white/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/15 transition-colors duration-300">
                    <Icon className="text-gold text-[28px]" />
                  </div>
                  <div className="text-[54px] max-[501px]:text-[42px] font-bold text-gold leading-none flex items-start justify-center">
                    <AnimatedCounter target={achievement.numbers} />
                    <span className="text-[30px] mt-3 ml-1">+</span>
                  </div>
                  <p className="mt-3 text-[13px] font-bold uppercase tracking-[2px] text-white/60">
                    {achievement.heading}
                  </p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 8 — Testimonials
      =================================================================== */}
      <Testimonials variant="white" />

      {/* ===================================================================
          SECTION 9 — CTA Strip
      =================================================================== */}
      <section className="w-full bg-primary py-[70px] px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <FadeIn className="max-w-[800px] mx-auto text-center relative z-10">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[3px] mb-4 px-4 py-1.5 rounded-full bg-gold/15 text-gold">
            Take the First Step
          </span>
          <h2 className="text-white text-[44px] max-[700px]:text-[30px] font-bold leading-tight mb-4">
            Ready to Start Your<br />Canadian Journey?
          </h2>
          <p className="text-white/60 text-[17px] max-[580px]:text-[15px] mb-8 leading-relaxed max-w-[500px] mx-auto">
            Book a free assessment with our licensed RCIC consultant today — no obligation, just clarity.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/booking">
              <button className="inline-flex items-center gap-2 bg-gold text-primary font-bold px-10 py-4 rounded-full text-[16px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(224,185,105,0.40)] max-[580px]:text-[14px] max-[580px]:px-8">
                Book Free Assessment →
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-[14px] rounded-full text-[15px] cursor-pointer transition-all duration-300 hover:bg-white/10 max-[580px]:text-[13px] max-[580px]:px-6">
                Contact Us
              </button>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ===================================================================
          SECTION 10 — Recent Blogs
      =================================================================== */}
      <RecentBlogs />

      {/* ===================================================================
          SECTION 11 — FAQ
      =================================================================== */}
      <FAQInternal data={homepageFaqData} />
    </main>
  );
}
