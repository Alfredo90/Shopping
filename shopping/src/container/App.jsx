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
  const [quantity, setQuantity] = useState(1);

  // console.log(cartItems);

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

  const addToCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const deleteFromCart = (id) => {
    const deleteitem = cartItems.filter((item) => item.id !== id)
    setCartItems(deleteitem)

  }


  return (
    <div className=" bg-[#252422] text-white h-full">
      <Navbar />
      <Sales />
      <ul className="flex flex-wrap justify-center items-center gap-6 ">
        {products.map((product) => (
          <ListOfProducts
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ul>
      <ul>
        {cartItems.map((item) => (
          <Cart key={item.id} item={item} quantity={quantity} deleteFromCart={deleteFromCart} />
        ))}
      </ul>
    </div>
  );
}

export default App;
