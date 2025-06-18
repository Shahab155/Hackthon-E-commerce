export type cardTypes = {
     style : {
        backgroundColor:string
     }
}

export type productCardType = {
   image:string,
   heading:string,
   subHeading:string,
   oldPrice: string,
   newPrice: string,
   circles: boolean
}


export type pricingCardType = {
     heading:string,
     price:string,
     className?: string
     
}