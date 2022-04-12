import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./_BooksDetails.scss";
import { Button } from "../../Button/Button";
import { useBookContext } from "../../../shared/contexts/BookContext";

export const BookDetails = () => {
  //Dependencias y funcionalidades
  const [details, setDetails] = useState([]);
  const urlPage = `https://library-api-rest-cp6zy22th-javier73castillo.vercel.app/api/books`;
  const { id } = useParams();
  const { addToCart, deleteToCart, items } = useBookContext();
  //Variables
  let contadorItem = 0;
  let contadorPrecio = 0;

  //Declaro el contador que mostrara el resultado de la cantidad de articulos que hay en el carrito en tiempo real

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      setDetails(response.data.find((product) => product._id === id));
    });
  }, [id]);

  const { name, editorial, year, img, description, price, _id } = details;

  items.filter((item) => {
    if (item._id === _id) {
      contadorItem += item.count;
      contadorPrecio += item.price * item.count;
    }
  });

  return (
    <div className="container-card">
      {details.length === 0 && (
        <div class="container-spinner">
          <h1 class="loading">Loading..</h1>
          <div class="spinner"></div>
        </div>
      )}

      {details.length !== 0 && (
        <div className="details">
          <div className="imagen">
            <img src={img} alt={name} />
          </div>

          <div className="contenido">
            <h2>{name}</h2>
            <h3>{editorial}</h3>
            <h3>{year}</h3>
            <p>{description}</p>

            <h1>Agrega al carrito</h1>
            <div className="flex-buttons">
              <Button onClick={() => deleteToCart(details)}>-</Button>
              {<h1>{contadorItem}</h1>}
              <Button onClick={() => addToCart(details)}>+</Button>
            </div>

            <span className="precio">
              {contadorItem === 0 ? price : contadorPrecio}€
            </span>

            {contadorItem > 0 && (
              <button className="toPurchase">
                <Link to="/cart">Finalizar la compra</Link>
              </button>
            )}
          </div>
        </div>
      )}

      {details.length !== 0 && (
        <Link to="/">
          <Button>VOLVER AL INICIO</Button>
        </Link>
      )}
    </div>
  );
};
