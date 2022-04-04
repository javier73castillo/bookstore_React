import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useBookContext } from "../../shared/contexts/BookContext";



export const ShoppingCart = () => {
  const { items } = useBookContext();

  let counter = items.reduce((acc, current) => acc + current.count, 0);

  return (
    <>
    <Link to="/cart">
      <button className="carrito">
        <BsCart4 /> <span>{counter}</span>
      </button>
      </Link>
    </>
    
  );
};
