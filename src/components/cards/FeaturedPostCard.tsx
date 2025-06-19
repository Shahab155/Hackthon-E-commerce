import { FaAngleRight } from "react-icons/fa6";
import { IoImageSharp } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";

export default function FeaturedPostCards({ image }: { image: string }) {
  return (
    <div className="w-[95%] lg:w-[330px] h-auto lg:h-[606px] mx-auto">
     {/* image and new */}
      <div
        className={`h-[300px] bg-center bg-cover rounded-lg`}
       style={{ backgroundImage: `url(${image})` }}
      > 
        <span className="bg-[#E74040] px-[10px] relative top-5 left-5 py-1 rounded-sm text-white font-bold text-[12px] w-[58px] h-[24px]">
          NEW
        </span>
      </div>
      {/* text-container  */}
      <div className="text-center items-center sm:text-start sm:items-start lg:w-[330px] h-[306px] flex flex-col justify-around gap-2 p-6">
        <ul className="flex gap-[15px] text-[12px] sm:text-sm text-secondary">
          <li className="text-[#23A6F0]">Google</li>
          <li>Trending</li>
          <li>New</li>
        </ul>
        <h4 className="text-xl font-[400] text-primary">
          Loudest à la Madison #1 (L&apos;integral)
        </h4>
        <p className="text-secondaryfont-[400] text-sm">
          We focus on ergonomics and meeting you where you work. It&apos;s only
          a keystroke away.
        </p>
        <div className="md:w-[298px] flex gap-4 sm:items-start items-center">
          <p className="flex items-center gap-[5px] text-[10px] ]">
            <LuAlarmClock className="text-[#23A6F0] size-4" />{" "}
            <span className=" text-[#737373]">22 April 2021</span>
          </p>
          <p className="flex items-center gap-[5px] text-[12px] ]">
            <IoImageSharp className="text-[#23A6F0] size-4" />{" "}
            <span className=" text-[#737373]">10 comments</span>
          </p>
        </div>
        <p className="flex items-center gap-2 font-[700] text-secondarytext-sm">
          Learn More{" "}
          <FaAngleRight className="text-[#23A6F0] font-[100] size-5" />
        </p>
      </div>
    </div>
  );
}
