import React from "react";
import Logo from "../icons/Logo";
import { Link } from "react-router-dom";
import SearchIcon from "../icons/Search";

const Header = () => {
  return (
    <div className="app-header">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="nav-routes">
        <header>
          <nav>
            <div className="nav-ul">
              <div>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </div>
              <div>
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </div>
              <div>
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </div>
              <div>
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className="header-action">
        <div>
          <SearchIcon />
        </div>
        <div>
          <button className="header-button">Lets Talk</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
