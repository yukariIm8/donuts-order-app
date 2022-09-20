import { useContext } from "react";
import CartContext from "../../../store/cart-context";

import DonutItemForm from "./DonutItemForm";
import styles from "./DonutItem.module.css";

const DonutItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  console.log();

  return (
    <li className={styles.donut}>
      <div>
        <img src={props.image.default} alt="donuts" />
      </div>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <DonutItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default DonutItem;
