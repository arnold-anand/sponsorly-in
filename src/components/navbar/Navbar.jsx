"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-[1.4rem] flex items-center justify-between sticky top-0 bg-white lg:px-[224px]">
      <Link href={"/"}>
        <div className="flex items-center">
          <Image src="/assets/logo.svg" width={33} height={31.17} />
          <h1
            class="bg-gradient-to-r from-[#378BD8] to-[#2E1658] inline-block text-transparent bg-clip-text font-bold pl-[6px]
            text-xl lg:text-2xl"
          >
            Sponsorly
          </h1>
        </div>
      </Link>

      <div className="lg:hidden">
        <button onClick={() => setOpen(!open)}>
          <Menu width={30} height={30}></Menu>
        </button>
      </div>
      <div className="hidden text-[#575757] lg:block">
        <nav>
          <ul className="flex">
            <li>
              <Link href={"about-us"}>About us</Link>
            </li>
            <div className="w-[1px] bg-[#575757] h-[27px] mx-[30px]"></div>
            <li>
              <Link href={"colleges"}>For Colleges</Link>
            </li>
            <div className="w-[1px] bg-[#575757] h-[27px] mx-[30px]"></div>
            <li>
              <Link href={"businesses"}>For Businesses</Link>
            </li>
            <div className="w-[1px] bg-[#575757] h-[27px] mx-[30px]"></div>
            <li>
              <Link href={"creators"}>For Creators</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden lg:block">
        <button className="bg-gradient-to-r from-[#104DD2] to-[#08286C] text-white text-[20px] font-medium rounded-[10px] p-1">
            <div className="flex items-center">
                <div><img src="/assets/game-icons_diamonds.svg" alt="" /></div>
                <div className="px-2">Login</div>
            </div>
        </button>
      </div>
      <div
        className={`absolute z-[100] top-14 left-0 w-[60%] max-w-[200px] h-screen bg-white  border-r-[0.5px] translate-x-100 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col">
          <li onClick={() => setOpen(false)} className="py-5 px-8 mt-5">
            <Link href={"about-us"}>About us</Link>
          </li>
          <li onClick={() => setOpen(false)} className="py-5 px-8">
            <Link href={"colleges"}>For Colleges</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="py-5 px-8 -translate-x-100"
          >
            <Link href={"businesses"}>For Businesses</Link>
          </li>
          <li onClick={() => setOpen(false)} className="py-5 px-8">
            <Link href={"creators"}>For Creators</Link>
          </li>
          <li onClick={() => setOpen(false)} className="py-5 px-8">
            <Link href={"login"}>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
