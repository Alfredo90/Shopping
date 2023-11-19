import "./App.css";

import { useEffect, useState } from "react";

import ListOfProducts from "../components/ListOfProducts/ListOfProducts";
import Navbar from "../components/Navbar/Navbar";
import Sales from "../components/Sales/Sales";
import axios from "axios";

// import ListOfProducts from "../components/ListOfProducts/ListOfProducts";




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
    <div className=" bg-[#252422] text-white   h-full">
      <Navbar  />
      <Sales />
      <ul className="flex flex-wrap justify-center items-center gap-6 ">
        {products.map(product => (
          <ListOfProducts key={product.id} product={product}/>
        ))}
      </ul>
      {/* <ListOfProducts products={products} /> */}
      </div>
  );
}

export default App;
