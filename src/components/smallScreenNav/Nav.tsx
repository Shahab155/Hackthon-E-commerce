"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <header className="block md:hidden ">
        <div className="h-[85px]  flex items-center justify-between px-5">
          <h1 className="text-2xl text-primary font-[700]">
            {" "}
            <Link href={"/"}>Bandage </Link>
          </h1>

          <div className="flex gap-5 text-2xl font-[700] text-secondary">
            <i className="bi bi-search"></i>
            <Link href={"/product1"}>
              <i className="bi bi-cart3"></i>
            </Link>
            <i
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              className="bi bi-list"
            ></i>
          </div>
        </div>
        {isVisible && (
          <div className="h-[60vh] w-full flex-col ">
            <ul className="mt-10 flex flex-col text-center gap-4">
              <li className="text-[20px] font-[400] text-secondary hover:text-primary hover:underline">
                <Link
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                  href={"/"}
                >
                  Home{" "}
                </Link>{" "}
              </li>
              <li className="text-[20px] font-[400] text-secondary hover:text-primary hover:underline">
                <Link
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                  href={"/about"}
                >
                  {" "}
                  About{" "}
                </Link>
              </li>
              <li className="text-[20px] font-[400] text-secondary hover:text-primary hover:underline">
                <Link
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                  href={"/products"}
                >
                  Products
                </Link>
              </li>
              <li className="text-[20px] font-[400] text-secondary hover:text-primary hover:underline">
                <Link
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                  href={"/contact"}
                >
                  {" "}
                  Contact{" "}
                </Link>
              </li>
               <li className="text-[20px] font-[400] text-secondary hover:text-primary hover:underline">
                <Link
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                  href={"/pricing"}
                >
                  {" "}
                  Pricing{" "}
                </Link>
              </li>
               <li className="text-[20px] font-[400] text-secondary hover:text-primary hover:underline">
                <Link
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                  href={"/team"}
                >
                  {" "}
                  Team{" "}
                </Link>
              </li>
             
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
