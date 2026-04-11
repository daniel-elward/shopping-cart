import { Outlet } from "react-router";
import style from "./Card.module.css";

export default function Card({ id, name, desc, price, icon, image, type }) {
  return (
    <>
      <div className={style.card}>
        <img
          className={style.center}
          src={image}
          alt={`${name} image`}
          width="150px"
          height="150px"
        />
        <h1>{name}</h1>
        <p>&#8381; {price}</p>
        <p>{desc}</p>
        <button>-</button>
        <input className={style.quantityField} type="number" value="0" />
        <button>+</button> <br />
        <button>Add to Cart</button>
      </div>
      <Outlet />
    </>
  );
}

// name={item.name} price={item.price}
