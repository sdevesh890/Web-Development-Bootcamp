import React from "react";
import './Header.css';
import logo from './logo.png';


const Navbar = ({ title }) => {
  return (
    <nav className="navBar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="navBar-title">{title}</h1>
      </div>
      <ul className="navBar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#cart">Cart</a></li>
        <li><a href="#contact">Contact</a></li>
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
