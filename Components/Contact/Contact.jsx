import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
 return(
  <>
  <h1 id='contact'>Contact me!</h1>
  <form>
    <input placeholder='name'></input>
    <input placeholder='email'></input>
    <textarea />
  </form>
  </>
 )
}

export default Contact