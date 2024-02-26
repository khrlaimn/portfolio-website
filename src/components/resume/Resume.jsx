import React from "react";
import { cv } from "../../Data";
import Card from "./Card";
import "./resume.css";
import shapeOne from "../../assets/shape-1.png";

// Component for the Resume section, displaying education and experience
const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section__title text-cs">Resume</h2>
      <p className="section__subtitle">
        My <span>Story</span>
      </p>

      {/* Container for organizing the education and experience groups */}
      <div className="resume__container container grid">
        {/* Group for displaying education information */}
        <div className="resume__group">
          <h3 className="resume__heading">Education</h3>

          <div className="resume__items">
            {/* Mapping through the education items and rendering Card components */}
            {cv.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>

        {/* Group for displaying experience information */}
        <div className="resume__group">
          <h3 className="resume__heading">Experience</h3>

          <div className="resume__items">
            {/* Mapping through the experience items and rendering Card components */}
            {cv.map((val, id) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>

      {/* Decorative element on the right side */}
      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      {/* Background wrapper with a title */}
      <div className="section__bg-wrapper">
        <span className="bg__title">Resume</span>
      </div>
    </section>
  );
};

export default Resume;
