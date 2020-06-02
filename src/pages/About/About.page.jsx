import React from 'react';

import "./About.style.scss";

import nour from "../../assets/profile with strokes.png";

export default function About() {
    return (
        <div className="about-page">
            <div className="left">
                <span className="left-header">about me</span>
                <span className="left-title">I'm a full stack web developer based in Tokyo, Japan.</span>
                <span className="left-text">I enjoy turning complex problems into simple ones. When I'm not coding, you'll find me learning Japanese, playing video games or working out in the park.</span>
            </div>
            <div className="right">
                <img className="about-image" src={nour} alt="Nour" />
            </div>
        </div>
    )
}
