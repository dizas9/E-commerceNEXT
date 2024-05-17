import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Image src={"/images/logo.svg"} alt="logo" width={35} height={30} />
      <p className="absolute left-3 font-semibold text-lg">
        <Link href={"/"}>E-commerce Site</Link>
      </p>{" "}
    </>
  );
}
