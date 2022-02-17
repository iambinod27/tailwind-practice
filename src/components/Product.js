import React, { useState } from "react";
import product1 from "../images/image-product-1.jpg";
import iconCart from "../images/icon-cart.svg";
import iconMinus from "../images/icon-minus.svg";
import iconPlus from "../images/icon-plus.svg";

const Product = ({ cart, setCart, setShowModal }) => {
  return (
    <section className="container mx-auto grid grid-cols-2 gap-24 py-10">
      <div>
        <img
          src={product1}
          alt=""
          className="rounded-xl mb-6 w-46 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <div className="grid grid-cols-4 gap-5">
          <div className=" rounded-xl border-orange border-2 overflow-hidden bg-white ">
            <img
              className="opacity-30 "
              src={require("../images/image-product-1-thumbnail.jpg")}
              alt=""
            />
          </div>
          <img
            className="rounded-xl"
            src={require("../images/image-product-2-thumbnail.jpg")}
            alt=""
          />
          <img
            className="rounded-xl"
            src={require("../images/image-product-3-thumbnail.jpg")}
            alt=""
          />
          <img
            className="rounded-xl"
            src={require("../images/image-product-4-thumbnail.jpg")}
            alt=""
          />
        </div>
      </div>

      <div className="place-self-center">
        <h4 className="text-orange font-bold text-base tracking-widest pb-2">
          SNEAKER COMPANY
        </h4>

        <h1 className="text-5xl font-bold my-3">
          Fall Limited Edition Sneakers
        </h1>

        <p className="py-5 text-md text-pColor font-medium">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        <div className="flex items-center ">
          <h2 className="text-4xl font-bold">$125.00</h2>
          <span className="ml-3 rounded-sm px-2 py-1 font-bold bg-PaleOrange text-orange">
            50%
          </span>
        </div>
        <div className="line-through font-bold my-2 text-lg text-pColor">
          $250.00
        </div>

        <div className="flex">
          <div className="flex rounded-md w-40 mr-3 bg-PaleOrange justify-evenly items-center ">
            <img src={iconMinus} alt="" className="h-1" />
            <p>0</p>
            <img src={iconPlus} alt="" />
          </div>
          <button className="flex drop-shadow-lg font-bold bg-orange rounded-md h-14 w-60  items-center justify-center text-white">
            <img src={iconCart} alt="" className="mr-2 text-white" />
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
