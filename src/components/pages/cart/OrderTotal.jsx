import style from "./OrderTotal.module.css";
import { CartContext } from "../../../main";
import { useContext, useState } from "react";

export default function OrderTotal() {
  const [cart, setCart] = useContext(CartContext);

  const total = cart.reduce((runningTotal, item) => {
    return runningTotal + item.basePrice * item.quantity;
  }, 0);

  return (
    <div className={style.totalContainer}>
      <p>order total: {total}</p>
    </div>
  );
}
