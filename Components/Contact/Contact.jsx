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
    <textarea placeholder='leave me a message!'/>
  </form>

  <div className='link-container'>
    <h1>git</h1>
    <h1>linkdin</h1>
    <h2>instagram</h2>
  </div>
  </>
 )
}

export default Contact