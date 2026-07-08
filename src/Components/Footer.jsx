import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo-1.png";
import certificate1 from "../assets/Certificate-1.png";
import certificate2 from "../assets/Certificate-2.png";
import certificate3 from "../assets/Certificate-3.png";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-3">
            <div className="footer-contact-card">
              <button className="footer-btn">
                GET YOUR INQUIRY NOW
              </button>
              <div className="footer-contact-box">
                <i className="fas fa-envelope"></i>
                <div>
                  <h5>Email Us</h5>
                  <p>prajapathardik19@gmail.com</p>
                </div>
              </div>
              <div className="footer-line"></div>
              <div className="footer-contact-box">
                <i className="fas fa-phone-alt"></i>

                <div>
                  <h5>Call / Whatsapp</h5>
                  <p>+91 73893 34205</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="footer-content">
              <div className="row">

                <div className="col-lg-5">

                  <img
                    src={logo}
                    alt=""
                    className="footer-logo"/>
                  <h3>
                    ECOINFINITY BIOPRODUCTS PVT. LTD
                  </h3>
                  <h6>OFFICE & FACTORY ADDRESS:</h6>
                  <p>
                    408 & 409/1, Wind Farm Road,
                    Bypass, Dewas 455001 (M.P.)
                  </p>
                </div>


                <div className="col-lg-3">
                  <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/bowls">Bowls</Link></li>
                    <li><Link to="/plates">Plates</Link></li>
                    <li><Link to="/CompartmentPlates">
                      Compartment Plates
                    </Link></li>
                    <li><Link to="/contact">
                      Contact Us
                    </Link></li>
                  </ul>
                </div>


                <div className="col-lg-4 text-center">
                  <div className="footer-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-whatsapp"></i></a>

                  </div>

                  <div className="footer-certificates">
                    <img src={certificate1} alt="" />
                    <img src={certificate2} alt="" />
                    <img src={certificate3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="footer-bottom">

          Copyright ©2025 Ecoinfinity

        </div>
      </div>
    </footer>
  );
}

export default Footer;