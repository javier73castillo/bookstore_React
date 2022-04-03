import React from "react";
import { useBookContext } from "../../shared/contexts/BookContext";

export const Cart = () => {
  const { items } = useBookContext();
  /*   console.log(items[0]); */
  let totalPrice;
  return (
    <div className="cartContent">
      {items.map((libro) => {
        return (
          <div className="bookRow">
            <img src={libro.img} alt={libro.img} />
            <p>{libro.name}</p>
            <p>{libro.price}</p>
            {
              (items.reduce(
                (prev, current) => (totalPrice = prev.price + current.price)
              ),
              [])
            }
            {console.log({ items })}
          </div>
        );
      })}
      <h2>Precio Total: {totalPrice} €</h2>
    </div>
  );
};
