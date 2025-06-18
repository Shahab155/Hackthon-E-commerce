import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import PricingBottom from "./PricingBottom";
import Navbar from "@/components/header/Navbar";
import CompanyLogos from "@/components/companylogos/CompanyLogos";
import PricingCard from "./pricingCard";


export default function Pricing() {
  return (
    <>
    <Navbar/>
      <div className="mx-auto h-[280px] flex justify-center items-center">
        {/* conatiner  */}
        <div className=" h-[180px] flex flex-col items-center gap-4 ">
          <h5 className="text-secondary text-[16px] text-center font-[700]">
            Pricing
          </h5>
          <h1 className="text-[40px] md:text-[58px] font-[700] text-primary text-center">
            Simple Pricing
          </h1>
          <div className="flex items-center gap-3 text-sm font-[700]">
            <Link href={"#"} className="text-primary">
              Home
            </Link>{" "}
            <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
            <Link href={"#"} className="text-[#BDBDBD]">
              Shop
            </Link>
          </div>
        </div>
      </div>
      {/* conatiner  */}
      <div className="mx-auto px-2 lg:max-w-[1050px] md:max-w-[900px] h-auto lg:h-[1168px] py-[112px] flex flex-col items-center gap-20 md:gap-12">
        {/* heading and text  */}
        <div className="w-full md:w-[625px] h-[100px] flex flex-col items-center gap-[10px] ">
          <h2 className="text-[40px] font-[700] text-primary">Pricing</h2>
          <p className="w-[90%] md:w-[470px] text-secondary text-sm text-center font-[400]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        {/* Pricing cards  */}
        <div className="w-full md:max-w-[1044px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
         <PricingCard heading="FREE" price="0" className="primary" />
         <PricingCard heading="STANDARD" price="10.9" className="third bg-primary text-white" />
         <PricingCard heading="FREE" price="99" className="primary"/>

        </div>
      </div>
      {/* 4rth part of sample pricing  */}
      <div className="mx-auto max-w-[1050px] h-auto lg:h-[365px] flex flex-col gap-10 ">
        <h5 className="text-xl font-[700] text-primary text-center">
          Trusted By Over 4000 Big Companies
        </h5>
        {/* company logos  */}
        {/* company logos  */}
      <CompanyLogos/>
      </div>
      <PricingBottom />
    </>
  );
}
