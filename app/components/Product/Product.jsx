"use client";
import { useState, useEffect } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

import Search from "../Search/Search";
import ProductList from "../All Product/ProductList";

export default function Product() {
  const [listStyle, setListStyle] = useState("Grid");

  // Grid or ListView handler
  const listStyleClick = (name) => {
    setListStyle(name);
  };

  return (
    <div className="w-full lg:w-[65%] min-h-[10%] flex flex-col px-3 py-5 gap-7">
      {/* title + alignment button */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">Our All Product</p>
        <div className="flex gap-5">
          <BsGrid3X3GapFill
            size={25}
            onClick={() => listStyleClick("Grid")}
            color={listStyle === "Grid" ? "blue" : " "}
          />
          <FaListUl
            size={25}
            onClick={() => listStyleClick("List")}
            color={listStyle === "List" ? "blue" : " "}
          />
        </div>
      </div>
      {/* Search Section */}
      <div className="flex justify-between items-center">
        <Search />
      </div>
      {/* product Section */}
      <div className="flex flex-col justify-between items-center">
        <ProductList listStyle={listStyle} />
      </div>
    </div>
  );
}
