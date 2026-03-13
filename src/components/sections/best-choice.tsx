"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function BestChoice() {
  const [planeTop, setPlaneTop] = useState(150);
  const [isTrackVisible, setIsTrackVisible] = useState(false);
  const trackRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsTrackVisible(entry.isIntersecting),
      { threshold: 0.17 }
    );
    if (trackRef.current) observer.observe(trackRef.current);
    return () => {
      if (trackRef.current) observer.unobserve(trackRef.current);
    };
  }, []);

  useEffect(() => {
    if (planeTop <= 150) setPlaneTop(150);
  }, [planeTop]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTimestamp = performance.now();

    const handleScroll = () => {
      if (!isTrackVisible) return;
      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastTimestamp;
      const scrollSpeed = deltaY / deltaTime;
      const multiplier = window.innerWidth < 767 ? 5 : 15;
      setPlaneTop((prev) => prev + scrollSpeed * multiplier);
      lastScrollY = currentScrollY;
      lastTimestamp = currentTime;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTrackVisible]);

  return (
    <div className="bg-[url('/images/blue-map.png')] w-full h-auto bg-no-repeat bg-cover pt-[50px] pb-[100px] -mb-px">
      <div className="max-w-[1440px] mx-auto text-center relative flex items-center justify-center flex-col overflow-hidden max-[1360px]:w-[95%]">
        <div className="absolute top-[50px] left-0 max-[865px]:w-[60%] max-[500px]:top-5 max-[380px]:top-10 max-[337px]:top-[30px]">
          <h2 className="text-[#d2ae6d] text-[50px] w-[65%] text-right max-[1360px]:text-[40px] max-[1160px]:text-[30px] max-[600px]:text-[25px] max-[500px]:text-xl max-[380px]:text-[17px] max-[337px]:text-[15px]">
            What makes us the best choice for you ?
          </h2>
        </div>
        <Image
          src="/images/api/plane-image.png"
          alt="Plane"
          width={100}
          height={500}
          className="relative z-[3] left-[5px] transition-[top] duration-100 ease-linear max-[1060px]:w-[12%]"
          style={{ top: `${planeTop}px` }}
        />
        <Image
          ref={trackRef}
          src="/images/best-choice-update.png"
          alt="Track"
          width={800}
          height={400}
          className="max-[1060px]:w-[60%]"
        />
      </div>
    </div>
  );
}
