import Circle from './Circle'
import { pricingCardType } from '@/types/customType'

export default function PricingCard(props:pricingCardType) {
  return (
    <>
    
        {/* card 1  */}
                 <div className={`w-full lg:w-[327px] h-[664px] px-[40px] py-[50px] flex flex-col gap-[35px] items-center border border-[#23A6F0] rounded-xl  transition ${props.className}`}>
                   {/* div 1. */}
                   <div className="flex flex-col items-center gap-[35px] ">
                     <h3 className={`text-2xl font-[700] ${props.className} text-center`}>
                       {props.heading}
                     </h3>
                     <p className="w-[160px] text-secondary font-[700] text-center">
                       Optimized accross all apps
                     </p>
                     <div className="text-[#23A6F0] font-[700] w-[114px] flex  items-center gap-[10px]">
                       <h2 className="text-[40px]">{props.price}</h2>
                       <p className="flex flex-col ">
                         $<span className="text-[12px]">Per Month</span>{" "}
                       </p>
                     </div>
                   </div>
                   {/* div 2 */}
                   <div className="w-[220px] sm:w-[247px] h-[236px] flex flex-col gap-[15px] ">
                     {/* i  */}
                     <div className="flex gap-[10px] items-center">
                       <Circle style={{ backgroundColor: "#2DC071" }} />
                       <h6 className={`${props.className} text-sm font-[700]`}>
                         Unlimited product updates
                       </h6>
                     </div>
                     {/* ii  */}
                     <div className="flex gap-[10px] items-center">
                       <Circle style={{ backgroundColor: "#2DC071" }} />
                       <h6 className={`${props.className} text-sm font-[700]`}>
                         Unlimited product updates
                       </h6>
                     </div>
                     {/* iii  */}
                     <div className="flex gap-[10px] items-center">
                       <Circle style={{ backgroundColor: "#2DC071" }} />
                       <h6 className={`${props.className} text-sm font-[700]`}>
                         Unlimited product updates
                       </h6>
                     </div>
                     {/* iv  */}
                     <div className="flex gap-[10px] items-center">
                       <Circle style={{ backgroundColor: "#BDBDBD" }} />
                       <h6 className={`${props.className} text-sm font-[700]`}>
                         1GB Cloud Storage
                       </h6>
                     </div>
                     {/* v  */}
                     <div className="flex gap-[10px] items-center">
                       <Circle style={{ backgroundColor: "#BDBDBD" }} />
                       <h6 className={`${props.className} text-sm font-[700]`}>
                         Email and community support
                       </h6>
                     </div>
                   </div>
                   {/* div 3 button  */}
                   <div className={`max-w-[246px] sm:w-[246px] h-[52px] sm:pl-[70px] bg-${props.className} px-6  py-4 text-white text-[12px] sm:text-sm font-[700] rounded-xl`}>
                     Try For Free
                   </div>
                 </div>
    </>
)
}
