import React from "react";

const Cart = ({ item, quantity}) => {
  return (
    <li>
      <p>{item.title}</p>
      <img src={item.image} className="w-44 h-40 " alt="" />
        <p>Qty:{ quantity}</p>
    </li>
  );
};

export default Cart;
