import React from "react";
import "./NavBar.css";
import { slide as Menu } from "react-burger-menu";

class NavBar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a id="hire" className="menu-item" href="/hire">
          Direct Hire
        </a>
      </Menu>
    );
  }
}

export default NavBar;