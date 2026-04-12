import { Outlet } from "react-router";
import style from "./Card.module.css";
import { useState } from "react";
import Modal from "../../../Modal/Modal";

export default function Card({ id, name, desc, price, icon, image, type }) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

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
        <button onClick={() => setShowModal(true)}>i</button>
        {showModal && (
          <Modal
            close={closeModal}
            image={image}
            name={name}
            type={type}
            desc={desc}
          />
        )}
        {/* <p>{desc}</p> removed using modal instead */}
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
