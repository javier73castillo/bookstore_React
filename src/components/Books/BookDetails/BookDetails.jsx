import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_BooksDetails.scss";
import { Button } from "../../Button/Button";

export const BookDetails = () => {
  const [details, setDetails] = useState([]);
  const [items, setItems] = useState([]);

  const urlPage = `https://library-api-rest-86hi8hunh-javier73castillo.vercel.app/api/books`;

  const { id } = useParams();

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      setDetails(response.data.find((product) => product._id === id));
    });
  }, [id]);

  const { name, editorial, year, img, _id, price } = details;

  const addItem = (e) => {
    e.preventDefault();
    console.log(e.target.parentElement);
    const item = {
      name: name,
      img: img,
      id: _id,
      price: Number(price),
    };

    addToCart(item);
  };

  const addToCart = (item) => {
    const found = items.find((book) => book.id === item.id);

    if (!found) {
      const articulo = {
        ...item,
        count: 1,
        price: item.price,
      };
      setItems([...items, articulo]);
    } else {
      found.count++;
      found.price = item.price * found.count;
      setItems([...items]);
    }

    console.log(items);
  };

  return (
    <div className="details">
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <h2>{editorial}</h2>
      <h3>{year}</h3>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
      <span>{price}</span>
      <Button onClick={addItem}>Ir Al Carrito</Button>
    </div>
  );
};
