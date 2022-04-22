import React from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../../shared/contexts/BookContext";
import { RiPaypalFill } from "react-icons/ri";

export const Cart = () => {
  const { items, setItems } = useBookContext();

  const deleteItems = (libro) => {
    items.filter((itemFiltrado) => {
      if (itemFiltrado._id === libro._id && itemFiltrado.count > 0) {
        libro.count--;
        libro.totalPrice = libro.totalPrice - libro.price;
        setItems([...items]);
        console.log(libro.count);

        if (libro.count === 0) {
          let array = items.filter((item) => item._id !== libro._id);
          setItems(array);
        }
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
<<<<<<< HEAD
          <h2>Total:</h2>{" "}
          <h2>
            {" "}
            {items.reduce((prev, current) => prev + current.totalPrice, 0)}€
=======
          <h2>
            Total: {"  "}{" "}
            {items.reduce((prev, current) => prev + current.totalPrice, 0)}€{" "}
>>>>>>> 51a28bb8503302841cb8a5168e071843413a9078
          </h2>
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
