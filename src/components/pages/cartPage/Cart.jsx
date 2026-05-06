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
      <div>
        <h1>Cart page</h1>
        <h1>your shopping card</h1>
      </div>
      {console.log(cart)}
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
