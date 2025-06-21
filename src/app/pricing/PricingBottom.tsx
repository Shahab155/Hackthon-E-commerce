import { FaFacebookSquare } from "react-icons/fa";
import {
  FaAngleRight,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import Faqs from "./pricingFacqs";

export default function PricingBottom() {
  return (
    <>
      {/* FAQs  conatiner  */}
      <div className="mx-auto lg:max-w-[1056px] md:max-w-[850px] h-auto mt-28  px-4 lg:px-0 lg:my-0">
        <div className="lg:max-w-[1056px] md:max-w-[850px] h-auto lg:h-[210px] flex justify-center">
          <div className="w-[651px] h-auto md:h-[120px] flex flex-col items-center text-center gap-5">
            <h1 className="text-[40px] text-[#252B42] font-[700]">
              Pricing FAQs
            </h1>
            <p className="text-secondary text-xl text-[400] text-center">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics
            </p>
          </div>
        </div>
        {/* Questions Container  */}
        <div className="lg:max-w-[1056px] md:max-w-[850px] h-auto lg:h-[537px] flex flex-col gap-[30px] py-10 lg:py-0 ">
          {/* Question 1  */}
           <Faqs/>
          {/* Question 2  */}
           <Faqs/>
          {/* Question 3  */}
           <Faqs/>

        
          
        </div>
      </div>
      {/* last part of paricing page  */}
      <div className="mx-auto max-w-[1050px] h-auto md:h-[600px] py-[100px] flex justify-center ">
        <div className="w-full md:w-[607px] h-[282px] flex flex-col items-center text-center gap-[30px]">
          <h2 className="text-[#252B42] text-[36px] md:text-[40px] font-[700]">
            Start your 14 days free trial
          </h2>
          <p className="w-[90%] md:w-[411px] text-sm text-secondary font-[400]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="btnLg min-h-10">Try it free now</button>
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
