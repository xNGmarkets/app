"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "@/app/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";

export default function AOSAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return <>{children}</>;
}
