import React from 'react';
import { format } from 'date-fns';

const ExperienceBlock = ({ functionTitle, location, startdate, enddate, title, text }) => {
  return (
    <div className="grid">
      <h2 className="title">{title}</h2>
      <div className="meta meta-as-row">
        <h2 className="subtitle">{functionTitle}</h2>
        <h3 className="meta__title meta__title--secondary">{location}</h3>
        <p className="meta__title">
          {format(new Date(startdate), 'MMMM yyyy')} - {enddate ? format(new Date(enddate), 'MMMM yyyy') : 'nu'}
        </p>
      </div>

      <p className="text">{text}</p>
    </div>
  );
};

export default ExperienceBlock;
