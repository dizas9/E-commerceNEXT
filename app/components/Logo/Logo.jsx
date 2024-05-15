import Image from "next/image";

export default function Logo() {
  return (
    <>
      <>
        <Image src={"/images/logo.svg"} width={35} height={30} />
        <p className="absolute left-3 font-semibold text-lg">E-commerce Site</p>
      </>
    </>
  );
}
