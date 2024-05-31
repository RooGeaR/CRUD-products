import React from "react";
import Logo from "../img/app-logo.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between mt-20 p-5 bg-white text-xs">
      <img className="w-20" src={Logo} alt="My Products Logo App" />
      <span>Made with <b>React.js</b></span>
    </footer>
  );
};

export default Footer;
