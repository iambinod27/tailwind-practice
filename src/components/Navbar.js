import React, { useRef, useState } from "react";
import logo from "../images/logo.svg";
import cartIcon from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import iconDelete from "../images/icon-delete.svg";
import product1 from "../images/image-product-1.jpg";

const Navbar = ({ cart }) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => (!open ? setOpen(true) : setOpen(false));

  return (
    <nav className="container mx-auto flex justify-between h-28 border-b border-b-pColor">
      <div className="flex  items-center">
        <img src={logo} alt="" className="mr-10 cursor-pointer" />
        <ul className="flex justify-around cursor-pointer accent-zinc-300 text-pColor">
          <li className="mr-6 h-28 flex items-center hover:border-b border-b-orange">
            Collections
          </li>
          <li className="mr-6 h-28 flex items-center hover:border-b border-b-orange">
            Men
          </li>
          <li className="mr-6 h-28 flex items-center hover:border-b border-b-orange">
            Women
          </li>
          <li className="mr-6 h-28 flex items-center hover:border-b border-b-orange">
            About
          </li>
          <li className="mr-6 h-28 flex items-center hover:border-b border-b-orange">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex items-center cursor-pointer">
        <div className="relative">
          <div className="relative " onClick={handleChange}>
            <div className="absolute left-4 bottom-4  w-5 rounded-full bg-orange text-white text-center font-bold">
              {cart.length}
            </div>
            <img src={cartIcon} alt="cart" className="h-6" />
          </div>
          <div
            className={
              open
                ? "absolute top-10 right-0  w-80 rounded-xl drop-shadow-2xl bg-white block"
                : "absolute top-10 right-0  w-80 rounded-xl drop-shadow-2xl bg-white hidden"
            }
          >
            <p className="font-semibold px-3 py-3 border-b text-pColor">Cart</p>

            {cart.length <= 0 ? (
              <>
                <div className="flex justify-center items-center h-44 font-semibold">
                  <p>Your cart is empty.</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex my-4 items-center justify-evenly">
                  <img src={product1} alt="" className="h-10 rounded-lg" />
                  <div>
                    <p>Fall Limited Edition Sneaker</p>
                    <div className="flex items-center">
                      <p>$125.00 x 3 </p>
                      <p className="font-bold ml-3">$375.00</p>
                    </div>
                  </div>
                  <img src={iconDelete} className="h-4" alt="" />
                </div>

                <div className="flex justify-center mb-4">
                  <button className="bg-orange rounded-lg w-72 h-12 font-semibold text-white">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <img
          src={avatar}
          alt="avator"
          className=" ml-10 h-14 hover:border-2 hover:border-orange hover:rounded-full "
        />
      </div>
    </nav>
  );
};

export default Navbar;
