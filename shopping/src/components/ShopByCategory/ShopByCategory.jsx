import React from "react";

const ShopByCategory = ({ products }) => {
  const categories = [
    { id: 0, category: "Men" },
    { id: 1, category: "Women" },
    { id: 2, category: "Jewelery" },
    { id: 3, category: "Electronic" },
  ];

  console.log(products);
  return (
    <div className="flex flex-col justify-evenly items-center border-2 h-screen w-screen ">
      <hr className="border-2 w-5/6 " />
      <h1 className="text-2xl">Shop By Category</h1>
      <ul className="  flex flex-row gap-20 ">
        {categories.map(({ category, id }) => (
          <li
            key={id}
            className="border-2 w-24 h-24 flex justify-center items-center  "
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopByCategory;
