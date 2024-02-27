import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <IoCallOutline />
          <p>Toll free 1800 200 1234</p>
        </div>
        <div className="footer-section">
        <FaFacebook />
            <p>www.facebook.com/cirpumps</p>
        
        </div>
        <div className="footer-section">
        <TfiWorld />
          <p>
www.cirpumps.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
