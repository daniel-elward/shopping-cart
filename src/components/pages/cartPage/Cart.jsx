import { Outlet, useOutletContext } from "react-router";
import style from "./Cart.module.css";
import CartCard from "./CartCard";
import OrderTotal from "./OrderTotal";

export default function Cart() {
  //outletContet defined in the Nav component
  const [cart, setCart] = useOutletContext([]);
  const [quantity, setQuantity] = useOutletContext();

  return (
    <>
      <div>
        <h1>Cart page</h1>
      </div>

      <div className={style.container}>
        <h1>your shopping card</h1>

        {cart.map((product) => {
          return (
            <CartCard key={product.id} product={product} quantity={quantity} />
          );
        })}
      </div>

      <OrderTotal total={cart} />

      <Outlet />
    </>
  );
}
