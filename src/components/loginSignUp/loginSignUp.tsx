"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LoginSignUp() {
    const route = usePathname()
  return (
    <div className="w-screen h-screen flex justify-center items-center">

    <div className="flex flex-col justify-center items-center gap-3 max-w-[340px]   px-3 py-8 shadow-sm shadow-primary rounded-lg font-mono bg-primary text-white">
      <h1 className="text-3xl font-[700] text-center">
        {route === "/login" ? "Login" : "SignUp"}
      </h1>
      <div className="flex flex-col gap-3">
        <label htmlFor="name" ></label>
      <span className="font-[600]">
        {route === "/login" ? "Name:": "First Name"} 
        </span><input type="text" name="name" placeholder="Enter first name..."  className="w-[95%] 
        h-[40px] rounded-lg px-2'
        "/>
     
      {
        route === "/signup" && <div>
            <label htmlFor="lastname"></label>
           <span className="font-[700]">  LastName:  </span> <input className="w-[95%] h-[40px] rounded-lg px-2 " placeholder='Enter last name...' type="text" name="lastname" />
        </div>
      }
      <label htmlFor="email"></label>

      <span className="font-[700]">Email:</span> <input type="text" className="w-[95%]  h-[40px] rounded-lg px-2" name="email" placeholder='Enter your email...' />
      <button className="btnLg mx-auto mt-4">
            {route === "/login" ? "Login" : "SignUp"}
      </button>
        {
            route === "/login" && <p>Already have acount? <Link href="/signup"  className="text-blue-500 underline
            ">Singup</Link> </p> 
        }

      </div>
    </div>
        </div>
  )
}
