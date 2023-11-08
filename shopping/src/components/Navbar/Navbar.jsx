import React from "react";

const Navbar = ({products}) => {
  return (
    <div className="flex flex-row justify-between  items-center pl-4 py-4  border-2 " >
      <h1>Logo</h1>
      <ul className="flex gap-8 pr-4  ">
        <li>About</li>
        <li>Stories</li>
        <li>Shop</li>
        <li>Best Deals</li>
      </ul>
    </div>
  );
};

export default Navbar;
