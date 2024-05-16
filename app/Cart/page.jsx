import Link from "next/link";

export default function Cart() {
  return (
    <>
      <div className="w-full border min-h-[10%] flex flex-col px-3 py-5 gap-7 items-center">
        <div className="border border-[#212529] rounded-md min-h-16 w-full lg:w-2/3 p-5 flex flex-col gap-3">
          <p className="w-full text-white bg-black text-center rounded-lg">
            Selected Product
          </p>

          {/* product List */}
          <div className="w-full min-h-10 border bg-[#F7F8F8] rounded-md border-[#D4D5D9] flex"></div>

          {/* total cost */}
          <div className="w-full h-fit text-right font-semibold">
            Total : $18.89
          </div>

          {/* agree terms & condition textBox */}
          <div className="w-full h-fit flex gap-2 items-baseline">
            <input type="checkbox" />
            <p className="text-sm text-[#503838b5]">
              I've read and agree to the  
              <Link className="underline font-semibold" href={"#"}>
                terms and conditions
              </Link>
              , 
              <Link className="underline font-semibold" href={"#"}>
                refund policy
              </Link>
                & 
              <Link className="underline font-semibold" href={"#"}>
                privacy policy
              </Link>
            </p>
          </div>

          {/* checkout button */}
          <div className="w-full h-fit flex justify-end">
            {" "}
            <button className="text-white bg-black p-1 text-sm lg:text-lg rounded-md">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
