import React from "react";

const ListOfProducts = ({ products }) => {
  return (
    <ul className="bg-[#252422] flex flex-wrap justify-center items-center gap-10 " >
      {products.map((product) => (
        <li key={product.id} >
            <img className="w-48 h-48" src={product.image} />
        </li>
      ))}
    </ul>
  );
};

export default ListOfProducts;
