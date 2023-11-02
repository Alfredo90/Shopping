import "./App.css";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
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
  //   <ul>
  //   {products.map((product) => (
  //     <li key={product.id}>
  //       {/* <img src={product.image} alt="" />
  //        */}
  //       {product.category}
  //     </li>
  //   ))}
  // </ul>
  console.log(products);
  return (
    <>
      <div>
        <Navbar/>
      </div>
    </>
  );
}

export default App;
