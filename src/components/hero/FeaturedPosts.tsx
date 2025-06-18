import FeaturedPostCards from "../cards/FeaturedPostCard";

export default function FeaturedPosts() {
  return (
    <>
      {/* conatiner */}
      <div className="flex justify-center ">
        <div className="max-w-[1044px] flex flex-col items-center gap-20 justify-center ">
          {/* text */}
          <div className="font-[700] text-center w-full  flex flex-col items-center gap-[10px]">
            <h6 className="text-sm text-[#23A6F0]">Practice Advice</h6>
            <h2 className="text-[36px] md:text-[40px] text-primary ">
              Featured Posts
            </h2>
            <p className="md:w-[469px]  text-sm font-[400] text-secondary">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          {/* items container */}
          <div className="mx-auto max-w-[1044px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <FeaturedPostCards image={"/Images/HeroSection/FeaturedPosts/hero16.jpeg"}/>
          <FeaturedPostCards image={"/Images/HeroSection/FeaturedPosts/hero17.jpeg"}/>
          <FeaturedPostCards image={"/Images/HeroSection/FeaturedPosts/hero18.jpeg"}/>

          </div>

        </div>
      </div>
    </>
  );
}

