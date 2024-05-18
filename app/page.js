import Product from "./components/Product/Product";
import CartItem from "./components/Cart/cartItem";

export default function Home() {
  return (
    <div className="flex">
      <Product />

      <div className="w-[40%] m-0 pt-20 hidden lg:flex">
        <CartItem />
      </div>
    </div>
  );
}
