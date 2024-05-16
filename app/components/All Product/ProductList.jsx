"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductSkeleton from "../Skeleton/ProductSkeleton";

export default function ProductList({ listStyle }) {
  const [product, setProduct] = useState([]);
  const [errorMsg, setErrMsg] = useState();
const [cartItem, setCartItem] = useState(() => {
  const cartItemData = localStorage.getItem("cartItem");
  return cartItemData ? JSON.parse(cartItemData) : [];
});
  const [deviceWidth, setDeviceWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [currentPage, setCurrentPage] = useState(0);

  //fetch froduct in client side
  useEffect(() => {
    const fetchItems = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          if (res.status === 200) {
            setProduct(res.data);
          }
        })
        .catch((error) => {
          setErrMsg(error.message);
        });
    };

    fetchItems();
  }, []);

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

  //   pagination section
  const handleClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  let itemsPerPage;

  //determine item per page
  if (deviceWidth <= 820 && listStyle === "Grid") {
    itemsPerPage = 4;
  } else if (deviceWidth <= 820 && listStyle === "List") {
    itemsPerPage = 5;
  } else if (deviceWidth <= 1024 && listStyle === "Grid") {
    itemsPerPage = 6;
  } else if (deviceWidth <= 1024 && listStyle === "List") {
    itemsPerPage = 5;
  } else if (deviceWidth > 1024 && listStyle === "Grid") {
    itemsPerPage = 6;
  } else if (deviceWidth > 1024 && listStyle === "List") {
    itemsPerPage = 5;
  }
  const offset = currentPage * itemsPerPage;
  const currentPageItems = product.slice(offset, offset + itemsPerPage);

  /****
   * Add to Cart handler
   */

  const addToCartHandler = (data) => {
    setCartItem((prev) => {
      const updatedCart = [...prev, data];
      const uniqueItem = [...new Set(updatedCart)];
      localStorage.setItem("cartItem", JSON.stringify(uniqueItem));
      window.dispatchEvent(new Event("storage"));
      return updatedCart;
      
    });
  };

  return (
    <>
      {product.length === 0 && !errorMsg && (
        <ProductSkeleton listStyle={listStyle} />
      )}
      {product.length > 0 && (
        <div
          className={` h-fit flex flex-wrap justify-center  ${
            listStyle === "Grid" ? "flex-row" : "flex-col"
          } ${listStyle === "Grid" ? "w-full" : "w-full"} gap-2`}
        >
          {/* Product Card List */}
          {currentPageItems &&
            currentPageItems.map((item, idx) => (
              <div
                className="w-[48%]  bg-[#F7F8F8] border border-[#D4D5D9] rounded-md flex"
                style={{
                  flexDirection: listStyle === "Grid" ? "row" : "column",
                  width:
                    listStyle === "Grid"
                      ? deviceWidth >= 1280
                        ? "30%"
                        : "48%"
                      : "100%",
                  height:
                    listStyle === "List" && deviceWidth <= 600 ? "10rem" : "",
                  transition: idx === 0 ? "width 0.3s ease-in" : " ",
                }}
                key={idx}
              >
                <div
                  className={`w-full  ${
                    listStyle === "Grid" ? "h-64" : "lg:md:h-[8rem] h-36"
                  } flex ${listStyle === "Grid" ? "flex-col" : "flex-row"} `}
                >
                  {/* image */}
                  <div
                    className={`${
                      listStyle === "Grid"
                        ? "md:h-1/2 lg:h-1/2 h-[40%]"
                        : "h-full"
                    } flex  items-center ${
                      listStyle === "Grid" ? "w-full" : "w-1/2"
                    }`}
                  >
                    <div className="w-full h-full relative ">
                      <Image
                        src={item.image}
                        alt="Product"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>

                  {/* Description + price + ratings */}
                  <div
                    className={`${
                      listStyle === "Grid" ? "md:h-1/2 h-[40]" : "h-full"
                    } flex flex-col justify-around items-start p-3 ${
                      listStyle === "Grid" ? "w-full" : "w-1/2"
                    } `}
                  >
                    {/* title */}
                    <p className="text-[#212529">
                      {item.title.substring(0, 20)}...
                    </p>
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
                      <span className="text-[#ADB0B7] text-sm">
                        (121 Review)
                      </span>
                    </div>
                    {/* price + add cart button */}
                    <div className="lg:flex-row md:flex-row flex flex-col justify-between lg:items-baseline items-start  w-full">
                      <p className="text-[#F2415A] lg:text-xl text-lg">
                        ${item.price}
                      </p>
                      <button
                        className="text-white bg-black p-1 text-sm lg:text-lg rounded-md"
                        onClick={() => addToCartHandler(item)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Pagination */}
      {product.length !== 0 && (
        <div className=" w-full h-fit flex justify-center">
          <div className="flex items-baseline">
            <button onClick={() => setCurrentPage(0)}>
              <Image
                src={"/images/start.svg"}
                alt="start"
                width={10}
                height={10}
              />
            </button>
            <div className="w-fit ">
              {/* React paginate */}

              <ReactPaginate
                previousLabel={
                  <Image
                    src={"/images/previous.svg"}
                    alt="Img"
                    width={10}
                    height={10}
                  />
                }
                nextLabel={
                  <Image
                    src={"/images/next.svg"}
                    alt="Img"
                    width={10}
                    height={10}
                  />
                }
                containerClassName="containerClassName"
                pageClassName="pageClassName"
                pageLinkClassName="pageLinkClassName"
                activeClassName="activeClassName"
                activeLinkClassName="activeLinkClassName"
                previousClassName="previousClassName"
                nextClassName="nextClassName"
                marginPagesDisplayed={4}
                pageRangeDisplayed={6}
                onPageChange={handleClick}
                pageCount={Math.ceil(product.length / itemsPerPage)}
                forcePage={currentPage}
              />
            </div>
            <button
              onClick={() =>
                setCurrentPage(Math.ceil(product.length / itemsPerPage) - 1)
              }
            >
              <Image src={"/images/end.svg"} alt="Img" width={10} height={10} />
            </button>
          </div>
        </div>
      )}

      {errorMsg && (
        <p className="text-2xl font-bold text-red-700">{errorMsg}*</p>
      )}
    </>
  );
}
