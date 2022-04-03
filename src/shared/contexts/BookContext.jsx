import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

export const BookContext = React.createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export default function BookProvider({ children }) {
  const [items, setItems] = useState([]);
  const [books, setBooks] = useState([]);

  const urlPage = `https://library-api-rest-cp6zy22th-javier73castillo.vercel.app/api/books`;

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      setBooks(response.data);
      console.log(response.data);
    });
  }, [urlPage]);

  const addToCart = (item) => {
    const found = items.find((book) => book._id === item._id);
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
  };

  const store = {
    items,
    addToCart,
    books,
  };

  return <BookContext.Provider value={store}>{children}</BookContext.Provider>;
}
