import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/shared/logo.svg";
import Open from "../../assets/shared/icon-hamburger.svg";
import Close from "../../assets/shared/icon-close.svg";

const links = [
  {  id:6, name: "HOME", number: "00", page: "#home" },
  {  id:7, name: "DESTINATION", number: "01", page: "#destination" },
  {  id:8, name: "CREW", number: "02", page: "#crew" },
  {  id:9, name: "TECHNOLOGY", number: "03", page: "#technology" },
];

const Navbar = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-links">
          <ul>
            {links.map((item) => (
              <li key={item.id}>
                <a href={item.page}>
                  {" "}
                  <span>{item.number}</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-drawer">
          <img src={Open} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
