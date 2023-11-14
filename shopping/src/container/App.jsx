import "./App.css";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Sales from "../components/Sales/Sales";
import axios from "axios";

// import ListOfProducts from "../components/ListOfProducts/ListOfProducts";




function App() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setItems(res.data.products);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(items);
  return (
    <div className=" bg-[#252422] text-white  w-full  h-full">
      <Navbar  />
      <Sales />
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {/* <ListOfProducts products={products} /> */}
      </div>
  );
}

export default App;
