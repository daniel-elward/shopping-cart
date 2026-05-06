import { Outlet, useOutletContext } from "react-router";
import style from "./Cart.module.css";
import CartCard from "./CartCard";
import { useState, useContext } from "react";
// import { CartContext } from "../../../main";
import { CartContext } from "../../../cartContext";
import OrderTotal from "./OrderTotal";

export default function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const [orderTotal, setOrderTotal] = useState(0);

  //callback function to update cart from CartCard Component
  const updateCart = (newQuantity, productId) => {
    setCart((prevItem) =>
      prevItem.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  return (
    <>
      <div className={style.title}>
        <h1>Your cart</h1>
      </div>

      <div className={style.container}>
        <OrderTotal />
        {cart.length === 0 ? (
          <div className={style.emptyCart}>
            <p>Nothing in cart</p>
          </div>
        ) : (
          cart.map((product) => {
            return <CartCard key={product.id} product={product} />;
          })
        )}
      </div>

      <Outlet />
    </>
  );
}
