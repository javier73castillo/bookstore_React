import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../../shared/contexts/BookContext";
import { RiPaypalFill } from "react-icons/ri";

export const Cart = () => {
  const { items, setItems } = useBookContext();

  const deleteItems = (libro) => {
    items.filter((itemFiltrado) => {
      if (itemFiltrado._id === libro._id && itemFiltrado.count > 0) {
        libro.count--;
        setItems([...items]);
      } else if (libro.count === 0) {
        let array = items.filter((item) => item._id !== libro._id);
        setItems(array);
      }
    });
  };

  return (
    <div id="selector">
      <div className="cartContent">
        {items.length !== 0 &&
          items.map((libro) => {
            return (
              <div className="bookRow">
                <img src={libro.img} alt="imagen" />
                <p>{libro.name}</p>
                <p id="contador">Cantidad x{libro.count}</p>
                <p>{libro.price}€</p>
                <button className="delete" onClick={() => deleteItems(libro)}>
                  Eliminar Articulo
                </button>
              </div>
            );
          })}
      </div>
      <div className="bottomCart">
        <div className="cartTotal">
          <h2>Total:</h2>{" "}
          <h2> {items.reduce((prev, current) => prev + current.price, 0)}€</h2>
        </div>
        <a href="https://www.paypal.com/paypalme/Keywiz">
          <button className="pago">
            Ir al Pago <RiPaypalFill />
          </button>
        </a>
        <Link to="/" className="backToHome">
          <button className="button">Volver al inicio</button>
        </Link>
      </div>
    </div>
  );
};
