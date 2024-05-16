"use client";
import Image from "next/image";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [click, setClick] = useState(false);

  const menu = [
    { name: "Product", href: "/" },
    { name: "Cart", href: "/Cart" },
    { name: "Order History", href: "#" },
    { name: "Login", href: "#" },
  ];

  // click handler
  const handleClick = () => {
    setClick(!click);
    console.log("Button clicked");
  };
  return (
    <div className=" flex h-fit lg:px-10 px-5 md:px-10 py-3 bg-[#212529] text-[#F9F9F9]">
      <div className="lg:w-[60%] w-[80%] flex justify-between items-center ">
        {/* logo */}
        <div className="flex items-center relative lg:w-[30%] w-[100%] lg:ml-5">
          <Logo />
        </div>

        {/* Navbar */}
        <div className="md:hidden hidden lg:flex">
          <Navbar />
        </div>
      </div>
      <div className="lg:w-[30%]  hidden lg:flex justify-end items-center">
        <button className="uppercase text-sm font-semibold bg-[#525CEB] px-3 py-2 rounded-md">
          Login
        </button>
      </div>
      <div className=" w-[20%] flex justify-end lg:hidden">
        {!click ? (
          <Image
            src={"/images/Menu.svg"}
            width={30}
            alt="Menu"
            height={35}
            onClick={handleClick}
          />
        ) : (
          <Image
            src={"/images/cross.svg"}
            alt="cross"
            width={20}
            height={35}
            onClick={handleClick}
            color="white"
          />
        )}
      </div>

      {click && (
        <div
          className={`absolute z-50 bg-[#02020896] md:top-20 top-16 md:w-[30%] w-[25%] md:right-10 right-5 h-fit lg:hidden flex flex-col items-center`}
        >
          {menu.map((item, idx) => (
            <Link
              href={item.href}
              className="border-b w-full text-center"
              key={idx}
              onClick={() => setClick(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
