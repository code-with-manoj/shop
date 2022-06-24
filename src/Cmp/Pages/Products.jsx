import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [demo, setDemo] = useState([
    {
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1510878933023-e2e2e3942fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    },
  ]);
  //   useEffect(() => {
  //     axios
  //       .get("https://fakestoreapi.com/products")
  //       .then((res) => setDemo(res.data))
  //       .catch((err) => console.log(err));
  //   }, []);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Our Products
          </h1>
          <div class="flex flex-wrap -m-4">
            {demo?.map((e, i) => {
              return (
                <div
                  key={i}
                  onClick={() => navigate("/product", { state: e })}
                  class="lg:w-1/4 md:w-1/2 p-4 w-full"
                >
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src={e.img}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p class="mt-1">$16.00</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
