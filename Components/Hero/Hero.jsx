import React from 'react'
import './Hero.css'
import 'animate.css'
import bgImage from './../../../Portfolio/public/grad2.mp4'

//style={{ 'backgroundImage': `url(${bgImage})` }}


const Hero = () => {
  return (
    <>
      <div className='hero-wrapper animate__animated animate__fadeIn' id='hero-wrapper' style={{ 'backgroundImage': `url(${bgImage})` }}>
        <h1 className='hero-title typewriter'>Hi! I'm <span className='hero-name'>Vanessa</span></h1>
        <h1 className='hero-h1'>I am a Junior Front End Developer</h1>
        <h1 className='hidden-hero'>This is the mobile version of my website! Scroll down for more.</h1>
        <a href='https://github.com/escavanessa'><button className='hero-btn'>My Github!</button></a>
      </div>
    </>
  )
}

export default Hero