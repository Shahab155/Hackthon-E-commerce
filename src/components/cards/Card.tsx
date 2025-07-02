import { productCardType } from "@/types/customType";
import Image from "next/image";
import Circles from "../commonContent/Circles";
export default function Card(props: productCardType) {
  return (
    <div className="w-full md:w-[350px] lg:w-full  h-[600px] border border-primary  relative z-[100] rounded-xl">
     
      <div className="h-[410px] w-full relative overflow-hidden">
         
        <Image
          src={props.image}
          alt={"Df"}
          width={300}
          height={410}
          className="h-[410px] rounded-xl md:w-full lg:w-[320px] object-cover object-top transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="text-center h-[190px] w-[100%] flex flex-col items-center  justify-center py-10 gap-4 shadow-md hover:shadow-primary hover:border-none rounded-xl overflow-hidden">
        <h3 className="text-xl text-primary font-[700]">{props.heading}</h3>
        <h4 className="text-xl text-secondary font-[700]">
          {props.subHeading}
        </h4>
        <div className="flex gap-2 text-xl  ">
          <span className="text-[#BDBDBD] font-[700]">{props.oldPrice}</span>
          <span className="text-[#23856D] font-[700]">{props.newPrice}</span>
        </div>
        {props.circles && <Circles />}
      </div>
    </div>
  );
}
