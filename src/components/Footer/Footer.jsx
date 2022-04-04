import React from "react";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="socialMedia">
        <img
          src="./assets/icons/facebook.png"
          alt="facebook"
        />
        <img
          src="./assets/icons/twitter.png"
          alt="twitter"
        />
        <img
          src="./assets/icons/instagram.png"
          alt="instagram"
        />
        <img
          src="./assets/icons/spotify.png"
          alt="spotify"
        />
      </div>
      <div className="footerInfo">
        <p>
          Copyright © 2022 All rights reserved |{" "}
          <a href="https://github.com/Cristianfarriol29" target="_blank" rel="noreferrer">
            Cristian Farriol
          </a> /{" "} 
          <a href="https://github.com/javier73castillo" target="_blank" rel="noreferrer">
            Javier Castillo
          </a> /{" "}
          <a href="https://github.com/KeywizZ" target="_blank" rel="noreferrer">
            Raúl Ruiz
          </a> /{" "} 
          <a href="https://github.com/ricardoriballo" target="_blank" rel="noreferrer">
            Ricardo Riballo
          </a> 
        </p>
      </div>
    </div>
  );
};


