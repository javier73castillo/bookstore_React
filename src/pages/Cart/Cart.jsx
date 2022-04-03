import React from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../../shared/contexts/BookContext";

export const Cart = () => {
  const { items } = useBookContext();
  console.log(items);
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
      {(items.reduce((prev, current) => console.log(prev + current.price)), 0)}
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};
