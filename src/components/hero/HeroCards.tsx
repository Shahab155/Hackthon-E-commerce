import Card from "../cards/Card";
import Link from "next/link";

const heroCards = [
  {
  id:4,
  image: "/Images/products/product4.jpeg",
  heading: "English Department",
  subHeading: "Graphic Design",
  oldPrice: "10$",
  newPrice:"20$",
  circles:true
    },
     {
    id:5, 
  image: "/Images/products/product5.jpeg",
  heading: "English Department",
  subHeading: "Graphic Design",
  oldPrice: "10$",
  newPrice:"20$",
  circles:true
    },
     {
      id:6,
  image: "/Images/products/product6.jpeg",
  heading: "English Department",
  subHeading: "Graphic Design",
  oldPrice: "10$",
  newPrice:"20$",
  circles:true
    },
     {
   id:7,   
  image: "/Images/products/product7.jpeg",
  heading: "English Department",
  subHeading: "Graphic Design",
  oldPrice: "10$",
  newPrice:"20$",
  circles:true
    },
     {
  id: 8,
  image: "/Images/products/product8.jpeg",
  heading: "English Department",
  subHeading: "Graphic Design",
  oldPrice: "10$",
  newPrice:"20$",
  circles:true
    },
     {
   id:9 ,  
  image: "/Images/products/product9.jpeg",
  heading: "English Department",
  subHeading: "Graphic Design",
  oldPrice: "10$",
  newPrice:"20$",
  circles:true
    },
     {
  id:10,    
  image: "/Images/products/product10.jpeg",
  heading: "English Department",
  subHeading: "Graphic Design",
  oldPrice: "10$",
  newPrice:"20$",
  circles:true
    },
     {
  id:11,    
  image: "/Images/products/product11.jpeg",
  heading: "English Department",
  subHeading: "Graphic Design",
  oldPrice: "10$",
  newPrice:"20$",
  circles:true
    },
]

export default function HeroCards() {
  return (
    <>
      {/* container  */}
      <div className="mx-auto my-12  max-w-[1124px] flex flex-col items-center ">
        {/* heading and para  */}

        <div className="md:w-full flex flex-col items-center text-center gap-4 mt-8 ">
          <h4 className="text-xl text-secondary font-[400]">
            Featured Products
          </h4>
          <h3 className="text-2xl text-primary font-[700]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-secondary text-sm ">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* cards section */}

        {/* cards-container-1  */}
      
        <div className="gap-4 my-16 max-w-[1050px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 
      place-items-center space-y-4">

    {
      heroCards .map((item)=>{
        return (
          <div data-aos="fade-down" key={item.id}>
            <Link href={`/products/${item.id}`}>
            <Card image={item.image} heading={item.heading} subHeading={item.subHeading} oldPrice={item.oldPrice} newPrice={item.newPrice} circles={item.circles}/>
              
              </Link>
          </div>
        )
      })
    }
   </div>
        
      </div>
    </>
  );
}
