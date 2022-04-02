import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./_Books.scss";

export const Books = () => {
  const [books, setBooks] = useState([]);

  const urlPage = `https://library-api-rest-86hi8hunh-javier73castillo.vercel.app/api/books`;

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      console.log(response);
      setBooks(response.data);
    });
  }, [urlPage]);

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
              </div>

              <button className="cards__books--button">
                Agregar libro al carrito
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
