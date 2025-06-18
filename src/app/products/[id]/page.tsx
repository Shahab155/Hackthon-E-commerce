import { productsData } from "@/utils";
import Image from "next/image";

import React from 'react'
import ProductHeader from "../productHeader";
import Circles from "@/components/commonContent/Circles";
import Icons from "@/components/commonContent/Icons";

export default function ProductDetails({params}:{params:{id:string}}) {

    const getProductDetails = productsData.filter(item=> params.id === item.id)
    console.log(`Fetched data: ${getProductDetails}`)
  return (
      <>
      
          <ProductHeader/>
    
     
   {  getProductDetails &&   getProductDetails.map((item)=>{
       return (
             
            <div key={item.id} className="flex flex-col lg:flex-row items-center h-[500px] border-4 border-black lg:items-start justify-between max-w-[1090px] mx-auto  my-12">
                <div className="rounded-lg w-[90%] lg:w-[50%] h-full relative">
                    <Image src={item.image} alt="product image" height={100} width={400} className="md:w-[100%] object-cover  h-[500px]"/>
                </div>
              <div className=" lg:w-[50%] flex flex-col  gap-8 p-8">
                <h3 className="text-3xl text-primary font-[700] ">{item.heading}</h3>
                <h4 className=" font-[700]">Availablity: <span className="text-[#23A6F0]">{item.availabilty}  </span></h4>
                <p>{item.description}</p>
                <div className="flex gap-2">
                 <span className="font-[700]">Price: </span>  <span className="font-[500]"> {item.price} </span>

                </div>
               <div>{item.circles && <Circles/> }  </div> 
               <div className="w-full border-2 border-gray-500 rounded-md"> </div>
                <div className="flex items-center gap-4">
                <button className="btnLg ">Add to Card</button>
                <Icons/>
                </div>
              </div>
            </div>
            
         )
        })
    }
   
    </>
  )
}
