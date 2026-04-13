import { Outlet, useOutletContext } from "react-router";
import style from "./Card.module.css";
import { useState } from "react";

export default function Card({ id, name, desc, price, icon, image, type }) {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useOutletContext();

  //increase button
  const increase = () => {
    // setCart((prevCount) => prevCount + 1);
    setQuantity((prevCount) => prevCount + 1);
  };

  //decrease button
  const decrease = () => {
    if (quantity >= 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  //add to cart
  const addCartHandler = (callback) => {};

  return (
    <>
      <div className={style.card}>
        <img
          className={style.center}
          src={image}
          alt={`${name} image`}
          width="150px"
        />
        <h1>{name}</h1>
        <p>{desc}</p>
        <p>&#8381; {price}</p>
        <button onClick={decrease}>-</button>
        <input
          className={style.quantityField}
          type="number"
          placeholder="0"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={increase}>+</button> <br />
        <button>Add to Cart</button>
      </div>
      <Outlet />
    </>
  );
}

// name={item.name} price={item.price}
