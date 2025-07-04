import Image from "next/image";
import Icons from "../commonContent/Icons";
import CompanyLogos from "../companylogos/CompanyLogos";

export default function AboutBottom() {
  return (
    <>
      {/* conatiner  */}
      <div className="mx-auto lg:max-w-[1050px] md:max-w-[950px] h-auto md:h-[820px] flex flex-col items-center  md:py-0 py-[100px]">
        <main>
          {/* heading and text  */}
          <div className="flex flex-col items-center gap-4 ">
            <h2 className="font-[700] text-[36px] md:text-[40px] text-[#252B42]">
              Meet Our Team
            </h2>
            <p className="w-full md:w-[470px] font-[500] text-sm text-[#737373] text-center">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
        </main>
        {/* about items */}
        {/* item container  */}
        <div className="w-full lg:max-w-[1034px] md:max-w-[950px] px-10 xl:px-0 h-auto md:h-[383px] flex flex-wrap lg:flex-nowrap justify-center gap-6 md:flex-row mt-[100px]">
          {/* items-1  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/aboutSection/aboutPerson1.jpeg"
              alt="girl holding mobile"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
          {/* items-2  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/aboutSection/aboutPerson2.jpeg"
              alt="girl holding mobile"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
          {/* item-3  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/aboutSection/aboutPerson3.jpeg"
              alt="girl holding mobile"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
        </div>
      </div>

      {/* section-2: Companies  */}
      <section>
        {/* container  */}
        <div className="h-auto md:h-[480px] sm:my-10 md:mt-80 lg:my-0 ">
          <main className="mx-auto lg:max-w-[1050px] md:max-w-[950px] h-auto md:h-[480px] flex flex-col gap-[55px]">
            <div className="flex flex-col items-center gap-7">
              <h2 className="font-[700] text-[36px] text-center md:text-[40px] text-[#252B42]">
                Big Companies Are Here
              </h2>
              <p className="w-[80%] md:w-[470px] font-[500] text-sm text-[#737373] text-center">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
            {/* company logos  */}
            {/* <div className="max-w-[1050px] flex flex-wrap lg:flex-nowrap justify-between   items-center"> */}
              <CompanyLogos/>
            {/* </div> */}
          </main>
        </div>
      </section>
      {/* section 3: Grow Section */}

      {/* container  */}
      <div className="bg-[#2A7CC7] py-8 md:py-0 my-16">
        <main className="mx-auto w-full h-auto md:h-[638px] flex flex-col md:flex-row items-center md:justify-between gap-8 ">
          {/* text  */}
          <div className="w-full md:w-[40%] flex flex-col text-center md:text-start items-center md:items-start mx-7 gap-6 ">
            <h5 className="font-[700] text-white text-[16px]">WORK WITH US</h5>
            <h2 className="text-[40px] font-[700] text-white">
              Now Let&apos;s grow yours
            </h2>
            <h4 className=" text-white font-[500] text-sm">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </h4>

            <button className="w-[132px] min-h-[52px] font-[700] text-sm text-white border">
              Button
            </button>
          </div>
          {/* Image  */}
          <div className="relative ">
            <Image
              src="/Images/aboutSection/aboutLast.jpeg"
              alt="about image"
              width={500}
              height={500}
              className="object-cover w-full md:w-[590px] h-auto md:h-[640px]"
            />
          </div>
        </main>
      </div>
    </>
  );
}
