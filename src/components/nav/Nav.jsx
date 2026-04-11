import style from "./Nav.module.css";
import { Link, Outlet } from "react-router";

export default function Nav() {
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
              <button className={style.navButton}>Cart</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* outlet renders content based on url */}
      {/* allows for a persistent navigation on page */}
      <div>
        <Outlet />
      </div>
    </>
  );
}
