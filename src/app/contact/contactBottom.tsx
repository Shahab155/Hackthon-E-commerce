import Image from 'next/image'
import React from 'react'

export default function ContactBottom() {
  return (
    <>
    
     <main className=" my-20 mx-auto  px-10  md:max-w-[950px] lg:max-w-[1050px] w-full h-auto lg:h-[814px] flex flex-col items-center justify-around ">
        {/* headings  */}
        <div className="flex flex-col items-center gap-[10px]">
          <h6 className="text-primary text-sm font-[700] ">
            VIST OUR OFFICE
          </h6>
          <h2 className="text-primary text-4xl font-[700] text-center w-full md:w-[531px]">
            We help small businesses with big ideas
          </h2>
        </div>
        {/* contact cards  */}
        {/* container  */}
        <div className="w-full max-w-[985px] h-auto lg:h-[400px] flex flex-col md:flex-row items-center justify-between gap-6 my-10 ">
          {/* card-1  */}
          <div className="w-[327px] h-[343px] flex flex-col items-center gap-5   ">
            <Image
              src="/Images/contactPhone.png"
              alt=""
              width={72}
              height={72}
              />
            <p className="flex flex-col text-center ">
              <span className="text-sm text-primary font-[700]">
                georgia.young@example.com
              </span>
              <span className="text-sm text-primary font-[700]">
                georgia.young@ple.com
              </span>
            </p>
            <h4 className="font-[700] text-primary">Get Support</h4>
            <button className="w-[189px] h-[54px] rounded-[37px] text-[#23A6F0] text-center text-sm border border-[#23A6F0]  hover:bg-[#23A6F0] font-[700] hover:text-white transition  ">
              Submit Request
            </button>
          </div>
          {/* card-2  */}
          <div className="w-[327px] h-[403px] flex flex-col items-center justify-center gap-5 bg-[#252B42]">
            <Image src="/Images/location.png" alt="" width={51} height={67} />
            <p className="flex flex-col text-center ">
              <span className="text-sm text-white font-[700]">
                georgia.young@example.com
              </span>
              <span className="text-sm text-white font-[700]">
                georgia.young@ple.com
              </span>
            </p>
            <h4 className="font-[700] text-white">Get Support</h4>
            <button className="w-[189px] h-[54px] rounded-[37px] text-[#23A6F0] text-center text-sm border border-[#23A6F0]  hover:bg-[#23A6F0] font-[700] hover:text-white">
              Submit Request
            </button>
          </div>
          {/* card-3  */}
          <div className="w-[327px] h-[343px] flex flex-col items-center gap-5 ">
            <Image src="/Images/contactEn.png" alt="" width={72} height={55} />
            <p className="flex flex-col text-center ">
              <span className="text-sm text-primary font-[700]">
                georgia.young@example.com
              </span>
              <span className="text-sm text-primary font-[700]">
                georgia.young@ple.com
              </span>
            </p>
            <h4 className="font-[700] text-primary">Get Support</h4>
            <button className="w-[189px] h-[54px] rounded-[37px] text-[#23A6F0] text-center text-sm  border border-[#23A6F0]    hover:bg-[#23A6F0] font-[700] hover:text-white">
              Submit Request
            </button>
          </div>
        </div>
      </main>
{/* 3rd section: Talk  */}

      {/* container  */}
      <div className="mx-auto  lg:max-w-[1050px] md:max-w-[850px] h-auto lg:h-[348px] flex flex-col items-center gap-4 mb-28">
        <Image
          src="/Images/arrow.png"
          alt="Curved Arrow"
          width={72}
          height={21}
          />
        <main className="max-w-[607px] h-[188px] flex flex-col items-center justify-between mt-5 ">
          <h5 className="font-[700] text-primary text-[16px]">
            WE CANT&#8217;S WAIT TO MEET YOU
          </h5>
          <h1 className="text-6xl font-[700] text-primary">
            Let&#8217;s Talk
          </h1>
          <button className="btnLg rounded-md">Try it free now</button>
        </main>
      </div>



          </>

  )
}
