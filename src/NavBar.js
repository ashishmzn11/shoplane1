import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StateContext } from "./context/StateProvider";

const NavBar = () => {
  const [cart] = useContext(StateContext);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
          SHOPLANE
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/product"
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <div className="buttons"></div>

              <NavLink to="/login">
                <button className="btn btn-outline-light" type="submit">
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </button>{" "}
              </NavLink>

              <NavLink to="/register">
                {" "}
                <button className="btn btn-outline-light ms-2" type="submit">
                  <i className="bi bi-person-circle"></i> Register
                </button>
              </NavLink>

              <NavLink to="/cart">
                {" "}
                <button className="btn btn-outline-light ms-2" type="submit">
                  <i className="bi bi-cart"></i> Cart{" "}
                  <span className="badge bg-danger">{cart.length}</span>
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
