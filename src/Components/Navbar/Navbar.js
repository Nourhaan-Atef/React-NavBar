import React, { useState } from "react";
import Button from "../Button";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">
        Noury <i className="fa-sharp fa-solid fa-graduation-cap"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Hire Me</Button>
    </nav>
  );
}

export default Navbar;
