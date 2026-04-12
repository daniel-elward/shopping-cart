import style from "../Modal/Modal.module.css";

export default function Modal({ close, name, desc, price, icon, image, type }) {
  return (
    <div className="overlay">
      <div className="productModal">
        <img src={image} alt={`${name} image`} width="300px" />
        <h1>{name}</h1>
        {/* <p>{type}</p> this element is an array */}

        <p>{desc}</p>
        <button onClick={close}>close</button>
      </div>
    </div>
  );
}
