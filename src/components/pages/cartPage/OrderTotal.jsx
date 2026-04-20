import style from "../cartPage/OrderTotal.module.css";

export default function OrderTotal({ total }) {
  let orderTotal = null;
  const calculateTotal = () => {
    total.forEach((element) => {
      const price = element.basePrice;
      const quantity = element.quantity;

      orderTotal += price * quantity;
    });

    return orderTotal;
  };

  return (
    <div className={style.totalContainer}>
      <p>order total: {calculateTotal()}</p>
    </div>
  );
}
