import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";

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

  const buttonData = (e) => {
    e.preventDefault();
    bookSelect(e.target.parentElement);
    console.log(e.target.parentElement)
  };

  const bookSelect = (book) => {
    const bookInfo = {
      image: book.querySelector("img").src,
      title: book.querySelector("h2").textContent,
      cant: 1,
    };

    console.log(bookInfo);
  };

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
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </div>

              <Button onClick={buttonData} className="cards__books--button">
                Agregar libro al carrito
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};
