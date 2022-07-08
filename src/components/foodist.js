import React, { useState } from "react";
import list from "../data";
import Cards from "./card";

const Foodist = ({ handleClick }) => {

  const [openProductPage, setOpenProductPage] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState()

  const item = {title: title, img: img, price: price, id: id, amount: 1}
 
  return (
    <div className="relative w-full h-full bg-white">
      {openProductPage ? 
      <div className="bg-white absolute w-full h-full">
        <div className="pt-10 h-full 2xl:mx-80 mx-28 flex">
        <img className="h-96 w-auto" src={img}/>
        <div className="m-12">
        <div className="font-bold text-3xl">
          {title}
        </div>
        <div className="mt-4">
        Beschreibung Beschreibung Beschreibung Beschreibung Beschreibung Beschreibung Beschreibung Beschreibung Beschreibung 
        </div>
        <div className="text-gray-500 mt-4 text-xl">
          {price}€
        </div>
        <div>
          <button className="mt-10 text-white font-semibold text-sm bg-orange-700 rounded-3xl w-full py-2" 
          onClick={() => handleClick(item)}>
            In den Warenkorb
            </button>
            </div>
        </div>
        </div>
      </div> : ""}
    <div className="my-10 2xl:mx-80 mx-28 grid grid-cols-3 gap-4">
        {list.map((item) => (
        <Cards 
        setId={setId}
        setTitle={setTitle} 
        setPrice={setPrice}
        setImg={setImg}
        setOpenProductPage={setOpenProductPage} 
        key={item.id} 
        item={item} 
        handleClick={handleClick} />
      ))}
    </div>
    </div>
  );
};

export default Foodist;
