import React from "react";
import Logo from "../img/app-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center pl-0 pr-2.5 mt-5">
        <div>
          <Link to="/">
            <img src={Logo} className="w-32" alt="My Products Logo App" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
