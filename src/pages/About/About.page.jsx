import React from 'react';

import "./About.style.scss";

import nour from "../../assets/IMG_9377.jpg";

export default function About() {
    return (
        <div className="about-page">
            <div className="left">
                <h2>about me</h2>
                <h3>I'm a full stack web developer based in Tokyo, Japan.</h3>
                <p>I enjoy turning complex problems into simple ones. When I'm not coding, you'll find me learning Japanese, playing video games or working out in the park.</p>
            </div>
            <div className="right">
                <img className="about-image" src={nour} alt="Nour" />
            </div>
        </div>
    )
}
