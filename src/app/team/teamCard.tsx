import Icons from '@/components/commonContent/Icons'
import Image from 'next/image'
import React from 'react'



export default function TeamCard({image}:{image:string}) {
  return (
    <div className="w-full h-[450px] sm:w-[90%] md:w-[90%] lg:w-[320px]">
     <div className='relative h-[300px]'>
            <Image
                  src={image}
                  alt="girl"
                  width={100}
                  height={100}
                  className='object-contain h-full w-full '
                 />
                </div>
                <div className="flex flex-col items-center gap-3 h-[150px]">
                  <h5 className="font-[700] text-primary text-[16px]">
                    Username{" "}
                  </h5>
                  <h6 className="font-[700] text-secondary text-sm">Profession</h6>
                  <Icons />
                </div>
              </div>
  )
}
