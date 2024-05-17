"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CartItem() {
  const [cartProduct, setCartProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    // Load cart items from localStorage on client side
    const cartItemData = localStorage.getItem("cartItem");
    if (cartItemData) {
      setCartProduct(JSON.parse(cartItemData));
    }
  }, []);

  //update State

  function UpdateCart(data) {
    setCartProduct(data);
  }

  // delete cart handler
  const deleteCartItem = (id) => {
    //create new array without 'id'
    const updateCart = cartProduct.filter((item) => item.id !== id);

    //delete existing storage
    localStorage.removeItem("cartItem");
    //update local storage
    localStorage.setItem("cartItem", JSON.stringify(updateCart));

    UpdateCart(updateCart);
  };

  //calculate total price
  const calculatePrice = () => {
    let price = 0;
    cartProduct.forEach((item) => {
      price += item.price;
    });

    setTotalPrice(price.toFixed(2));
  };

  useEffect(() => {
    calculatePrice();
  }, [cartProduct]);

  return (
    <>
      <div className="w-full  min-h-[10%] flex flex-col px-3 py-20 gap-7 items-center">
        <div className="border border-[#212529] rounded-md min-h-16 w-full lg:w-[90%] md:w-[50%] p-5 flex flex-col gap-3">
          <p className="w-full text-white bg-black text-center rounded-md p-1 text-sm lg:text-lg">
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
                <div className="flex flex-col  lg:justify-around w-[80%]">
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
            Total : ${totalPrice}
          </div>

          {/* agree terms & condition textBox */}
          <div className="w-full h-fit flex gap-2 items-baseline text-xs">
            <input type="checkbox" />
            <div className="text-xs text-[#503838b5] flex  flex-wrap gap-1">
              <p>I have read and agree to the </p>
              <p className="underline font-bold"> terms and conditions ,</p>
              <p className="underline font-bold">refund policy</p> and
              <p className="underline font-bold"> privacy policy</p>
            </div>
          </div>

          {/* checkout button */}
          <div className="w-full h-fit flex justify-end">
            {" "}
            <button className="text-white bg-black p-1  rounded-md text-sm lg:text-lg">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
