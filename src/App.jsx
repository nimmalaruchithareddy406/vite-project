import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert(product.name + " added to cart");
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <h2>ShopEase</h2>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/catalog">Catalogue</Link>
            <Link to="/cart">Cart ({cartItems.length})</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;