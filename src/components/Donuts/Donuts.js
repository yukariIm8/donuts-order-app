import { Fragment } from "react";
import DonutsSummary from "./DonutsSummary";
import AvailableDonuts from "./AvailableDonuts";

const Donuts = () => {
  return (
    <Fragment>
      <DonutsSummary />
      <AvailableDonuts />
    </Fragment>
  );
};

export default Donuts;
