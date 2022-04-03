import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  return (
    <>
    <Link to="/cart">
      <button className="carrito">
        <BsCart4 />
      </button>
      </Link>
    </>
    
  );
};
