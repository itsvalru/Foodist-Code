import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans.toFixed(2));
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article className="pt-10 2xl:mx-80 mx-28">
      <span className="text-3xl font-bold">Warenkorb</span>
      {cart.map((item) => (
        <div className="flex justify-between content-center mt-10 pb-1 border-gray-300 border-b" key={item.id}>
          <div className="w-96 flex content-center">
            <img className=" h-28" src={item.img} alt="" />
            <p className="pl-5 place-self-center">{item.title}</p>
          </div>
          <div className="place-self-center font-bold">
            <button className="px-3" onClick={() => handleChange(item, 1)}>+</button>
            <button className="px-3">{item.amount}</button>
            <button className="px-3" onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div className="place-self-center">
            <span>{item.price}€</span>
            <button className="font-bold ml-10 mr-5" onClick={() => handleRemove(item.id)}>X</button>
          </div>
        </div>
      ))}
      <div className="flex justify-between mt-5 mx-16">
        <span className="text-3xl font-bold">Gesamtsumme</span>
        <span className=" font-bold">{price}€</span>
      </div>
      <div>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
      <button className=" float-right mt-3 text-white font-semibold text-sm bg-orange-700 rounded-3xl w-40 py-2" >Zur Kasse</button>
      </a>
      </div>
    </article>
  );
};

export default Cart;
