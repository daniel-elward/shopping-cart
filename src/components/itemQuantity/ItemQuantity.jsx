import { useState } from "react";
import style from "./ItemQuantity.module.css";
import { useOutletContext } from "react-router";

export default function ItemQuantity({ id, quantity, setQuantity }) {
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
      <button type="button" onClick={decrease}>
        -
      </button>
      <input
        key={id}
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
    </>
  );
}
