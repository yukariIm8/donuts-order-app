import styles from "./DonutsSummary.module.css";

const DonutsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Tasty Donuts, Happiness In Your Mouth!</h2>
      <p>
        Explore your favorite donuts from our unique selection of home made
        donuts!
      </p>
      <p>
        All our donuts are made from organic ingredients, freshly baked in every
        order!
      </p>
      <p>We deliver to you, just-in-time!</p>
    </section>
  );
};

export default DonutsSummary;
