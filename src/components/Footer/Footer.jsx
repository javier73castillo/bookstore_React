import React from "react";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="socialMedia">
        <img
          src="https://cdn.worldvectorlogo.com/logos/facebook-3.svg"
          alt="facebook"
        />
        <img
          src="https://cdn.worldvectorlogo.com/logos/twitter-6.svg"
          alt="twitter"
        />
        <img
          src="https://cdn.worldvectorlogo.com/logos/instagram-2016-6.svg"
          alt="instagram"
        />
        <img
          src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg"
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

export default Footer;
