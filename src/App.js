import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import { Routes, Route } from "react-router-dom";
import { StateContext } from "./context/StateProvider";

function App() {
  const [cart, setcart] = useContext(StateContext);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home></Home>} />
        <Route path="/Product" exact element={<Product />} />
        <Route path="/Product/:id" element={<ProductDetail />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
