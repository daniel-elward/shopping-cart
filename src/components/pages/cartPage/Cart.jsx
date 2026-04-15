import { Outlet, useOutletContext } from "react-router";
import { useState } from "react";
import style from "./Cart.module.css";
import CartCard from "./CartCard";

export default function Cart() {
  //outletContet defined in the Nav component
  const [cart, setCart] = useOutletContext([]);

  return (
    <>
      <div>
        <h1>Cart page</h1>
      </div>

      <div className={style.container}>
        <h1>your shopping card</h1>

        {cart.map((product) => {
          return <CartCard product={product} />;
        })}
      </div>

      <Outlet />
    </>
  );
}
