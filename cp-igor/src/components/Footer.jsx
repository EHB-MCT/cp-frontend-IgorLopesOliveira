import React from "react";
import { Link } from 'react-router-dom';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <img src="./images/logo.png" alt="My Logo" className="footer-logo" />

        <div className="footer-text">
          <p>
            23 studenten van de opleiding MCT die kozen voor het vak Front-End Design. 
            Met een dosis creativiteit, code en een flinke scheut verbeelding verzamelden ze hier al hun sprookjes. 
            Benieuwd wie wij zijn?
          </p>

          <Link to="/aboutus">
            <button className="footer-button">About Us</button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
