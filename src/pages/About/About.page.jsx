import React from 'react'

import './About.style.scss'

import nour from '../../assets/profile.png'
import bonfire from '../../assets/bonfire.jpg'

import SkillsChart from "../../components/SkillsChart/SkillsChart.component"

export default function About () {
  return (
    <div className='about-page'>
      <div className='about-section'>
        <div className='left'>
          <h2 className='left-header'>about me</h2>
          <h4 className='left-title'>
            I'm a Software Engineer based in Tokyo, Japan.
          </h4>
          <p className='left-text'>
            I enjoy turning complex problems into simple ones. When I'm not
            coding, you'll find me learning Japanese, playing video games or
            working out in the park.
          </p>
        </div>
        <div className='right'>
          <img className='about-image' src={nour} alt='Nour' />
          </div>
          </div>
          <div className='skills-section'>
          <h2>My Skills</h2>
          <SkillsChart />
          </div>
          <div className='facts-section'>
        <div className='left'>
          <img className='about-image' src={bonfire} alt='Nour' />
        </div>
        <div className='right'>
            <h2>Random facts</h2>
            <span>I drink a lot of coffee</span>
            <span>I love coding</span>
            <span>I love problem solving</span>
            <span>When I feel down I play animal crossing</span>
            <span>I want to learn all the 2,136 Kanjis</span>
            <span>Dark Souls is the best game ever</span>
            <span>King Gnu Rocks!</span>
        </div>
      </div>

    </div>
  )
}
