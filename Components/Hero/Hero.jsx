import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <>
      <div className='hero-wrapper' id='hero-wrapper'>
        <h1 className='hero-title'>Hi! I'm <span className='hero-name'>Vanessa</span></h1>
        <h1>I am a Junior Front End Developer</h1>
        <button className='hero-btn'>Contact Me!</button>

      </div>
      <div className='img-container'>
        <span><img src='/bluegirl.png' className='img1'></img></span>
        <span><img src='/heavy green.jpg' className='img2'></img></span>
        <span><img src='/Pierce_90x60.png' className='img3'></img></span>
        <span><img src='/purplegirl.png' className='img4'></img></span>
      </div>
    </>
  )
}

export default Hero