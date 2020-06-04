import React from 'react'

import './Portfolio.style.scss'

import ProjectCard from '../../components/ProjectCard/ProjectCard.component'

import socialEyes from "../../assets/social-eyes.gif";
import gamerStore from "../../assets/gamer-store.gif"
import habbits from "../../assets/habbits.png"

export default function Portfolio() {
    return (
        <div className='portfolio-page'>
            <ProjectCard name="Social Eyes" description="social app that allow you to connect with people all over the world." img={socialEyes} />
            <ProjectCard name="Gamer Store" description="e-commerce online store for manage and selling video games." img={gamerStore} />
            <ProjectCard name="Habbits" description="Mobile app to help you build good habbits." img={habbits} />
        </div>
    )
}
