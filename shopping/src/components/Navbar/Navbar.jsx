import React, { useState } from "react";

import CartModal from "../CartModal/CartModal";

const Navbar = ({ cartItems, quantity, deleteFromCart }) => {
  const [isToggle, setIsToggle] = useState(true);


  return (
    <div className=" flex  flex-col w-full border-2 ">
      <div className="flex justify-between items-center px-2 relative">
        <h1>Logo</h1>
        <button onClick={() => setIsToggle(!isToggle)}>
          {isToggle ? "Cart" : "X"}
        </button>
        </div>
      <div className=" absolute mt-6 bg-white border-2">
        {!isToggle ? (
          <CartModal
            cartItems={cartItems}
            quantity={quantity}
            deleteFromCart={deleteFromCart}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
