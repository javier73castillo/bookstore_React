import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../../shared/contexts/BookContext";
import { Button } from "../Button/Button";

import "./_Books.scss";

export const Books = ({ books }) => {
  return (
    <>
      <div className="listado container">
        {books.map((book) => {
          return (
            <div className="cards__books">
              <div className="imagen">
                <img src={book.img} alt={book.name} />
              </div>
              <div className="contenido">
                <h2>{book.name}</h2>
                <h3>{book.editorial}</h3>
                <h3>{book.year}</h3>
                <p className="descripcion">{book.description}</p>
                <span className="precio">{book.price}€</span>

                <Link to={`/book-details/${book._id}`}>
                  <button className="enlace">Ver articulo</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
