import React from 'react';

const EducationBlock = ({ functionTitle, location, duration, title, text }) => {
  return (
    <div className="grid">
      <div className="meta">
        <h2 className="subtitle">{functionTitle}</h2>
        <h3 className="meta__title meta__title--secondary">{location}</h3>
        <p className="meta__title">{duration}</p>
      </div>

      <p className="text">{title}</p>
    </div>
  );
};

export default EducationBlock;
