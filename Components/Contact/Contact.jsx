import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

//            <video id='contact-video' autoPlay loop muted ><source src='/grad2.mp4' type='video/mp4'></source></video>
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7mfy0tf', 'template_p289pyb', form.current, 'P4nyRZJVPiap50XhO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <>
      <div id='contact' className='form-container animate__animated animate__fadeIn'>
        <div className='form-wrapper'>
          <form className='form' ref={form} onSubmit={sendEmail}>
            <h1 className='form-header'>Contact Me!</h1>
            <input type="text" name="user_name" placeholder='Name' />
            <input type="email" name="user_email" placeholder='Email' />
            <textarea name="message" placeholder='message' />
            <input type="submit" value="Send" />
          </form>
        </div>

        <div className='design'>
          <div className='design-wrapper'>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact