"use client"
import Header from "@/components/header/Header";
import FeaturedPosts from "@/components/hero/FeaturedPosts";
import HeroBottom from "@/components/hero/HeroBottom";
import HeroCards from "@/components/hero/HeroCards";
import Hero from "@/components/hero/HeroTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




export default function Home() {

   useEffect(() => {
    try {
      AOS.init({
        easing: "ease-out-back",
        duration: 1200,
        delay: 0,
        mirror: true,
        anchorPlacement: "bottom-bottom",
        offset: 160,
      });
      AOS.refresh();
    } catch (error) {
      console.error("AOS initialization error:", error);
    }
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <HeroCards />
      <HeroBottom />
      <FeaturedPosts />
    </>
  );
}
