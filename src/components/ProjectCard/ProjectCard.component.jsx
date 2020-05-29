import React from 'react'

import "./ProjectCard.style.scss"

import social from "../../assets/social-eyes.gif"

export default function ProjectCard() {
    return (
        <div className="project-card">
            <img className="project-card-image" src={social} alt="social-eyes" />
            <h4 className="project-card-header">Social Eyes</h4>
            <p className="project-card-text">social app that allow you to connect with people all over the world.</p>
        </div>
    )
}
