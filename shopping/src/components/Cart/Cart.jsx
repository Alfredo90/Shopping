import React from "react";

const Cart = ({ item, quantity, deleteFromCart }) => {
  const deleteItem = () => deleteFromCart(item.id);

  return (
    <li className="list-none ">
      {/* <p>{item.title}</p> */}
      <img src={item.image} className="w-20 h-20 " alt="" />
      {/* <p>Qty:{ quantity}</p> */}
      <button onClick={deleteItem}>-</button>
    </li>
  );
};

export default Cart;
