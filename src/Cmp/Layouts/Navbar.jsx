import React from "react";
import Shop from "../../Assets/Shop.png";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux/es/exports";

const Navbar = () => {
  const select = useSelector((e) => e.Cart);
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto justify-between flex flex-wrap p-5 md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 md:mb-0"
          >
            <img
              src={Shop}
              alt=""
              className="w-10 rounded-full shadow-xl p-1.5 bg-slate-100"
            />
            <span className="ml-2 text-xl">Shop</span>
          </Link>
          {/* Cart */}
          <Link
            to="/cart"
            className="ml-auto relative sm:w-10 w-8 h-8 sm:h-10 rounded-full shadow-xl p-1.5 bg-slate-100 flex justify-center items-center text-lg sm:text-xl sm:mr-5 mr-3 cursor-pointer"
          >
            <BsCart4 className="text-blue-600" />

            <span
              className={
                select === 0
                  ? "hidden"
                  : "-top-2 -right-2 bg-blue-500 w-5 h-5 pt-0.5 shadow-xl text-white flex text-center items-center justify-center absolute text-xs  rounded-full"
              }
            >
              {select}
            </span>
          </Link>
          {/* Signup */}
          <div className="">
            <Link
              to="/signup"
              className="inline-flex sm:mr-4 mr-2 shadow-lg items-center bg-[rgb(0,130,252)] border-0 py-1 px-3 focus:outline-none hover:bg-[rgb(42,146,243)] text-white rounded text-sm md:text-lg sm:text-base"
            >
              Signup
            </Link>
            {/* Login */}
            <Link
              to="/login"
              className="inline-flex shadow-lg items-center bg-[rgb(0,130,252)] border-0 py-1 px-3 focus:outline-none hover:bg-[rgb(42,146,243)] text-white rounded md:text-lg text-sm sm:text-base"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
