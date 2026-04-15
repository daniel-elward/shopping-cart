import { Outlet, useOutletContext } from "react-router";
import style from "./Card.module.css";
import { useState } from "react";

export default function Card({
  item,
  // identifier,
  // name,
  // desc,
  // price,
  // icon,
  // image,
  // type,
  // product,
}) {
  const [quantity, setQuantity] = useState(1);
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
        <button type="button" onClick={decrease}>
          -
        </button>
        <input
          id="quantity"
          className={style.quantityField}
          type="number"
          placeholder="enter quantity ..."
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="button" onClick={increase}>
          +
        </button>{" "}
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
