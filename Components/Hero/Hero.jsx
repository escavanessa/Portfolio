import React from 'react'
import './Hero.css'
import 'animate.css'
import bgImage from './../../../Portfolio/public/hero2.jpg'

// style={{ 'backgroundImage': `url(${bgImage})` }}


const Hero = () => {
  return (
    <>
      <div className='hero-wrapper animate__animated animate__fadeIn' id='hero-wrapper' style={{ 'backgroundImage': `url(${bgImage})` }}>
        <h1 className='hero-title typewriter'>Hi! I'm <span className='hero-name'>Vanessa</span></h1>
        <h1>I am a Junior Front End Developer</h1>
        <button className='hero-btn'>Contact Me!</button>
      </div>
    </>
  )
}

export default Hero