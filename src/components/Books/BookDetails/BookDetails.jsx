import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./_BooksDetails.scss";
import { Button } from "../../Button/Button";
import { useBookContext } from "../../../shared/contexts/BookContext";

export const BookDetails = () => {
  const [details, setDetails] = useState([]);

  const urlPage = `https://library-api-rest-cp6zy22th-javier73castillo.vercel.app/api/books`;

  const { id } = useParams();
  const { addToCart } = useBookContext();

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      setDetails(response.data.find((product) => product._id === id));
      console.log(response.data);
    });
  }, [id]);

  const { name, editorial, year, img, autor, description, price } = details;

  return (
    <div className="container-card">
      <div className="details">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <h3>{editorial}</h3>
        <h3>{year}</h3>
        <p>{description}</p>
        <span>{price}€</span>

        <Button onClick={() => addToCart(details)}>AGREGAR AL CARRITO</Button>
        <Link to="/">
          <Button>VOLVER AL INICIO</Button>
        </Link>
      </div>
    </div>
  );
};
