import { useState } from "react";
import style from "./Nav.module.css";
import { Link, Outlet } from "react-router";

export default function Nav() {
  //useOutletContext for sharing cart data across store, card and cart components
  const [cart, setCart] = useState(1);

  return (
    <>
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
                Cart: 22
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* outlet renders content based on url */}
      {/* allows for a persistent navigation on page */}
      <div>
        <Outlet context={[cart, setCart]} />
      </div>
    </>
  );
}
