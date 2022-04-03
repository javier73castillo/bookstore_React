import React from "react";
import "./_Button.scss";

export const Button = (props) => {
  return (
    <button {...props} className="button">
      {props.children}
    </button>
  );
};
