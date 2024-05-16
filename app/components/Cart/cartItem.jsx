"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CartItem() {
  const [cartProduct, setCartProduct] = useState(() => {
    const cartItemData = localStorage.getItem("cartItem");
    return cartItemData ? JSON.parse(cartItemData) : [];
  });

  console.log("Item, Item", cartProduct);
  useEffect(() => {
    const updateCartFromLocalStorage = () => {
      const cartItemData = localStorage.getItem("cartItem");
      setCartProduct(cartItemData ? JSON.parse(cartItemData) : []);
    };
    window.addEventListener("storage", updateCartFromLocalStorage);

    return () => {
      window.removeEventListener("storage", updateCartFromLocalStorage);
    };
  }, []);

  //update State

  function UpdateCart(data){
    setCartProduct(data);
  };

  // delete cart handler
  const deleteCartItem = (id) => {
    //create new array without 'id'
    const updateCart = cartProduct.filter((item) => item.id !== id);

    //update local storage
    localStorage.setItem("cartItem", JSON.stringify(updateCart));

    UpdateCart(updateCart);
  };

  return (
    <>
      <div className="w-full  min-h-[10%] flex flex-col px-3 py-5 gap-7 items-center">
        <div className="border border-[#212529] rounded-md min-h-16 w-full lg:w-[90%] md:w-[50%] p-5 flex flex-col gap-3">
          <p className="w-full text-white bg-black text-center rounded-lg p-1">
            Selected Product
          </p>

          {/* product List */}
          {cartProduct &&
            cartProduct.map((item) => (
              <div
                className="w-full min-h-10 border bg-[#F7F8F8] rounded-md border-[#D4D5D9] flex "
                key={item.id}
              >
                {/* image */}
                <div className="w-1/2 h-28 lg:h-36 relative">
                  <Image
                    src={item.image}
                    alt="Product"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                {/* details */}
                <div className="flex flex-col  lg:justify-around">
                  <p className="">{item.title.substring(0, 20)}...</p>

                  {/* rating + review */}
                  <div className="flex flex-col">
                    <span className="">
                      <Image
                        src={"/images/star.svg"}
                        alt="Start"
                        width={100}
                        height={60}
                      />
                    </span>
                    <span className="text-[#ADB0B7] text-sm">(121 Review)</span>
                  </div>

                  {/* price */}
                  <p className="text-[#F2415A] lg:text-xl text-lg">
                    ${item.price}
                  </p>
                </div>

                {/* delete cart item */}

                <Image
                  src={"/images/delete.svg"}
                  alt="delete"
                  width={30}
                  height={30}
                  className="pr-2"
                  onClick={() => deleteCartItem(item.id)}
                />
              </div>
            ))}

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
