import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import ProductHeader from "./productHeader";
import CompanyLogos from "@/components/companylogos/CompanyLogos";
import { productsData } from "@/utils";
import Card from "@/components/cards/Card";

export default function Product() {
  return (
    <>
    <ProductHeader/>
    
      <div className="mx-auto h-auto md:h-[92px] flex justify-center items-center  mb-20">
        {/* container */}
        <div className="max-w-[1036px] w-full h-[44px] flex flex-col lg:flex-row gap-8 justify-between items-center px-10 lg:px-5">
          <h3 className="text-2xl text-[#252B42] font-[700] ">Shop</h3>
          <div className="flex items-center gap-3 text-sm font-[700]">
            <Link href={"#"} className="text-[#252B42]">
              Home
            </Link>{" "}
            <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
            <Link href={"#"} className="text-[#BDBDBD]">
              Shop
            </Link>
          </div>
        </div>
      </div>
      {/* clothes container  */}
      <div className="mx-auto max-w-[1030px]  h-auto my-10">
        {/* row */}
        <div className="max-w-[1088px]  gap-4  grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* cloth1 */}
          <div className="w-[95%]  h-[380px] md:h-[223px] bg-[url('/Images/clothes/cloth1.png')]  bg-cover bg-center flex flex-col justify-center items-center">
            <h5 className="font-[700] text-[16px] text-white">Cloths</h5>
            <p className="text-sm text-white font-[400]">5 Items</p>
          </div>
          {/* cloth2 */}
          <div className="w-[95%]  h-[380px] md:h-[223px] bg-[url('/Images/clothes/cloth2.png')] bg-cover bg-center flex flex-col justify-center items-center">
            <h5 className="font-[700] text-[16px] text-white">Cloths</h5>
            <p className="text-sm text-white font-[400]">5 Items</p>
          </div>{" "}
          {/* cloth3 */}
          <div className="w-[95%]  h-[380px] md:h-[223px] bg-[url('/Images/clothes/cloth3.png')] bg-cover bg-center flex flex-col justify-center items-center">
            <h5 className="font-[700] text-[16px] text-white">Cloths</h5>
            <p className="text-sm text-white font-[400]">5 Items</p>
          </div>{" "}
          {/* cloth4 */}
          <div className="w-[95%]  h-[380px] md:h-[223px] bg-[url('/Images/clothes/cloth4.png')] bg-cover bg-center flex flex-col justify-center items-center">
            <h5 className="font-[700] text-[16px] text-white">Cloths</h5>
            <p className="text-sm text-white font-[400]">5 Items</p>
          </div>{" "}
          {/* cloth5 */}
          <div className="w-[95%]  h-[380px] md:h-[223px] bg-[url('/Images/clothes/cloth5.png')] bg-cover bg-center flex flex-col justify-center items-center">
            <h5 className="font-[700] text-[16px] text-white">Cloths</h5>
            <p className="text-sm text-white font-[400]">5 Items</p>
          </div>
        </div>
      </div>
      {/* showing results  */}
      <div className="mx-auto  max-w-[1030px] w-full  h-auto lg:h-[98px] my-20 lg:my-0">
        {/* container  */}
        <div className="px-10 lg:px-5 w-full h-auto lg:h-[50px] flex flex-wrap justify-between items-center  lg:flex-nowrap text-sm font-[700] text-[#737373] gap-3">
          <h6>Showing all 12 results</h6>
          <div className="w-[177px] h-[46px] flex items-center justify-between">
            <p>Views:</p>
            <i className="bi bi-microsoft"></i>

            <Image
              src="/Images/iconBar.png"
              alt="menu"
              width={16}
              height={16}
            />
          </div>
          <div className="w-full lg:w-[252px] h-[50px] flex items-center justify-between">
            <p className="flex items-center gap-2 font-[400]">
              Popularity <FaAngleRight className="text-[#BDBDBD] rotate-90" />{" "}
            </p>
            <button className="btn w-[94px] h-[50px] bg-[#23A6F0]">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* top companies  */}
      {/* company logos  */}
       <CompanyLogos/>
       {/* product Cardsq */}
      <div className="my-20 max-w-[1030px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 
      place-items-center space-y-6 ">
       {/* conatiner  */}
         {
           productsData.map((item)=>{
             return (
               <div key={item.id}>
                <Link href={`/products/${item.id}`}>
                
                 <Card image={item.image} heading={item.heading} subHeading={item.subHeading} oldPrice={item.oldPrice} newPrice={item.newPrice} circles={item.circles}/>
                </Link>
               </div>
             )
           })
         }
      </div>
    </>
  );
}
