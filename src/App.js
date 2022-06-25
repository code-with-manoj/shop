import React from "react";
import Footer from "./Cmp/Layouts/Footer";
import Navbar from "./Cmp/Layouts/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Cmp/Pages/Home";
import Signup from "./Cmp/Pages/Signup";
import Login from "./Cmp/Pages/Login";
import SingleProduct from "./Cmp/Pages/SingleProduct";
import Cart from "./Cmp/Pages/Cart";
import Products from "./Cmp/Pages/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
