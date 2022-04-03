import React from "react";
import "./_Button.scss";

export const Button = (props) => {
  return <button className="button">{props.children}</button>;
};
