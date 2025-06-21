import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

export default function Faqs() {
  return (
    <div className=" lg:max-w-[1056px] md:max-w-[850px] h-auto md:h-[159px] flex flex-col md:flex-row md:items-center ">
               {/* left  */}
               <div className="w-full md:w-[45%] h-auto md:h-[159px] flex gap-5 p-6 ">
                 <FaAngleRight className="text-[#23A6F0] size-6 hidden md:flex" />
                 <div className="flex flex-col gap-[5px]">
                   <h5 className="text-[#252B42] font-[700] text-[16px]">
                   Work better together
                   </h5>
                   <p className="text-sm text-[#737373] font-[400]">
                     Met minim Mollie non desert Alamo est sit cliquey dolor do met
                     sent. RELIT official consequent door ENIM RELIT Mollie.
                     Excitation venial consequent sent nostrum met.{" "}
                   </p>
                 </div>
               </div>
               {/* right  */}
               <div className="w-full md:w-[50%] h-auto md:h-[139px] ">
                 <div className="flex gap-5 p-6">
                 <FaAngleRight className="text-[#23A6F0] size-6 hidden md:flex" />
                  
                   <div className="flex flex-col gap-[5px]">
                     <h5 className="text-[#252B42] font-[700] text-[16px]">
                     OpenType features and 
                     Variable fonts
                     </h5>
                     <p className="text-sm text-[#737373] font-[400]">
                       Met minim Mollie non desert Alamo est sit cliquey dolor do
                       met sent. RELIT official consequent door ENIM RELIT Mollie.
                       Excitation venial consequent sent nostrum met.{" "}
                     </p>
                   </div>
                 </div>
               </div>
             </div>
  )
}
