import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeToCart,
} from "../../Redux/Actions";

const Cart = () => {
  const navigate = useNavigate();
  const select = useSelector((e) => e.Quantity);
  const cart = useSelector((e) => e.Cart);
  const dispatch = useDispatch();
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-14 mx-auto">
          <div
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="lg:w-4/5 mx-auto"
          >
            <MdKeyboardBackspace className="text-3xl my-6 text-blue-600 cursor-pointer" />
          </div>
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Your Cart
          </h1>

          <div className={cart === 0 ? "text-center w-full text-xl" : "hidden"}>
            Empty
          </div>
          <div className={cart === 0 ? "hidden" : ""}>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt=""
                />
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <div className="mt-1 flex justify-between">
                  <p class="">$20.00</p>
                  <p class="">
                    Total <span className="text-blue-400"> ${select * 16}</span>
                  </p>
                </div>
                <div className="flex py-2 justify-between items-center">
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        select === 1 ? "" : dispatch(decreaseQuantity())
                      }
                      className="bg-blue-500 inline-flex justify-center items-center text-white px-2.5 rounded-full text-xl"
                    >
                      -
                    </button>
                    <span className="px-2 text-lg ">{select}</span>
                    <button
                      onClick={() => dispatch(increaseQuantity())}
                      className="bg-blue-500 inline-flex justify-center items-center text-white px-2 rounded-full text-xl"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeToCart())}
                    class="flex cursor-pointer hover:text-blue-500  rounded text-xl"
                  >
                    <FiTrash />
                  </button>
                </div>
              </div>
            </div>

            <button class="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
