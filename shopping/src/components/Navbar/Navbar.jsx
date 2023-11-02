import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import cart from "../../assets/animateCart.gif";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between  items-center py-4  px-6 border-2">
      <h1>Logo</h1>
      <ul className="flex gap-20 ">
        <li>About</li>
        <li>Stories</li>
        <li>Shop</li>
        <li>Best Deals</li>
      </ul>
      <div className="flex flex-row justify-center gap-4 items-center">
        <SearchBar />
        <img className="w-6 h-6" src={cart} alt="animated-cart" />
      </div>
    </div>
  );
};

export default Navbar;
