import { Outlet, useOutletContext } from "react-router";
import style from "./Card.module.css";
import { useState, useContext } from "react";
import { CartContext } from "../../../main";
import AddToCartButton from "../cart/AddToCartBtn";

export default function Card({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useContext(CartContext);

  //increase button
  const increase = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  //decrease button
  const decrease = () => {
    if (quantity >= 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const inputHandler = (e) => {
    //parseInt to ensure value is not a string.
    //duplicate code, look at cleaning this
    const value = parseInt(e.target.value) || 0;
    setQuantity(value);
  };

  const inCart = cart.some((cartItem) => cartItem.id === item.id);

  return (
    <>
      <div className={style.card}>
        <img
          className={style.center}
          src={item.image512pxLink}
          alt={`${name} image`}
          width="150px"
        />
        <h1>{item.name}</h1>
        <p>{item.id}</p>
        <p>{item.description}</p>
        <p>&#8381; {item.basePrice}</p>
        <br />

        <button type="button" onClick={decrease}>
          -
        </button>
        <input
          id={item.id}
          className={style.quantityField}
          type="number"
          value={quantity}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <button type="button" onClick={increase}>
          +
        </button>

        <AddToCartButton item={item} quantity={quantity} />
      </div>
      <Outlet />
    </>
  );
}
