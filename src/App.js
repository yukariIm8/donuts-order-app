import { useState } from "react";

import CartProvider from "./store/CartProvier";
import Header from "./components/Layout/Header";
import Donuts from "./components/Donuts/Donuts";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Donuts />
      </main>
    </CartProvider>
  );
}

export default App;
