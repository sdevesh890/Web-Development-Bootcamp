import React from "react";
import "./Header.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import useIsOnline from "../../utils/useIsOnline";

const Navbar = ({ title }) => {
  const IsOnline = useIsOnline();
  return (
    <nav className="navBar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="navBar-title">{title}</h1>
        {IsOnline ? <h1>✅</h1> : <h1>🔴Please check your Internet</h1>}
      </div>
      <ul className="navBar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="#cart">Cart</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => (
  <header className="header">
    <Navbar title="MovieMantra" />
  </header>
);

export default Header;
