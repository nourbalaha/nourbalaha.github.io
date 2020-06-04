import React from 'react'

import "./ProjectCard.style.scss"

export default function ProjectCard({ name, description, img, github, website }) {
    return (
        <div className="project-card">
            <img className="project-card-image" src={img} alt={description} />
            <h4 className="project-card-header">{name}</h4>
            <p className="project-card-text">{description}</p>
            <hr />
            <div className="project-card-link-container">
                <span className="project-card-link" onClick={()=>window.open(github,"_blank")}>github</span>
                <span className="project-card-link" onClick={()=>window.open(website,"_blank")}>website</span>
            </div>
        </div>
    )
}
