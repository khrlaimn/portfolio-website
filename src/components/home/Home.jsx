import React from "react";
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import resume from "../../assets/cikmanresume.pdf";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>K.</span> Aiman
          </h1>
          <p className="home__job">
            <span className="text-cs">I Am </span>
            <b>Software Engineering Student</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                12 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Years of <span>Experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">330</span>

              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            From Penang, I have deep understanding in Computer Sciene
          </p>

          <div className="home__socials">
            <a href="https://github.com/khrlaimn" className="home__social-link">
              <FaGithub />
            </a>

            <a href="" className="home__social-link">
              <FaLinkedin />
            </a>

            <a href="" className="home__social-link">
              <FaTelegram />
            </a>
          </div>
          <div className="home__btns">
            <a download="" href={resume} className="btn text-cs">
              Donwload Resume
            </a>
            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">K.Aiman</span>
      </div>
    </section>
  );
};

export default Home;
