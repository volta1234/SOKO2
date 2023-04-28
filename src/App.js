
import './App.css';
import React, { useState, useEffect } from 'react';
import Product from './Product';
import Cart from './cart';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import MarketPlace from './MarketPlace';

function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const[products, setProducts] =useState([])

  useEffect(()=> {
    fetch("http://127.0.0.1:3000/products")
    .then(res => res.json())
    .then(products => setProducts(products))
  },[])

  function addToCart(product) {
    // Check if the product is already in the cart
    const itemInCart = cartItems.find((item) => item.id === product.id);

    if (itemInCart) {
      // If the product is already in the cart, don't add it again
      alert("Product is already in the cart!");
    } else {
      // If the product is not in the cart, add it
      setCartItems([...cartItems, product]);
    }
  }

  function removeItem(item) {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  }

  function removeAll(){
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <div>
      <Navbar removeAll={removeAll} cartItems={cartItems} removeItem={removeItem} />
      <Routes>
        <Route path='/checkout' element={<Checkout cartItems={cartItems} />} />
        <Route path='/cart' element={<Cart removeAll={removeAll} cartItems={cartItems} removeItem={removeItem} />} />
        <Route path='/products' element={<Product products={products} cartItems={cartItems} addToCart={addToCart} />} />
        <Route path="/marketplace" element={<MarketPlace/>}/>
      </Routes>
    </div>
  );
}
export default App
