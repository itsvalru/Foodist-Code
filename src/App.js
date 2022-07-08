import React, { useState } from "react";
import Foodist from "./components/foodist";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

const App = () => {
  const [page, setPage] = useState("shop");
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <Navbar setPage={setPage} size={cart.length} />
      {page === "shop" ? (
        <Foodist setPage={setPage} handleClick={handleClick} />
      ): ""} 
      {page === "cart" ? (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      ) : ""}
    </React.Fragment>
  );
};

export default App;
