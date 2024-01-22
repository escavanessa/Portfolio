import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer-container'>
      <a href='https://github.com/escavanessa'><FaGithub className="f-logo" /></a>
      <a href='https://www.linkedin.com/in/vescamilla/'><FaLinkedin  className="f-logo"/></a>

    </div>
  )
}

export default Footer