import "./App.css";

import { useEffect, useState } from "react";

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
    <>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
