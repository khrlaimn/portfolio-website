import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a
            href="https://github.com/khrlaimn" target="_blank"
            className="footer__social-link"
          >
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/khrlaimn/" target="_blank" className="footer__social-link">
            <FaLinkedin />
          </a>

          <a href="https://t.me/khrlaimn2001" target="_blank" className="footer__social-link">
            <FaTelegram />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2024
          <span> KhairulAiman</span>. All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by
          <span> KhairulAiman</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
