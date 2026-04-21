import { useState } from "react";
import style from "./Nav.module.css";
import { Link, Outlet } from "react-router";
import { CartContext } from "../../main";

export default function Nav({ children }) {
  //useOutletContext (bottom of page) for sharing cart data across store, card and cart components
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
      <div className={style.nav}>
        <ul>
          <li>
            <Link to="/">
              <button className={style.navButton}>Home</button>
            </Link>
          </li>
          <li>
            <Link to="store">
              <button className={style.navButton}>Store</button>
            </Link>
          </li>
          <li>
            <Link to="cart">
              <button className={`${style.navButton} ${style.populated}`}>
                Cart: {cart.length}
              </button>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Outlet context={[cart, setCart]} />
      </div>
    </CartContext.Provider>
  );
}
