import Header from "@/components/header/Header";
import FeaturedPosts from "@/components/hero/FeaturedPosts";
import HeroBottom from "@/components/hero/HeroBottom";
import HeroCards from "@/components/hero/HeroCards";
import Hero from "@/components/hero/HeroTop";
import Nav from "@/components/nav/Nav";



export default function Home() {
  return (
   <>
  <Nav/>
 <Header/>
 <Hero/>
 <HeroCards/>
 <HeroBottom/>
 <FeaturedPosts/>
  </>
  );
}
