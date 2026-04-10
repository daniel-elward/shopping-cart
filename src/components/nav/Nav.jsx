import style from "./Nav.module.css";
import { Link, Outlet } from "react-router";

export default function Nav() {
  return (
    <>
      <div className={style.nav}>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="store">Store</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
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
