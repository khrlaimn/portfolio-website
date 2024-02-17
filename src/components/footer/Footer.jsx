import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a
            href="https://github.com/khrlaimn"
            className="footer__social-link"
          >
            <FaGithub />
          </a>

          <a href="" className="footer__social-link">
            <FaLinkedin />
          </a>

          <a href="" className="footer__social-link">
            <FaTelegram />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2024
          <span> AimanAhmad</span>. All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by
          <span> AimanAhmad</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
