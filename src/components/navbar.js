import React from "react";

const Navbar = ({ setPage, size }) => {
  return (
    <div>
      <div className="h-10 bg-green-900"></div>
      <div >
      <div className="flex justify-between justify-center m-auto mx-40">
        <h1 className="mt-5 text-2xl font-bold text-green-900 hover:cursor-pointer" onClick={() => setPage("shop")}>Notfoodist</h1>
        <div className="mt-3 hover:cursor-pointer" onClick={() => setPage("cart")}>
          <span className="  relative h-10">
          <img src="cart.svg" className="h-10"/>
            {size !== 0 ? 
            <div className="absolute top-0 -left-1">
              <span className="text-white bg-red-500 rounded-3xl px-1 py-none">
                {size}
              </span></div> 
              : ""}
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
