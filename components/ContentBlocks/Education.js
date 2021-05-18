import React from 'react'

const EducationBlock = ({ functionTitle, location, duration, title }) => {
    return (
      <div className="grid">
        <div className="meta">
          <h2 className="subtitle">
            {functionTitle}
          </h2>
          <h3 className="meta__title meta__title--secondary">
            {location}
          </h3>
          <div className="meta__title">
            {duration}
          </div>
        </div>

        <div className="text">
          {title}
        </div>
      </div>
    )
}

export default EducationBlock
