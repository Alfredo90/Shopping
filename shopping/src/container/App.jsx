import "./App.css";

import { useEffect, useState } from "react";

import ListOfProducts from "../components/ListOfProducts/ListOfProducts";
import Navbar from "../components/Navbar/Navbar";
import Sales from "../components/Sales/Sales";
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
    <div className=" bg-[#252422] text-white  w-full  h-screen">
      <Navbar products={products} />
      <Sales />
      <div className="flex justify-center items-center">
        <hr className="border-2 mb-10 w-4/5" />
      </div>
      <ListOfProducts products={products} />
    </div>
  );
}

export default App;
