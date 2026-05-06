import style from "./OrderTotal.module.css";
// import { CartContext } from "../../../main";
import { CartContext } from "../../../cartContext";
import { useContext, useState } from "react";

export default function OrderTotal() {
  const [cart, setCart] = useContext(CartContext);

  const total = cart.reduce((runningTotal, item) => {
    return runningTotal + item.basePrice * item.quantity;
  }, 0);

  const tax = Math.round((total / 100) * 20);

  function tax1() {
    return 3 * 0.2;
  }

  return (
    <div className={style.totalContainer}>
      <h2>Your Cart</h2>
      <p>Cart Total: {total}</p>
      <p>Shipping: FREE</p>
      <p>Taxes: &#8381; {tax}</p>
      <p>Order total: {total + tax}</p>
    </div>
  );
}
