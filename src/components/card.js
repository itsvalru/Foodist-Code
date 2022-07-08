import React from "react";

const Cards = ({ setOpenProductPage, item, handleClick, setTitle, setPrice, setImg, setId}) => {
  const { title, price, img, id } = item;
  return (
    <div className="w-64 p-3 justify-self-center">
    
      <div className="w-auto h-60">
        <img src={img}/>
      </div>
      <div className="">
        <p onClick={() =>{setId(id); setOpenProductPage(true); setTitle(title); setPrice(price); setImg(img)}} className="font-bold hover:cursor-pointer">{title}</p>
        <p className="text-gray-500 mb-2">Preis - {price}€</p>
        <button className="bottom-0 mt-3 text-white font-semibold text-sm bg-orange-700 rounded-3xl w-full py-2" onClick={() => handleClick(item)}>In den Warenkorb</button>
      </div>
      
      
    </div>
  );
};

export default Cards;

