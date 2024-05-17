"use client";
import { useEffect, useState } from "react";
import CartItem from "../components/Cart/cartItem";

export default function Cart() {
  const [width, setWidth] = useState("70%");
  const [opacity, setOpacity] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Update device width when resized
  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // deley for starting transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth("100%");
      setOpacity(1);
    }, 100);

    //clear timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: width,
        opacity: opacity,
        transition:
          deviceWidth > 850
            ? "width 0.5s ease-out , opacity 0.3s ease-out"
            : " ",
        float: "right",
        padding: "2rem",
      }}
    >
      <CartItem />
    </div>
  );
}
