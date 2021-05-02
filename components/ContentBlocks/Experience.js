import React from 'react'

const ExperienceBlock = ({ functionTitle, location, duration, title, text}) => {
    return (
        <div className="grid">
            <h2 className="title">
                {title}
            </h2>
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
                <div className="text row-body__text">
                {text}
                </div>
            </div>
        </div>
    )
}

export default ExperienceBlock