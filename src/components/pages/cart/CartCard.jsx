import { useState, useContext } from "react";
import style from "./CartCard.module.css";
import { CartContext } from "../../../main";

export default function CartCard({ product, updateCart }) {
  const [cart, setCart] = useContext(CartContext);

  const increase = (productId) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  //decrease button
  const decrease = (product) => {
    //for some reason this needs to be < 2 to work?
    if (product.quantity < 2) {
      handleDelete(product.id);
    }
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  //quantity change
  const inputHandler = (e) => {
    //parseInt to ensure value is not a string
    const value = parseInt(e.target.value) || 0;
    setQuantity(value);
  };

  const handleDelete = (idToDelete) => {
    setCart((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
  };
  return (
    <>
      <div className={style.productCard}>
        <img src={product.iconLink} alt="" />
        <button
          onClick={() => {
            handleDelete(product.id);
          }}>
          delete
        </button>
        <p>Product: {product.name}</p>
        <p>Price: &#8381; {product.basePrice}</p>
        <p>Quantity: {product.quantity}</p>
        <p>id: {product.id}</p>

        <button type="button" onClick={() => decrease(product)}>
          -
        </button>
        <input
          key={product.id}
          className={style.quantityField}
          type="number"
          value={product.quantity}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <button type="button" onClick={() => increase(product.id)}>
          +
        </button>
      </div>
    </>
  );
}
