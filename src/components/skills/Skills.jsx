import React from "react";
import { skills } from "../../Data";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-cs">What I Do</h2>
      <p className="section__subtitle">
        My <span>Skills</span>
      </p>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="skills__container container mySwiper"
      >
        {skills.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide className="skills__item card card-one" key={index}>
              <span className="skills__subtitle text-cs">{name}</span>

              <h3 className="skills__title">{title}</h3>
              <p className="skills__description">{description}</p>

              <img src={shapeTwo} alt="" className="shape c__shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Skills</span>
      </div>
    </section>
  );
};

export default Skills;
