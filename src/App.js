import React, { useState } from "react";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative">
        <Navbar cart={cart} />

        <Product cart={cart} setCart={setCart} setShowModal={setShowModal} />

        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
};

export default App;
