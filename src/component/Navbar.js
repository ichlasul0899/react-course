import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="black">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              IA
            </Link>

            <a to="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* <li><Link to="/portfolio">Portfolio</Link></li> */}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
