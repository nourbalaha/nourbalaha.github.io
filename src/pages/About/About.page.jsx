import React from 'react';

import "./About.style.scss";

import nour from "../../assets/profile.png";

export default function About() {
    return (
        <div className="about-page">
            <div className="left">
                <h2 className="left-header">about me</h2>
                <h4 className="left-title">I'm a Software Engineer based in Tokyo, Japan.</h4>
                <p className="left-text">I enjoy turning complex problems into simple ones. When I'm not coding, you'll find me learning Japanese, playing video games or working out in the park.</p>
            </div>
            <div className="right">
                <img className="about-image" src={nour} alt="Nour" />
            </div>
        </div>
    )
}
