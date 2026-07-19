
import { Link } from "react-router-dom";
import React from "react";

import productImg1 from "../assets/plate-with-pastry-300x300.png";
import productImg2 from "../assets/bowl-with-liquid-300x300.png";
import productImg3 from "../assets/6-inch-square-plate-1-300x300.png";
import productImg4 from "../assets/11-inch-round-plate-with-food-300x300.png";
import logoImg from "../assets/logo-1.png"; 
const aboutImages = [
  {
    src: productImg1,
    alt: "Product 1",
  },
  {
    src: productImg2,
    alt: "Product 2",
  },
];

const productImages = [
  {
    src: productImg3,
    alt: "Product 3",
  },
  {
    src: productImg4,
    alt: "Product 4",
  },
];
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="logo-section">
        <img src={logoImg} alt="Ecoinfinity Logo" className="navbar-logo" />
      </div>

      <div className="row">
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown position-static">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/about"
                    id="shopAllDropdown"
                  >
                    About Us
                  </Link>
                  <div className="dropdown-menu mega-menu" aria-labelledby="shopAllDropdown">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <div className="mega-content">
                            <h4 className="mega-title" data-animate="fade-up">
                              Explore Our Collection
                            </h4>
                            <p className="mega-text" data-animate="fade-up">
                              Browse our complete collection of biodegradable bowls, plates,
                              and compartment trays crafted for sustainable food serving.
                            </p>
                          </div>
                        </div>
                        {aboutImages.map((item, index) => (
                          <div className="col-lg-4" key={index}>
                            <div className="product-item">
                              <img src={item.src} alt={item.alt} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown position-static">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/products"
                    id="beefBoxesDropdown"
                  >
                    Products
                  </Link>
                  <div className="dropdown-menu mega-menu" aria-labelledby="beefBoxesDropdown">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <div className="mega-content">
                            <h4 className="mega-title" data-animate="fade-up">
                              Explore Our Collection
                            </h4>
                            <p className="mega-text" data-animate="fade-up">
                              Browse our complete collection of biodegradable bowls, plates,
                              and compartment trays crafted for sustainable food serving.
                            </p>
                          </div>
                        </div>
                        {productImages.map((item, index) => (
                          <div className="col-lg-4" key={index}>
                            <div className="product-item">
                              <img src={item.src} alt={item.alt} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/bowls">Bowls</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Plates">Plates</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/CompartmentPlates">
                    compartment plates
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
