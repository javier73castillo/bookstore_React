import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../contexts/JwtContext";
import "./_ButtonLogOut.scss";

export const ButtonLogOut = () => {
  let navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);
  const logOut = () => {
    localStorage.removeItem("token");
    setJwt(null);
    navigate("/login");
  };
  return (
    <button className="logout" onClick={logOut}>
      Log Out
    </button>
  );
};
