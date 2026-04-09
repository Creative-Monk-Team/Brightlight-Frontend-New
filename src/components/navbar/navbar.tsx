"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  FaSearch,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { SERVICES_MENU, CALCULATORS, type MenuItem } from "@/data/navigation";

/* ------------------------------------------------------------------
   useDisclosureMap - manages open/close with a hover-delay to prevent
   accidental closes when moving the mouse diagonally.
   ------------------------------------------------------------------ */
function useDisclosureMap() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  const set = (id: string, val: boolean) =>
    setOpen((m) => ({ ...m, [id]: val }));
  const isOpen = (id: string) => !!open[id];

  const onEnter = (id: string) => () => {
    if (timers.current[id]) clearTimeout(timers.current[id]);
    set(id, true);
  };

  const onLeave = (id: string) => () => {
    timers.current[id] = setTimeout(() => set(id, false), 120);
  };

  const toggle = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault?.();
    setOpen((m) => ({ ...m, [id]: !m[id] }));
  };

  return { isOpen, onEnter, onLeave, toggle };
}

/* ------------------------------------------------------------------
   DesktopServices - hover mega-menu, desktop only.

   Each node wraps its trigger + flyout in a single div so the hover
   zone is continuous — no gap = no accidental close.
   ------------------------------------------------------------------ */
function DesktopServices({
  menu,
  h,
}: {
  menu: MenuItem[];
  h: ReturnType<typeof useDisclosureMap>;
}) {
  const leafCls =
    "block py-1.5 px-2 rounded text-[13px] text-primary no-underline hover:bg-primary/5 hover:text-gold transition-colors duration-200";

  const parentLinkCls =
    "flex items-center justify-between gap-2 py-1.5 px-2 rounded text-[13px] text-primary no-underline hover:bg-primary/5 hover:text-gold transition-colors duration-200 w-full";

  // Flyout panel: starts at left:100%, pl-1 bridges the gap between
  // the parent wrapper's right edge and the panel border.
  const flyoutCls = (id: string) =>
    `absolute top-0 left-full pl-1 z-[10] transition-all duration-200 ${
      h.isOpen(id)
        ? "opacity-100 visible translate-x-0"
        : "opacity-0 invisible -translate-x-1"
    }`;

  const renderNode = (node: MenuItem, depth = 0): React.ReactNode => {
    if (!node.children) {
      return (
        <Link key={node.id} href={node.href || "#"} className={leafCls}>
          {node.label}
        </Link>
      );
    }

    return (
      <div
        key={node.id}
        className="relative"
        onMouseEnter={h.onEnter(node.id)}
        onMouseLeave={h.onLeave(node.id)}
      >
        <Link href={node.href || "#"} className={parentLinkCls}>
          <span>{node.label}</span>
          <FaChevronRight className="w-[9px] h-[9px] text-primary/40 flex-shrink-0" />
        </Link>

        {/* Flyout panel — positioned left:100% of this wrapper */}
        <div className={flyoutCls(node.id)}>
          <div className="w-[210px] bg-white rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.14)] p-3">
            {node.href && node.href !== "#" && (
              <>
                <Link
                  href={node.href}
                  className="flex items-center gap-1 py-1.5 px-2 rounded text-[13px] font-semibold text-primary no-underline hover:bg-primary/5 hover:text-gold transition-colors duration-200"
                >
                  All {node.label}
                </Link>
                <div className="my-2 border-t border-primary/10" />
              </>
            )}
            {node.children.map((child) => renderNode(child, depth + 1))}
          </div>
        </div>
      </div>
    );
  };

  return <>{menu.map((n) => renderNode(n))}</>;
}

/* ------------------------------------------------------------------
   SidebarAccordion - single accordion item with smooth animation
   ------------------------------------------------------------------ */
function SidebarAccordion({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-primary/10 last:border-none">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3.5 px-1 text-[15px] font-semibold text-primary tracking-wide"
      >
        {label}
        <FaChevronDown
          className={`w-3 h-3 text-primary/50 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "2000px" : "0px" }}
      >
        <div className="pb-3 pl-3">{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   SidebarServices - click accordion for mobile sidebar
   ------------------------------------------------------------------ */
function SidebarServices({
  menu,
  h,
}: {
  menu: MenuItem[];
  h: ReturnType<typeof useDisclosureMap>;
}) {
  const leafLinkCls =
    "block py-2 px-2 text-[13px] text-primary/80 no-underline hover:text-gold rounded transition-colors duration-200";

  const renderNode = (node: MenuItem): React.ReactNode => {
    if (!node.children) {
      return (
        <Link key={node.id} href={node.href || "#"} className={leafLinkCls}>
          {node.label}
        </Link>
      );
    }

    return (
      <div key={node.id} className="border-b border-primary/5 last:border-none">
        <button
          onClick={() => h.toggle(node.id)()}
          className="w-full flex items-center justify-between py-2 px-2 text-[13px] font-medium text-primary"
        >
          <span>{node.label}</span>
          <FaChevronDown
            className={`w-2.5 h-2.5 text-primary/40 transition-transform duration-200 ${
              h.isOpen(node.id) ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
          style={{ maxHeight: h.isOpen(node.id) ? "2000px" : "0px" }}
        >
          <div className="pl-3 pb-1">
            {node.href && node.href !== "#" && (
              <Link
                href={node.href}
                className="block py-1.5 px-2 text-[12px] font-semibold text-primary no-underline hover:text-gold rounded transition-colors duration-200"
              >
                All {node.label}
              </Link>
            )}
            {node.children.map((child) => renderNode(child))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <SidebarAccordion
      label="SERVICES"
      isOpen={h.isOpen("services-root")}
      onToggle={() => h.toggle("services-root")()}
    >
      {menu.map((group) => renderNode(group))}
      <Link href="/more-services" className={leafLinkCls + " font-semibold"}>
        View All Services →
      </Link>
    </SidebarAccordion>
  );
}

/* ------------------------------------------------------------------
   Navbar - main component
   ------------------------------------------------------------------ */
interface NavbarProps {
  showBlue?: boolean;
}

export default function Navbar({ showBlue = false }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Search
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = inputValue.trim();
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  // Sticky contact bar
  const [hideContactNavbar, setHideContactNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1080) setHideContactNavbar(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop hover states
  const servicesHover = useDisclosureMap();
  const calculatorsHover = useDisclosureMap();

  // Sidebar
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((s) => !s);
  const side = useDisclosureMap();
  const calcSide = useDisclosureMap();

  // Close sidebar on route change
  useEffect(() => {
    setShowSidebar(false);
  }, [pathname]);

  // Close sidebar on outside click
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setShowSidebar(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Shared desktop nav link style
  const navLinkCls = (href: string) =>
    `text-[13px] font-semibold tracking-wider no-underline transition-colors duration-200 relative
     after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[2px] after:rounded-full
     after:transition-transform after:duration-200 after:origin-left
     ${
       isActive(href)
         ? "text-gold after:bg-gold after:scale-x-100"
         : "text-primary hover:text-gold after:bg-gold after:scale-x-0 hover:after:scale-x-100"
     }`;

  const dropdownTriggerCls = (id: string) =>
    `flex items-center gap-1 text-[13px] font-semibold tracking-wider no-underline cursor-pointer
     transition-colors duration-200 relative
     after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[2px] after:rounded-full
     after:transition-transform after:duration-200 after:origin-left
     ${
       servicesHover.isOpen(id) || calculatorsHover.isOpen(id)
         ? "text-gold after:bg-gold after:scale-x-100"
         : "text-primary hover:text-gold after:bg-gold after:scale-x-0 hover:after:scale-x-100"
     }`;

  return (
    <>
      {/* ===== TOP DARK BAR ===== */}
      <div className="w-screen flex items-center justify-center flex-col bg-primary py-3.5 font-madera text-[14px] relative z-[50]">
        <div className="site-shell max-[1080px]:w-[90%] max-[1080px]:justify-center w-full flex justify-between items-center text-white">
          {/* Immigration Tools */}
          <div className="text-[#ead9b0] flex items-center justify-start gap-2 cursor-pointer">
            <Image
              loading="lazy"
              src="/images/gearIcon.svg"
              className="w-[25px] h-[25px] max-[670px]:w-[15px] max-[670px]:h-[15px]"
              width={25}
              height={25}
              alt="Tools"
            />
            <Link
              href="/immigration-tools"
              className="text-[#ead9b0] no-underline hover:text-white transition-colors duration-200"
            >
              Immigration Tools
            </Link>
            <Image
              loading="lazy"
              src="/images/rightArrow.svg"
              className="w-[10px] h-[10px]"
              width={10}
              height={10}
              alt=""
            />
          </div>

          {/* Right side — hidden below 1080px */}
          <div className="flex justify-end items-center gap-20 max-[1080px]:hidden [&_a]:text-[#ead9b0] [&_a]:no-underline [&_a:hover]:text-white [&_a]:transition-colors [&_a]:duration-200">
            <Link href="/about-us">ABOUT</Link>
            <Link href="/contact-us">CONTACT</Link>
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              <span>+1 (604) 503 3734</span>
            </div>
          </div>
        </div>

        {/* ===== FLOATING NAV BAR ===== */}
        <div
          className={`left-0 w-full flex flex-col items-center z-[49] ${
            hideContactNavbar ? "fixed top-0 py-2" : "absolute top-full pt-4"
          }`}
          style={{ transition: "none" }}
        >
          {/* White main bar */}
          <div className="shadow-[0_10px_30px_rgba(19,47,70,0.14)] max-[1290px]:p-[24px_32px] max-[1080px]:w-full max-[1080px]:p-[28px_10px] max-[1080px]:bg-transparent max-[1080px]:border-none max-[1080px]:shadow-none w-[95%] max-w-[1440px] mx-auto flex justify-between items-center p-[22px_28px] rounded-[14px] bg-white relative -top-[2px] z-[3]">
            {/* Desktop logo */}
            <Link
              href="/"
              className="pr-6 border-r border-primary/20 max-[1439px]:mr-4 max-[1080px]:hidden"
            >
              <Image
                loading="lazy"
                height={50}
                width={100}
                src="/images/brlightlight-icon.webp"
                alt="Brightlight Immigration"
                className="w-[44px] h-auto"
              />
            </Link>

            {/* Mobile logo */}
            <Link
              href="/"
              className="hidden max-[1080px]:block max-[1080px]:pr-0 max-[1080px]:border-none"
            >
              <Image
                loading="lazy"
                height={50}
                width={100}
                src={
                  showBlue
                    ? "/images/brlightlight-icon.webp"
                    : "/images/brightlight-logo-white.png"
                }
                alt="Brightlight Immigration"
                className="w-[44px] h-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav
              className="flex items-center justify-end gap-7 max-[1439px]:gap-5 max-[1080px]:hidden"
              aria-label="Main navigation"
            >
              <Link href="/" className={navLinkCls("/")}>
                HOME
              </Link>

              {/* SERVICES dropdown */}
              <div
                className="relative"
                onMouseEnter={servicesHover.onEnter("services")}
                onMouseLeave={servicesHover.onLeave("services")}
              >
                <Link
                  href="/more-services"
                  className={`${dropdownTriggerCls("services")} ${
                    servicesHover.isOpen("services")
                      ? "text-gold"
                      : "text-primary"
                  }`}
                >
                  SERVICES
                  <FaChevronDown
                    className={`w-2.5 h-2.5 transition-transform duration-200 ${
                      servicesHover.isOpen("services") ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown panel — pt-2 bridges the gap between link and panel */}
                <div
                  className={`absolute top-full left-0 pt-2 z-[20] transition-all duration-200 ${
                    servicesHover.isOpen("services")
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-1"
                  }`}
                >
                  <div className="w-[220px] bg-white rounded-xl shadow-[0_8px_30px_rgba(19,47,70,0.16)] p-3">
                    <DesktopServices menu={SERVICES_MENU} h={servicesHover} />
                    <div className="mt-2 pt-2 border-t border-primary/10">
                      <Link
                        href="/more-services"
                        className="flex items-center gap-1 py-1.5 px-2 text-[13px] font-semibold text-gold no-underline hover:text-primary rounded transition-colors duration-200"
                      >
                        View All Services
                        <FaChevronRight className="w-2.5 h-2.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/blogs" className={navLinkCls("/blogs")}>
                BLOGS
              </Link>

              {/* CALCULATORS dropdown */}
              <div
                className="relative"
                onMouseEnter={calculatorsHover.onEnter("calc")}
                onMouseLeave={calculatorsHover.onLeave("calc")}
              >
                <span
                  className={`flex items-center gap-1 text-[13px] font-semibold tracking-wider cursor-pointer transition-colors duration-200 ${
                    calculatorsHover.isOpen("calc")
                      ? "text-gold"
                      : "text-primary hover:text-gold"
                  }`}
                >
                  CALCULATORS
                  <FaChevronDown
                    className={`w-2.5 h-2.5 transition-transform duration-200 ${
                      calculatorsHover.isOpen("calc") ? "rotate-180" : ""
                    }`}
                  />
                </span>

                <div
                  className={`absolute top-full left-0 pt-2 z-[20] transition-all duration-200 ${
                    calculatorsHover.isOpen("calc")
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-1"
                  }`}
                >
                  <div className="w-[220px] bg-white rounded-xl shadow-[0_8px_30px_rgba(19,47,70,0.16)] p-3">
                    {CALCULATORS.map((l) => (
                      <Link
                        key={l.id}
                        href={l.href || "#"}
                        className="block py-1.5 px-2 rounded text-[13px] text-primary no-underline hover:bg-primary/5 hover:text-gold transition-colors duration-200"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/contact-us" className={navLinkCls("/contact-us")}>
                CONTACT
              </Link>
            </nav>

            {/* Search bar */}
            <form
              onSubmit={handleSubmit}
              className="max-[1439px]:ml-6 max-[1080px]:ml-auto max-[1080px]:mr-[10px] max-[1080px]:flex-1 max-[1080px]:max-w-[280px] max-[450px]:max-w-[220px]"
            >
              <div className="flex items-center rounded-full border border-[#dec18f] overflow-hidden max-[1080px]:h-[50px] max-[450px]:h-[45px] max-[1080px]:flex-1">
                <div className="relative grow flex items-center bg-white max-[1080px]:bg-transparent rounded-full pl-[10px] h-full">
                  <FaSearch className="absolute left-[10px] w-[20px] h-[20px] max-[1080px]:w-[14px] max-[1080px]:h-[14px] text-[#dec18f] pointer-events-none z-[3]" />
                  <input
                    type="text"
                    className="w-full border-none outline-none p-[10px_10px_10px_35px] max-[1080px]:p-[0_0_0_30px] max-[1080px]:w-full max-[1080px]:bg-transparent text-[16px] max-[1080px]:text-[14px] rounded-l-full h-full"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                    aria-label="Search"
                    placeholder="Search"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#dec18f] text-white border-none outline-none p-[10px_20px] max-[1080px]:p-[10px_16px] max-[1080px]:text-[12px] max-[450px]:p-[8px_14px] max-[450px]:text-[11px] rounded-full text-[16px] cursor-pointer whitespace-nowrap hover:bg-[#c9a96e] transition-colors duration-200 h-full"
                >
                  Search here
                </button>
              </div>
            </form>

            {/* Hamburger — mobile only */}
            <button
              className="hidden max-[1080px]:block cursor-pointer ml-3"
              onClick={toggleSidebar}
              aria-label="Open menu"
            >
              <Image
                loading="lazy"
                height={30}
                width={30}
                src={
                  showBlue
                    ? "/images/hamBurgerIconBlue.svg"
                    : "/images/hamBurgerIconWhite.svg"
                }
                className="w-[30px] h-[30px]"
                alt="Menu"
              />
            </button>
          </div>

          {/* ===== SIDEBAR (mobile) ===== */}
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/30 z-[999] transition-opacity duration-300 max-[1080px]:block hidden ${
              showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setShowSidebar(false)}
          />

          <aside
            ref={sidebarRef}
            className={`fixed top-0 right-0 w-[300px] h-full bg-white shadow-[-4px_0_24px_rgba(0,0,0,0.15)] transition-transform duration-300 z-[1000] ${
              showSidebar ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-primary/10">
                <Link href="/" onClick={() => setShowSidebar(false)}>
                  <Image
                    loading="lazy"
                    height={40}
                    width={80}
                    src="/images/brlightlight-icon.webp"
                    alt="Brightlight Immigration"
                    className="w-[36px] h-auto"
                  />
                </Link>
                <button
                  onClick={toggleSidebar}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-primary/60 hover:text-primary hover:bg-primary/5 transition-colors duration-200 text-2xl leading-none"
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex-1 px-4 py-2">
                <Link
                  href="/"
                  onClick={() => setShowSidebar(false)}
                  className={`flex items-center py-3.5 px-1 text-[15px] font-semibold tracking-wide no-underline border-b border-primary/10 transition-colors duration-200 ${
                    isActive("/") ? "text-gold" : "text-primary hover:text-gold"
                  }`}
                >
                  HOME
                </Link>

                <SidebarServices menu={SERVICES_MENU} h={side} />

                <SidebarAccordion
                  label="CALCULATORS"
                  isOpen={calcSide.isOpen("calc-side")}
                  onToggle={() => calcSide.toggle("calc-side")()}
                >
                  {CALCULATORS.map((l) => (
                    <Link
                      key={l.id}
                      href={l.href || "#"}
                      onClick={() => setShowSidebar(false)}
                      className="block py-2 px-2 text-[13px] text-primary/80 no-underline hover:text-gold rounded transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  ))}
                </SidebarAccordion>

                {[
                  { href: "/blogs", label: "BLOGS" },
                  { href: "/about-us", label: "ABOUT" },
                  { href: "/contact-us", label: "CONTACT" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setShowSidebar(false)}
                    className={`flex items-center py-3.5 px-1 text-[15px] font-semibold tracking-wide no-underline border-b border-primary/10 transition-colors duration-200 ${
                      isActive(href)
                        ? "text-gold"
                        : "text-primary hover:text-gold"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Sidebar footer */}
              <div className="px-5 py-4 border-t border-primary/10">
                <a
                  href="tel:+16045033734"
                  className="flex items-center gap-2 text-[13px] text-primary/70 no-underline hover:text-primary transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor" aria-hidden="true">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                  +1 (604) 503 3734
                </a>
              </div>
            </div>
          </aside>

          {/* ===== CONTACT STRIP ===== */}
          {/* When strip is visible (not scrolled), it overlaps the dark page banner → use white text/icons */}
          <div
            className={`w-[95%] max-w-[1440px] flex justify-between items-center p-[12px_4px] max-[1080px]:w-full max-[1080px]:p-[10px_16px] w-full mx-auto transition-all duration-300 mt-2 ${
              hideContactNavbar ? "opacity-0 invisible hidden" : "opacity-100 visible"
            }`}
          >
            {/* Contact info */}
            <div className="flex items-center max-[1080px]:items-start max-[1080px]:flex-col max-[1080px]:mr-0">
              <div className="flex items-center mr-5 max-[1080px]:mr-0">
                <Image
                  loading="lazy"
                  height={24}
                  width={24}
                  src={showBlue ? "/images/locationBlue.png" : "/images/location-white.png"}
                  alt=""
                  className="w-[18px] h-auto mr-[5px] max-[1080px]:w-[11px]"
                />
                <Link
                  href="https://g.co/kgs/9BZVS85"
                  className="font-bold no-underline max-[450px]:text-[10px]"
                  style={{ color: showBlue ? "#164c95" : "white" }}
                  target="_blank"
                >
                  Vancouver
                </Link>
              </div>

              <div className="flex items-center mr-5 max-[1080px]:mr-0 max-[1080px]:pt-[5px]">
                <Image
                  loading="lazy"
                  height={24}
                  width={24}
                  src={showBlue ? "/images/mailBlue.png" : "/images/mail-white.png"}
                  alt=""
                  className="w-[18px] h-auto mr-[5px] ml-[9px] max-[1080px]:ml-0 max-[1080px]:w-[14px]"
                />
                <span
                  className="font-bold max-[450px]:text-[10px]"
                  style={{ color: showBlue ? "#164c95" : "white" }}
                >
                  info<span>@</span>brightlightimmigration.ca
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 max-[1080px]:mt-5 max-[450px]:gap-2">
              {[
                {
                  href: "https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1",
                  label: "TikTok",
                  blueSrc: "/images/tiktokBlue.png",
                  Icon: FaTiktok,
                },
                {
                  href: "https://ca.linkedin.com/in/loveneet-paneswar-5b2377198",
                  label: "LinkedIn",
                  blueSrc: "/images/linkedinBlue.png",
                  Icon: FaLinkedinIn,
                },
                {
                  href: "https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p",
                  label: "Instagram",
                  blueSrc: "/images/instagramBlue.png",
                  Icon: FaInstagram,
                },
                {
                  href: "https://www.facebook.com/brightlightimmigration",
                  label: "Facebook",
                  blueSrc: "/images/facebookBlue.png",
                  Icon: FaFacebookF,
                },
                {
                  href: "https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA",
                  label: "YouTube",
                  blueSrc: "/images/youtubeBlue.png",
                  Icon: FaYoutube,
                },
              ].map(({ href, label, blueSrc, Icon }) =>
                showBlue ? (
                  <Link key={label} target="_blank" href={href}>
                    <Image
                      loading="lazy"
                      height={24}
                      width={24}
                      src={blueSrc}
                      alt={label}
                      className="w-6 h-6 max-[1080px]:w-[18px] max-[1080px]:h-[18px] max-[450px]:w-4 max-[450px]:h-4"
                    />
                  </Link>
                ) : (
                  <Link key={label} target="_blank" href={href}>
                    <Icon
                      className="w-6 h-6 fill-white cursor-pointer hover:fill-[#f1c40f] transition-colors duration-200 max-[1080px]:w-[18px] max-[1080px]:h-[18px] max-[450px]:w-4 max-[450px]:h-4"
                      aria-label={label}
                    />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
