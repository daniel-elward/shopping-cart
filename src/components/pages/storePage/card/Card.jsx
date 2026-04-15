import { Outlet, useOutletContext } from "react-router";
import style from "./Card.module.css";
import { useState } from "react";
import ItemQuantity from "../../../itemQuantity/ItemQuantity";

export default function Card({ item }) {
  const [quantity, setQuantity] = useState();
  // const [quantity, setQuantity] = useOutletContext(1);
  const [cart, setCart] = useOutletContext();

  //add to cart button
  const addCartHandler = (item) => {
    //spread operator to add the quantity to the item object
    const updatedObject = { ...item, quantity: quantity };

    setCart((prevItem) => [...prevItem, updatedObject]);

    console.log(updatedObject);
  };

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
        <ItemQuantity />
        <br />
        <button
          onClick={() => {
            addCartHandler(item);
          }}>
          Add to Cart
        </button>
      </div>
      <Outlet />
    </>
  );
}
