import style from "../cartPage/OrderTotal.module.css";
import { CartContext } from "../../../main";
import { useContext } from "react";

export default function OrderTotal({ total }) {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div className={style.totalContainer}>
      <p>order total: {}</p>
    </div>
  );
}
