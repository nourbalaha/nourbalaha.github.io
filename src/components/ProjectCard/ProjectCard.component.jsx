import React from 'react'

import "./ProjectCard.style.scss"

export default function ProjectCard({name, description, img}) {
    return (
        <div className="project-card">
            <img className="project-card-image" src={img} alt={description} />
            <h4 className="project-card-header">{name}</h4>
            <p className="project-card-text">{description}</p>
            <hr />
            <div className="project-card-link-container">
                <span className="project-card-link">github</span>
                <span className="project-card-link">website</span>
            </div>
        </div>
    )
}
