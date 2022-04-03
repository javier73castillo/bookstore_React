import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../../shared/contexts/BookContext";
import { Button } from "../Button/Button";

import "./_Books.scss";

export const Books = () => {
  const { books } = useBookContext();

  return (
    <>
      <div className="cards container">
        {books.map((book) => {
          return (
            <div className="cards__books">
              <img
                className="cards__books--img"
                src={book.img}
                alt={book.name}
              />
              <div className="cards__books--text">
                <h2>{book.name}</h2>
                <h3>{book.editorial}</h3>
                <h3>{book.year}</h3>
                <p>{book.description}</p>
                <span>{book.price}€</span>
              </div>
              <Button>
                <Link to={`/book-details/${book._id}`}>Ir al libro</Link>
              </Button>
              <Button>Ir Al Carrito</Button>
            </div>
          );
        })}
      </div>
    </>
  );
};
