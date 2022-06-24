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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Our Products
          </h1>
          <div className="flex flex-wrap -m-4">
            {demo?.map((e, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    navigate("/product", { state: e });
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={e.img}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
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
