import { useState, useContext, useEffect } from "react";
import style from "./CartCard.module.css";
import { useOutletContext } from "react-router";
import { CartContext } from "../../../main";

export default function CartCard({ product, updateCart }) {
  const [cart, setCart] = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);

  const increase = (productId) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  //decrease button
  const decrease = () => {
    if (quantity >= 1) {
      setQuantity((prevCount) => prevCount - 1);
    }

    //being equal to 0 still requires an extra click to remove?
    if (quantity < 2) {
      handleDelete(product.id);
    }
  };

  //quantity change
  const inputHandler = (e) => {
    //without parseInt the users input adds the number as a string.
    //which produced a bug where clicking + btn was performing
    //concatenation of the string '1'
    //to the value, instead of incrementing.
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

        <button type="button" onClick={decrease}>
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
