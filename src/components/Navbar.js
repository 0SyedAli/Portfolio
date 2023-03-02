import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header>
        <div className="logo">
            <div className="name">Ahtisham</div>
            <div className="desc text-danger" >WEB DESIGNER & DEVELOPER</div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/"} className="home">Home</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={'/signup'}>Sign-Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
