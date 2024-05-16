
import Cart from "./Cart/page";
import Product from "./Product/page";

export default function Home() {
  return (
    <div className="flex">
      <Product />
      <div className="w-[40%] m-0 pt-20 hidden lg:flex">
        <Cart />
      </div>
    </div>
  );
}
