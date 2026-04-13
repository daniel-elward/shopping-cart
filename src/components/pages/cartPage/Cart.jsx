import { Outlet, useOutletContext } from "react-router";
import { useState } from "react";
import style from "./Cart.module.css";

export default function Cart() {
  const [cart, setCart] = useOutletContext();

  //handles the click in Card.jsx to add item to cart
  const addToCartHandler = () => {};

  return (
    <>
      <div>
        <h1>Cart page</h1>
      </div>

      <div className={style.container}>
        <h1>your shopping card</h1>
        <p>State var 'cart' = {cart}</p>
      </div>

      <Outlet />
    </>
  );
}
