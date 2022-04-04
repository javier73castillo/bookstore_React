import React from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../../shared/contexts/BookContext";

export const Cart = () => {
  const { items } = useBookContext();
  let total = 0;
  return (
    <div className="">
      {items.map((libro) => {
        return (
          <div className="bookRow">
            <p>{libro.name}</p>
            <p>€{libro.price}</p>
          </div>
        );
      })}
      <div className="bookRow">
        <h2>Total:</h2>{" "}
        <span>
          {" "}
          €{(total = items.reduce((prev, current) => prev + current.price, 0))}
        </span>
      </div>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};
