import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import logoImage from "../../assets/logo.png";
import donutsImage from "../../assets/donuts.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles["header-logo"]}>
          <img src={logoImage} alt="Logo of TastyDonuts" />
          <h1 className={styles["header-shop-name"]}>TastyDonuts</h1>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={donutsImage} alt="Full of delicious donuts!" />
      </div>
    </Fragment>
  );
};

export default Header;
