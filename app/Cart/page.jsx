import Link from "next/link";

export default function Cart() {
  return (
    <>
      <div className="w-full border min-h-[10%] flex flex-col px-3 py-5 gap-7 items-center">
        <div className="border border-[#212529] rounded-md min-h-16 w-full lg:w-[90%] p-5 flex flex-col gap-3">
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
            <p className="text-sm text-[#503838b5] flex gap-1">
              I have read and agree to the
              <span className="underline font-semibold">
                terms and conditions,
              </span>
              <span className="underline font-semibold">refund policy</span>
              and 
              <span className="underline font-semibold">privacy policy</span>
            </p>
          </div>

          {/* checkout button */}
          <div className="w-full h-fit flex justify-end">
            {" "}
            <button className="text-white bg-black p-1  rounded-md">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
