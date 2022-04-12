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
        totalPrice: item.price,
      };
      setItems([...items, articulo]);
    } else {
      found.count++;
      found.totalPrice = item.price * found.count;
      setItems([...items]);
    }
  };

  const deleteToCart = (itemToDelete) => {
    items.filter((item) => {
      if (item._id === itemToDelete._id) {
        itemToDelete = {
          ...itemToDelete,
          count: item.count > 0 ? item.count-- : item.count,
          totalPrice: item.totalPrice - item.price,
        };

        setItems([...items]);

        if (item.count === 0) {
          let filterDeleted = items.filter(
            (item) => item._id !== itemToDelete._id
          );
          setItems(filterDeleted);
        }
      }
    });
  };

  const store = {
    items,
    addToCart,
    books,
    setItems,
    deleteToCart,
  };

  return <BookContext.Provider value={store}>{children}</BookContext.Provider>;
}
