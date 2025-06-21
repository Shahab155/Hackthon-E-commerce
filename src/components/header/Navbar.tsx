"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter()

  return (
    <>
      {/*  Navbar  */}
      <nav className="bg-[#FFF] shadow-sm shadow-secondary">
        <div className="mx-auto max-w-[1330px] h-[90px] hidden md:flex justify-evenly items-center">
          <div>
            <h1 className="text-2xl text-primary font-[700]">Bandage</h1>
          </div>
          <div className="max-w-[815px] h-[58px] flex justify-between items-center ">
            <ul className="w-[300px] hidden  md:flex items-center gap-[20px] font-[700] text-[#737373] text-sm">
              <li className="hover:border-b-2 border-black hover:text-black">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:border-b-2 border-black hover:text-black">
                <Link href="/products">Product</Link>
              </li>
              <li className="hover:border-b-2 border-black hover:text-black">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="hover:border-b-2 border-black hover:text-black">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="w-[300px] flex gap-[45px] items-center">
              <Link href={"/login"}>
              <button  className="text-[#23A6F0] text-sm font-[700]">
                Login
              </button>
              </Link>
              
              <button onClick={()=>{router.push("/signup")}} className="btnLg w-[230px] rounded-md flex justify-center items-center  gap-[15px]">
                Become a member{" "}
                <i className="bi bi-arrow-right-short text-white font-bold text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}