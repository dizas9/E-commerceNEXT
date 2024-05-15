import Image from "next/image";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <div className=" flex h-fit lg:px-10 px-5 md:px-10 py-3 bg-[#212529] text-[#F9F9F9] ">
      <div className="lg:w-[60%] w-[80%] flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center relative lg:w-[30%] w-[100%] ">
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
        <Image src={"/images/Menu.svg"} width={30} height={35} />
      </div>
    </div>
  );
}
