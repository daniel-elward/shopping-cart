import style from "./CartCard.module.css";

export default function CartCard({ product }) {
  console.log(product);
  return (
    <div className={style.productCard}>
      <img src={product.iconLink} alt="" />
      <p>Product: {product.name}</p>
      <p>Price: &#8381; {product.basePrice}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
}
