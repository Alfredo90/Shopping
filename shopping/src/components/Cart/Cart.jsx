import React from "react";

const Cart = ({ item, quantity, deleteFromCart}) => {

  const deleteItem = () => deleteFromCart(item.id)

  return (
    <li>
      <p>{item.title}</p>
      <img src={item.image} className="w-44 h-40 " alt="" />
        <p>Qty:{ quantity}</p>
        <button onClick={deleteItem}>-</button>
    </li>
  );
};

export default Cart;
