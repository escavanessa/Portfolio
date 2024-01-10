import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className='hero-wrapper'>
        <h1 className='hero-title'>Hi! I'm <span className='hero-name'>Vanessa</span></h1>
        <h1>I am a Junior Front End Developer</h1>
        <button className='hero-btn'>Projects</button>
      </div>
    </>
  )
}

export default Hero