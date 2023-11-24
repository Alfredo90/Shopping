import React from "react";

const ListOfProducts = ({ product, addItemToCart }) => {

  const addToCartHandler = () => addItemToCart(product.id)

  return (
    <li >
      <div className="w-44 h-50  border-2 flex flex-col">
        <img
          className="w-44 h-40 "
          src={product.image}
          alt="image"
        />
      <div className="">
        {/* <p className=" text-left text-sm">{product.title}</p> */}
        <p className="text-xs">Price: ${product.price}</p>
      </div>
      <div className=" flex justify-end items-center  ">
        <button onClick={addToCartHandler} className=" bg-cyan-500 w-8 h-8 border-2 rounded-full items-end ">
          +
        </button>
      </div>
      </div>
    </li>
  );
};

export default ListOfProducts;
