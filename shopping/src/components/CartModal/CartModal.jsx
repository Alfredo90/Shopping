import Cart from "../Cart/Cart";
import React from "react";

const CartModal = ({ cartItems, quantity, deleteFromCart }) => {
  return (
    <div>
      <div>
        {cartItems.map((item) => (
          <Cart
            key={item.id}
            item={item}
            quantity={quantity}
            deleteFromCart={deleteFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CartModal;
