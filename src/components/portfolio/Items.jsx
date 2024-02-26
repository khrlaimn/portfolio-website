import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";

// Component to display project items
const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, link } = projectItem;
        return (
          // Motion component for animations
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two"
            key={id}
          >
            {/* Project image */}
            <div className="portfolio__img-wrapper">
              <img src={img} alt="" className="portfolio__img" />
            </div>

            {/* Project category */}
            <span className="portfolio__category text-cs">{category}</span>
            {/* Project title */}
            <h3 className="porfolio__title">{title}</h3>
            {/* Project description */}
            <p className="portfolio__description">{description}</p>

            {/* Link to view project */}
            <a href={link} target="_blank" className="link">
              View Project
              <FaArrowRight className="link__icon"></FaArrowRight>
            </a>

            {/* Shape for decoration */}
            <img src={shapeTwo} alt="" className="shape c__shape" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
