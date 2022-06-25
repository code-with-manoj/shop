import React from "react";
import Hero from "../Components/Hero";
import Testimonial from "../Components/Testimonial";
import Products from "./Products";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <Products slice={true} />
      <button
        onClick={() => navigate("/products")}
        class="flex mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        View All
      </button>
      <Testimonial />
    </>
  );
};

export default Home;
