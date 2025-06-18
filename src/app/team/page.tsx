import Link from "next/link";
import {
  FaAngleRight,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import TeamCard from "./teamCard";
import Navbar from "@/components/header/Navbar";

export default function Team() {
  return (
    <>
    <Navbar/>
      <div className="mx-auto max-w-[870px] h-auto md:h-[280px] py-[50px] flex justify-center">
        <div className="w-full md:w-[788px] h-[180px] flex flex-col items-center justify-between">
          <h5 className="text-secondary text-[16px] font-[700] text-center">
            WHAT WE DO
          </h5>
          <h1 className="text-primary text-[40px] text-center md:text-[58px] font-[700]">
            Innovation tailored for you
          </h1>
          <div className="flex  items-center gap-3 text-sm font-[700]">
            <Link href={"#"} className="text-primary">
              Home
            </Link>{" "}
            <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
            <Link href={"#"} className="text-[#BDBDBD]">
              Team
            </Link>
          </div>
        </div>
      </div>
      {/* Inovation Images  */}
      <div className=" md:mx-auto h-auto lg:h-[600px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-2 mx-4">
        {/* Image 1 */}
       <div className="h-[290px] rounded-xl  lg:h-[600px] w-full bg-[url('/Images/Team/team1.jpeg')] bg-start bg-cover lg:col-span-4 lg:row-span-2"></div>
       <div className="w-full   h-[290px] rounded-xl  bg-[url('/Images/Team/team2.jpeg')] bg-center bg-cover  "></div>
       <div className="w-full   h-[290px] rounded-xl  bg-[url('/Images/Team/team3.jpeg')] bg-center bg-cover  "></div>
       <div className="w-full   h-[290px] rounded-xl  bg-[url('/Images/Team/team4.jpeg')] bg-center bg-cover  "></div>
       <div className="w-full   h-[290px] rounded-xl  bg-[url('/Images/Team/team5.jpeg')] bg-center bg-cover  "></div>

      </div>
      {/* Team members  */}
     <div className="mx-2  my-28 py-10 md:mx-auto max-w-[1044px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  place-items-center">
       <TeamCard image="/Images/Team/member1.jpeg"/>
       <TeamCard image="/Images/Team/member2.jpeg"/>
       <TeamCard image="/Images/Team/member3.jpeg"/>
       <TeamCard image="/Images/Team/member4.jpeg"/>
       <TeamCard image="/Images/Team/member5.jpeg"/>
       <TeamCard image="/Images/Team/member6.jpeg"/>
     
     </div>
      {/* last part of Team page  */}
      <div className="mb-20 lg:mb-0 mx-auto max-w-[1050px] h-auto lg:h-[600px]   flex justify-center ">
        <div className="w-[607px] h-auto lg:h-[282px] flex flex-col items-center text-center gap-[30px]">
          <h2 className="text-primary text-[40px] font-[700]">
            Start your 14 days free trial
          </h2>
          <p className="w-[80%] md:w-[411px] text-sm text-secondary font-[400]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="btnLg">Try it free now</button>
          {/* icons  */}
          <div className="flex text-3xl gap-[34px]">
            <FaTwitter className="text-[#55ACEE]" />
            <FaFacebookSquare className="text-[#395185]" />
            <FaInstagram />
            <FaLinkedin className="text-[#0A66C2]" />
          </div>
        </div>
      </div>
    </>
  );
}
