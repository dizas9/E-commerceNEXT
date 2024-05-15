"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <ul className="flex gap-7 text-xs uppercase font-semibold">
        <Link
          href={"/"}
          className={` ${pathname === "/" ? "relative" : ""}`}
        >
          <span
            className={`${
              pathname === "/"
                ? "absolute w-5 h-0.5 top-5 bg-slate-50"
                : "absolute w-5 h-0.5 top-5 bg-inherit"
            }`}
          ></span>
          Products
        </Link>
        <Link
          href={"/Cart"}
          className={` ${pathname === "/Cart" ? "relative" : ""}`}
        >
          <span
            className={`${
              pathname === "/Cart"
                ? "absolute w-5 h-0.5 top-5 bg-slate-50"
                : "absolute w-5 h-0.5 top-5 bg-inherit"
            }`}
          ></span>
          Cart
        </Link>
      </ul>
    </>
  );
}
