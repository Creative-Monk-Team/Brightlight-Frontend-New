"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealSection({
  children,
  className = "",
  variant = "top",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "top" | "left";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transition = "transition-all duration-700 ease-out";
  const hidden = variant === "left" ? "opacity-0 -translate-x-full" : "opacity-0 -translate-y-16";
  const shown = "opacity-100 translate-x-0 translate-y-0";

  return (
    <div ref={ref} className={`${transition} ${visible ? shown : hidden} ${className}`}>
      {children}
    </div>
  );
}
