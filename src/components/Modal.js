import React from "react";
import product1 from "../images/image-product-1.jpg";
import iconClose from "../images/icon-close.svg";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="absolute top-0 bg-pColor min-h-full min-w-full flex items-center justify-center bg-opacity-60 ">
          <div className=" w-96">
            <div className="relative">
              <img
                src={iconClose}
                className=" absolute -top-10 right-0 h-5 cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </div>
            <img src={product1} alt="" className="rounded-xl mb-6 w-96" />
            <div className="grid grid-cols-4 gap-5">
              <div className=" rounded-xl border-orange border-2 overflow-hidden bg-white ">
                <img
                  className="opacity-40"
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
        </div>
      )}
    </>
  );
};

export default Modal;
