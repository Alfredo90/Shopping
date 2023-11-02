import React from "react";

const ShopByCategory = ({ products }) => {
  console.log(products)
  return (
    <div className="flex flex-row justify-center items-center border-2 h-screen w-screen ">
      <div>
        <h1 className="text-2xl">Shop By Category</h1>
      </div>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{products.category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopByCategory;
