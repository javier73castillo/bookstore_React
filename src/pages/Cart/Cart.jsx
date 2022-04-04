import React from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../../shared/contexts/BookContext";
import { RiPaypalFill } from 'react-icons/ri';

export const Cart = () => {
  const { items } = useBookContext();
  let total = 0;
  return (
    <>
    <div className="cartContent">
      {items.map((libro) => {
        return (
          <div className="bookRow">
            <img src={libro.img} alt="imagen" />
            <p>{libro.name}</p>
            <p>Cantidad x{libro.count}</p>
            <p>{libro.price}€</p>
          </div>
        );
      })}
      
    </div>
    <div className="bottomCart">
    <div className="cartTotal">
    <h2>Total:</h2>{" "}
    <h2>
      {" "}
      {(total = items.reduce((prev, current) => prev + current.price, 0))}€
    </h2>
  </div>
  <a href="https://www.paypal.com/paypalme/Keywiz">
    <button className="pago">Ir al Pago <RiPaypalFill /></button>
  </a>
  <Link to="/" className="backToHome">
    <button className="button">Volver al inicio</button>
  </Link>
  </div>
  </>
  );
};
