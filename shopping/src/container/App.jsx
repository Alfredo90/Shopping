import "./App.css";

import { useEffect, useState } from "react";

import Cart from "../components/Cart/Cart";
import ListOfProducts from "../components/ListOfProducts/ListOfProducts";
import Navbar from "../components/Navbar/Navbar";
import Sales from "../components/Sales/Sales";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0)

  console.log(cartItems)

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

  const addToCart = (item) => {
    const productExist = products.find((product) => product.id === item);
    if (productExist) {
      setCartItems([...cartItems, productExist,]);
      setQuantity(quantity + 1)
  };
}


  return (
    <div className=" bg-[#252422] text-white h-full">
      <Navbar />
      <Sales />
      <ul className="flex flex-wrap justify-center items-center gap-6 ">
        {products.map((product) => (
          <ListOfProducts key={product.id} product={product} addToCart={addToCart} />
          ))}
      </ul>
          <ul>
            {cartItems.map((item) => (
              <Cart key={item.id} item={item} quantity={quantity}/>
            ))}
          </ul>
    </div>
  );
}

export default App;
