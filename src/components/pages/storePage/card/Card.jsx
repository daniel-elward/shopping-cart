import { Outlet, useOutletContext } from "react-router";
import style from "./Card.module.css";
import { useState, useContext } from "react";
import { CartContext } from "../../../../main";

export default function Card({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useContext(CartContext);

  //add to cart button
  const addCartHandler = (item) => {
    //spread operator to add the quantity to the item object
    const updatedObject = { ...item, quantity: quantity };

    setCart((prevItem) => [...prevItem, updatedObject]);
  };

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
    //without parseInt the users input adds the number as a string.
    //which produced a bug where clicking + btn was performing
    //concatenation of the string '1'
    //to the value, instead of incrementing.
    const value = parseInt(e.target.value) || 0;
    setQuantity(value);
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

        <button
          onClick={() => {
            addCartHandler(item);
          }}>
          Add to Cart
        </button>
      </div>
      {/* <Outlet context={[cart, setCart]} /> */}
      <Outlet />
    </>
  );
}
