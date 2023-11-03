import "./App.css";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Sales from "../components/Sales/Sales";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(products);
  return (
    <div className="  bg-[#252422] text-white  w-max  h-max">
      <Navbar products={products}/>
      <Sales />
      <ShopByCategory products={products} />
    </div>
  );
}

export default App;
