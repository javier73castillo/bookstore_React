import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../Button/Button";
import { BookDetails } from "./BookDetails/BookDetails";

import "./_Books.scss";

export const Books = () => {
  const [books, setBooks] = useState([]);

  const urlPage = `https://library-api-rest-86hi8hunh-javier73castillo.vercel.app/api/books`;

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      setBooks(response.data);
      console.log(response.data);
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
                <h2>{book.autor}</h2>
                <h3>{book.editorial}</h3>
                <h3>{book.year}</h3>
                <p>{book.description}</p>
                <span>{book.price}€</span>
              </div>
              <Button>
                <Link to={`/book-details/${book._id}`}>Ir al libro</Link>
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};
