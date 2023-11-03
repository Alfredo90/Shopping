import React, { useState } from "react";

const SearchBar = ({products}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input
        className="rounded-sm text-black "
        value={searchInput}
        onChange={handleSearch}
        type="search"
        placeholder="search product..."
      />
      <ul className=" absolute flex flex-col justify-start items-center bg-[#252422]  ">
        {products.filter((product) => product.title.toLowerCase().includes(searchInput.toLowerCase())).map(product => (
          searchInput &&
          <li className=" w-40 h-10  " key={product.id}><a > {product.title}</a></li>
        ))  }
      </ul>
    </div>
  );
};

export default SearchBar;
