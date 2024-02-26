import React, { useState } from "react";

// Component for a collapsible card in the resume section
const Card = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="resume__item">
      {/* Header of the card, clicking on it toggles the content visibility */}
      <div className="resume__header" onClick={() => setShowInfo(!showInfo)}>
        <h3 className="resume__subtitle">{props.title}</h3>
        <span className="resume__icon">{showInfo ? '-' : '+'}</span>
      </div>

      {/* Content of the card, conditionally rendered based on showInfo state */}
      <div className={showInfo ? 'show-content resume__content' : 'resume__content'}>
        {/* Section for title, date, and other relevant information */}
        <div className="resume__date--title">
          <h3 className="resume__title">{props.subtitle}</h3>
          <span className="resume__date text-cs">{props.date}</span>
        </div>

        {/* Description or details of the card */}
        <p className="resume__description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
