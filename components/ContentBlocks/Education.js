import React from 'react'

const EducationBlock = ({ functionTitle, location, duration, title }) => {
    return (
      <div className="grid">
        <div className="meta">
          <h2 className="row-meta__title">
            {functionTitle}
          </h2>
          <h3 className="row-meta__location">
            {location}
          </h3>
          <div className="row-meta__duration">
            {duration}
          </div>
        </div>

        <div className="text">
          <h2 className="row-body__title">
            {title}
          </h2>
        </div>
      </div>
    )
}

export default EducationBlock