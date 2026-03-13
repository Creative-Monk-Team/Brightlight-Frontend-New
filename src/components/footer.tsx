import Image from "next/image";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const quickAccessLinks = [
  { label: "PR", href: "/pr-renewal" },
  { label: "SUPER VISA", href: "/super-visa" },
  { label: "VISITOR VISA", href: "/visitor-visa" },
  { label: "STUDY VISA", href: "/study-permit-minors" },
  { label: "PNP PROGRAM", href: "/pnp" },
  { label: "FAMILY SPONSORSHIP", href: "/family-reunification-sponsorship" },
  { label: "SPOUSAL VISA", href: "/spousal-open-work-permit" },
  { label: "OPEN WORK PERMIT", href: "/open-work-permit" },
  { label: "RECONSIDERATION", href: "/reconsideration" },
];

const socialLinks = [
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1",
    label: "TikTok",
  },
  {
    icon: FaLinkedinIn,
    href: "https://ca.linkedin.com/in/loveneet-paneswar-5b2377198",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p",
    label: "Instagram",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/brightlightimmigration",
    label: "Facebook",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA",
    label: "YouTube",
  },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  );
}

function ContactInfo() {
  return (
    <>
      {/* Working Hours */}
      <div className="mb-10">
        <div className="flex items-start gap-4">
          <Image
            loading="lazy"
            height={40}
            width={40}
            src="/images/hours.webp"
            alt="Our Working Hours"
            title="Our Working Hours"
            className="relative -top-2.5 h-10 w-10 object-cover"
          />
          <p className="text-[15px] mb-1">OUR WORKING HOURS</p>
        </div>
        <p className="text-[15px] mb-1">Monday to Friday: 10:00 AM - 6:00 PM</p>
        <p className="text-[15px] mb-1">Saturday: By Appointment only</p>
        <p className="text-[15px] mb-1">Sunday: Closed</p>
      </div>

      {/* Address */}
      <div className="mb-10">
        <div className="flex items-start gap-4">
          <Image
            loading="lazy"
            height={40}
            width={40}
            src="/images/address.webp"
            alt="Our Address"
            title="Our Address"
            className="relative -top-2.5 h-10 w-10 object-cover"
          />
          <p className="text-[15px] mb-1">OUR ADDRESS</p>
        </div>
        <p className="text-[15px] mb-1">
          15315 66 Ave unit 327, Surrey, BC V3S 2A1
        </p>
      </div>

      {/* Get in Touch */}
      <div className="mb-10">
        <div className="flex items-start gap-4">
          <PhoneIcon className="h-[25px] w-[25px] cursor-pointer mb-4 shrink-0" />
          <p className="text-[15px] mb-1">GET IN TOUCH</p>
        </div>
        <p className="text-[15px] mb-1">(604) 503-3734</p>
        <p className="text-[15px] mb-1">
          <Link
            href="mailto:info@brightlightimmigration.ca"
            className="text-white"
          >
            info@brightlightimmigration.ca
          </Link>
        </p>
      </div>
    </>
  );
}

function QuickAccessLinks() {
  return (
    <>
      <p className="max-md:text-[13px]">QUICK ACCESS</p>
      {quickAccessLinks.map((link) => (
        <div
          key={link.href}
          className="mt-[-10px] first:mt-[20px] flex items-center justify-end gap-1.5"
        >
          <Link
            href={link.href}
            className="text-gray-300 no-underline text-sm max-[500px]:text-[10px] font-bold transition-all duration-300 ease-in-out hover:text-[#ead9b0] hover:-translate-y-0.5"
          >
            {link.label}
          </Link>
          <span className="relative -top-[14px] text-[40px] -right-[5px] max-[500px]:-top-1">.</span>
        </div>
      ))}
    </>
  );
}

export default function Footer() {
  return (
    <footer id="footer">
      {/* ===== Upper CTA Section ===== */}
      <div className="w-[1000px] max-xl:w-[95%] mx-auto flex items-center justify-between bg-[#ead9b0] rounded-2xl px-9 py-6 max-sm:px-4 max-sm:py-4 relative z-[3] -mb-16 shadow-lg">
        <Image
          loading="lazy"
          height={50}
          width={100}
          src="/images/footer-image.webp"
          alt="Free Assessment"
          title="Free Assessment"
          className="w-[20%] h-auto"
        />
        <div className="w-[40%] ml-1.5">
          <h1 className="text-primary text-[30px] max-xl:text-[25px] max-sm:text-[17px] text-left">
            Start your process today
          </h1>
          <p className="text-primary text-[15px] max-xl:text-[13px] max-sm:text-[8px] mt-2.5">
            Get your free assessment and discover your options to immigrate to
            Canada
          </p>
        </div>
        <Link
          href="/booking"
          target="_blank"
          className="inline-block w-auto px-5 py-4 max-xl:px-3 max-xl:py-3 max-sm:px-2 max-sm:py-2.5 rounded-full border-[3px] border-primary text-center text-base max-xl:text-xs max-sm:text-[8px] font-semibold text-primary bg-transparent no-underline transition-all duration-300 ease-in-out animate-pulse hover:border-white hover:shadow-md"
        >
          FREE ASSESSMENT
        </Link>
      </div>

      {/* ===== Main Footer ===== */}
      <div className="bg-primary text-white pt-[120px] max-[500px]:pt-[100px] pb-5 relative">
        {/* ===== Tagline ===== */}
        <p className="text-center w-full text-[#ead9b0] tracking-wide max-[500px]:text-sm mb-12">
          VANCOUVER BASED, SERVING GLOBALLY.
        </p>
        <div className="max-w-[1440px] max-[1500px]:w-[1400px] max-[1450px]:w-[95%] mx-auto flex items-stretch justify-between max-md:flex-col max-md:gap-12">
          {/* Left Column - Desktop Only */}
          <div className="w-[30%] max-md:hidden">
            <ContactInfo />
          </div>

          {/* Center Column */}
          <div className="w-[60%] max-md:w-full max-md:order-1 flex flex-col gap-[50px] items-center justify-center">
            {/* Logos */}
            <div className="flex items-center justify-center gap-[30px] max-xl:flex-col">
              <Image
                loading="lazy"
                height={50}
                width={330}
                src="/images/brightlight-main-logo.webp"
                alt="Brightlight Immigration"
                title="Brightlight Immigration"
                className="h-auto w-[48%] max-xl:w-[48%] max-xl:pr-0 max-xl:border-r-0 pr-[30px] border-r border-white max-md:w-[400px] max-[500px]:w-[250px]"
              />
              <div className="w-[40%] max-xl:text-center max-xl:w-full">
                <Link
                  href="https://register.college-ic.ca/Public-Register-EN/RCIC_Search.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    loading="lazy"
                    height={50}
                    width={100}
                    src="/images/cicc-seeklogo1.png"
                    alt="CICC"
                    title="CICC"
                    className="w-[60%] max-xl:mx-auto cursor-pointer"
                  />
                </Link>
                <p className="ml-5 max-xl:ml-0 mt-2.5 text-[15px] tracking-wide">
                  RCIC License # R522969
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mx-auto flex items-center justify-center gap-[10px] mt-[40px]">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    aria-label={social.label}
                    className="text-white hover:text-[#ead9b0] transition-colors duration-300"
                  >
                    <Icon className="h-[45px] w-[45px] cursor-pointer p-[10px]" />
                  </Link>
                );
              })}
            </div>

            {/* Privacy Links */}
            <div className="flex items-center justify-center gap-2.5 text-white">
              <Link
                href="/privacy-policy"
                className="text-white text-[13px] font-semibold transition-all duration-300 ease-in-out hover:text-[#ead9b0] hover:-translate-y-0.5"
              >
                PRIVACY POLICY
              </Link>
              <span>|</span>
              <Link
                href="/terms-and-conditions"
                className="text-white text-[13px] font-semibold transition-all duration-300 ease-in-out hover:text-[#ead9b0] hover:-translate-y-0.5"
              >
                TERMS &amp; CONDITION
              </Link>
            </div>
          </div>

          {/* Right Column - Desktop Only */}
          <div className="w-[30%] text-right max-md:hidden">
            <QuickAccessLinks />
          </div>

          {/* Mobile Footer - Contact + Quick Access side by side */}
          <div className="hidden max-md:flex max-md:justify-between max-md:w-full max-md:order-2">
            <div className="w-1/2">
              <ContactInfo />
            </div>
            <div className="w-1/2 text-right">
              <QuickAccessLinks />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center tracking-wide [word-spacing:2px] text-sm max-[500px]:text-xs mt-[80px] mb-[20px]">
          ALL RIGHTS RESERVED BRIGHTLIGHT IMMIGRATION &copy;2024
        </p>
      </div>
    </footer>
  );
}
