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
      <ul>
        {products.filter((product) => product.category.toLowerCase().includes(searchInput.toLowerCase())).map(product => (
          searchInput &&
          <li key={product.id}><a > {product.category}</a></li>
        ))  }
      </ul>
    </div>
  );
};

export default SearchBar;
