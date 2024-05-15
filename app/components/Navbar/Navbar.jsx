"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex gap-7 text-xs uppercase font-semibold">
        <Link href={"/"} className={` ${pathname === "/" ? "relative " : ""}`}>
          {pathname === "/" && (
            <span className="absolute w-5 h-0.5 top-5 bg-slate-50"></span>
          )}
          Products
        </Link>
        <Link
          href={"/Cart"}
          className={` ${pathname === "/Cart" ? "relative" : ""}`}
        >
           {pathname === "/Cart" && (
            <span className="absolute w-5 h-0.5 top-5 bg-slate-50"></span>
          )}
          Cart
        </Link>
      </nav>
    </>
  );
}
