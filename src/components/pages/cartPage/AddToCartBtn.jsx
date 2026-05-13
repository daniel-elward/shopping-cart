import { useState, useContext } from "react";
// import { CartContext } from "../../../main";
import { CartContext } from "../../../cartContext";
import style from "./AddToCartButton.module.css";

export default function AddToCartButton({ item, quantity }) {
  const [cart, setCart] = useContext(CartContext);

  const addCartHandler = (item) => {
    //spread operator to add the quantity to the item object
    const updatedObject = { ...item, quantity: quantity };

    setCart((prevItem) => [...prevItem, updatedObject]);
  };

  const inCart = (cart || []).some((cartItem) => cartItem.id === item.id);

  return (
    <button
      className={style.cardButtons}
      disabled={inCart}
      onClick={() => {
        addCartHandler(item);
      }}>
      {inCart ? "In Cart" : "Add"}
    </button>
  );
}
