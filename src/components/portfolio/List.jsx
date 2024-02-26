import React, { useState } from "react";

// Component to display a list of categories for filtering projects
const List = ({ list, filterItems }) => {
  // State to track the index of the active category
  const [active, setActive] = useState(0);

  return (
    <div className="porfolio__list">
      {/* Map through the list of categories */}
      {list.map((category, index) => {
        return (
          // Button for each category with conditional class based on active state
          <button
            className={`${
              active === index ? "active-work" : ""
            } porfolio__list-item text-cs`}
            key={index}
            // Event handler to set the active category and filter items
            onClick={() => {
              setActive(index);
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default List;
