import React from "react";
import "./Navbar.css";
import profilePicture from "../../assets/icon/profilePicture.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid navbar-container">
        <a className="navbar-brand">Navbar</a>
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item mx-md-2">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </li>
          <li className="nav-item mx-md-2">
            <div className="dropdown">
              <button
                className="btn profilePicture-btn dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profilePicture}
                  alt=""
                  className="profilePicture-img"
                />
                <span className="ms-2">Michael JD</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
