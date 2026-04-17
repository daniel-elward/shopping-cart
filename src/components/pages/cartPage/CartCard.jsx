import { useState } from "react";
import ItemQuantity from "../../itemQuantity/ItemQuantity";
import OrderTotal from "./OrderTotal";
import style from "./CartCard.module.css";
import { useOutletContext } from "react-router";

export default function CartCard({ product }) {
  const [cart, setCart] = useOutletContext([]);
  const [quantity, setQuantity] = useState(product.quantity);

  //increase button
  const increase = () => {
    setQuantity((prevCount) => prevCount + 1);
    console.log(quantity);
  };

  //decrease button
  const decrease = () => {
    if (quantity >= 1) {
      setQuantity((prevCount) => prevCount - 1);
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
        <p>Quantity: {quantity}</p>
        <p>id: {product.id}</p>

        <button type="button" onClick={decrease}>
          -
        </button>
        <input
          key={product.id}
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
      </div>
    </>
  );
}
