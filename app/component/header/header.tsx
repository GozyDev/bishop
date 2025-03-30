"use client";
import Quote from "@/public/Bimage/SVGs/bishoplogo.svg";
import Image from "next/image";
import {useState } from "react";
export default function Header() {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <>
      <header className="fixed w-full bg-white z-[999] px-11 shadow py-4">
        <div className="flex justify-between items-center">
          <Image
            src={Quote}
            alt="bishop-logo"
            className="w-[100px] md:w-[130px]"
          ></Image>
          <nav className="hidden lg:block">
            <ul className="flex gap-6.5 text-md font-medium">
              <li>Feature + </li>
              <li>Domains</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>Resources +</li>
            </ul>
          </nav>
          <div className="text-sm font-medium hidden  lg:flex">
            <button className="bg-gray-400/30 py-2 px-5 rounded">login</button>
            <button className="bg-amber-400/50 py-2 px-5 rounded">
              Get Started
            </button>
          </div>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setHidden(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
        </div>
        { (
          <div className={`fixed bg-white right-0 h-screen top-0 flex flex-col  items-center z-30 w-[250px] py-10 px-3 gap-5 transform  ${hidden ?'translate-x-[300px]':'translate-x-[0px]' } transition-transform ease-in`}>
            <nav className=" md:block w-full">
              <ul className="flex flex-col gap-5 justify-start text-left  text-lg font-semibold">
                <li>Feature + </li>
                <li>Domains</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Resources +</li>
              </ul>
            </nav>
            <div className="text-sm font-medium flex flex-col w-full gap-5">
              <button className="bg-gray-400/30 py-2 px-5 rounded">
                login
              </button>
              <button className="bg-amber-400/50 py-2 px-5 rounded">
                Get Started
              </button>
            </div>
            <div
              className="cursor-pointer absolute top-[20px] right-[10px]"
              onClick={() => setHidden(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </div>
          </div>
        )}

       {!hidden && <div className="fixed w-full h-screen left-0 bg-black/90  z-20 top-0 " onClick={()=> setHidden(true)}>

        </div>}
      </header>
    </>
  );
}
