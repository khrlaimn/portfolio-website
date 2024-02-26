import React, { useEffect, useState } from "react";
import { links } from "../../Data";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./header.css";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import shapeOne from "../../assets/shape-1.png";

// Function to get the theme from local storage or default to "light-theme"
const getStorageTheme = () => {
  return localStorage.getItem("theme") || "light-theme";
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  // Function to change the navigation style based on scroll position
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    // Add event listener to handle scroll
    window.addEventListener("scroll", changeNav);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  useEffect(() => {
    // Toggle the "no-scroll" class on body based on the showMenu state
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  useEffect(() => {
    // Update the document's theme class and store the theme in local storage
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header`}>
      <nav className="nav">
        {/* Logo with link to scroll to top */}
        <Link to="/" onClick={scrollToTop} className="nav__logo text-cs">
          Aiman
        </Link>

        {/* Navigation menu */}
        <div className={` ${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <div className="nav__data">
            {/* Navigation links */}
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                      className="nav__link text-cs"
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Social media links */}
            <div className="header__socials">
              <a
                href="https://github.com/khrlaimn"
                target="_blank"
                className="header__social-link"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/khrlaimn/"
                className="header__social-link"
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://t.me/khrlaimn2001"
                className="header__social-link"
                target="_blank"
              >
                <FaTelegram />
              </a>
            </div>
          </div>

          {/* Decorative shape for the menu */}
          <div className="section__deco deco__left header__deco">
            <img src={shapeOne} alt="" className="shape" />
          </div>
        </div>

        {/* Theme toggle and menu toggle buttons */}
        <div className="nav__btns">
          {/* Theme toggle button */}
          <div className="theme__toggler" onClick={toggleTheme}>
            {theme === "light-theme" ? <BsMoon /> : <BsSun />}
          </div>

          {/* Menu toggle button */}
          <div
            className={` ${
              showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
