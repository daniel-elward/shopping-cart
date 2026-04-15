import style from "./CartCard.module.css";
import { useOutletContext } from "react-router";

export default function CartCard({ product }) {
  const [cart, setCart] = useOutletContext();

  const handleDelete = (idToDelete) => {
    setCart((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
  };
  return (
    <div className={style.productCard}>
      <img src={product.iconLink} alt="" />
      <button
        onClick={() => {
          handleDelete(product.id);
        }}>
        delete
      </button>
      <p>Product: {product.name}</p>
      <p>Price: &#8381; {product.basePrice}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
}
