import React from 'react';

const ExperienceBlock = ({ functionTitle, location, duration, title, text }) => {
  return (
    <div className="grid">
      <h2 className="title">{title}</h2>
      <div className="meta meta-as-row">
        <h2 className="subtitle">{functionTitle}</h2>
        <h3 className="meta__title meta__title--secondary">{location}</h3>
        <p className="meta__title">{duration}</p>
      </div>

      <p className="text">{text}</p>
    </div>
  );
};

export default ExperienceBlock;
