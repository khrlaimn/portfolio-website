import React, { useState } from "react";
import List from "./List";
import Items from "./Items";
import { projects } from "../../Data";
import "./portfolio.css";
import { AnimatePresence } from "framer-motion";
import shapeOne from "../../assets/shape-1.png";

// Array containing unique project categories including 'all'
const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

const Portfolio = () => {
  // State to manage the displayed project items and project categories
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  // Function to filter project items based on selected category
  const filterItems = (category) => {
    if (category === "all") {
      // If 'all' category is selected, display all projects
      setMenuItems(projects);
      return;
    }

    // Filter projects based on the selected category
    const newProjectItems = projects.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItems);
  };

  return (
    <section className="porfolio section" id="portfolio">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle">
        My <span>Projects</span>
      </p>

      {/* Component for rendering the project category list */}
      <List list={navList} filterItems={filterItems} />

      <div className="portfolio__container container grid">
        {/* Component for rendering the project items */}
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>

      {/* Decorative Shape */}
      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      {/* Background Wrapper */}
      <div className="section__bg-wrapper">
        <span className="bg__title">Portfolio</span>
      </div>
    </section>
  );
};

export default Portfolio;
