import React from "react";
import { Books } from "../../components/Books/Books";

export const HomePage = ({ books }) => {
  return (
    <div>
      <Books books={books} />
    </div>
  );
};
