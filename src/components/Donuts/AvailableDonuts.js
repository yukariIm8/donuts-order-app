import Card from "../UI/Card";
import DonutItem from "./DonutItem/DonutItem";
import styles from "./AvailableDonuts.module.css";
// import donutImage_d1 from "../../assets/d1.png";
// import donutImage_d2 from "../../assets/d2.png";
// import donutImage_d3 from "../../assets/d3.png";
// import donutImage_d4 from "../../assets/d4.png";
// import donutImage_d5 from "../../assets/d5.png";
// import donutImage_d6 from "../../assets/d6.png";

const DUMMY_DONUTS = [
  {
    id: "d1",
    name: "Passion Fruit Custard",
    description:
      "Vanilla frosted passion fruit custard filled donut with passionfruit and peach flavored sprinkles",
    price: 2.2,
    image: require("../../assets/d1.png"),
  },
  {
    id: "d2",
    name: "Chocolate Banana Cream",
    description:
      "Caramel frosted chocolate banana cream filled donut with chocolate sauce and nuts",
    price: 1.9,
    image: require("../../assets/d2.png"),
  },
  {
    id: "d3",
    name: "Watermelon Cream",
    description:
      "Watermelon frosted dragon fruit cream filled donut with coconut and lemon flavored sprinkles",
    price: 2.3,
    image: require("../../assets/d3.png"),
  },
  {
    id: "d4",
    name: "Strawberry Custard",
    description:
      "Strawberry frosted strawberry custard filled donut with marshmallow flavored sprinkles",
    price: 2,
    image: require("../../assets/d4.png"),
  },
  {
    id: "d5",
    name: "Pumpkin Caramel",
    description:
      "Salty caramel frosted pumpkin custard filled donut with pumpkin seeds and chia seeds",
    price: 2.1,
    image: require("../../assets/d5.png"),
  },
  {
    id: "d6",
    name: "Cocoa Milk",
    description:
      "Vanilla frosted chocolate milk cream and custard filled donut with oreo cookies chunks",
    price: 1.9,
    image: require("../../assets/d6.png"),
  },
  {
    id: "d7",
    name: "Random Assorted Dozen Donuts",
    description:
      "Assorted donuts with a variety of flavors, filings and toppings. The flavors include guava, pear, muscat grape, and more!",
    price: 25,
    image: require("../../assets/d7.png"),
  },
];

const AvailableDonuts = () => {
  const donutsList = DUMMY_DONUTS.map((donut) => (
    <DonutItem
      key={donut.id}
      id={donut.id}
      name={donut.name}
      description={donut.description}
      price={donut.price}
      image={donut.image}
    />
  ));

  return (
    <section className={styles.donuts}>
      <Card>
        <ul>{donutsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableDonuts;
