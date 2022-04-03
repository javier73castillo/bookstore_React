import React, { useContext, useState } from "react";

export const BookContext = React.createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export default function BookProvider({ children }) {
  const [items, setItems] = useState([]);

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

    console.log(items);
  };

  const store = {
    items,
    addToCart,
  };

  return <BookContext.Provider value={store}>{children}</BookContext.Provider>;
}
