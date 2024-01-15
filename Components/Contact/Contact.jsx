import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'


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
      <div className='form-container'>

        <div className='form-wrapper'>
          <form className='form' ref={form} onSubmit={sendEmail}>

            <input type="text" name="user_name" placeholder='Name' />

            <input type="email" name="user_email" placeholder='Email' />

            <textarea name="message" placeholder='message'/>
            <input type="submit" value="Send" />
          </form>
        </div>

        <div className='design'>
          <h1>some designs</h1>
        </div>
      </div>


      <div className='link-container'>
        <h1>linkedin</h1>
        <h1>Github</h1>
        <h1>Instagram</h1>
      </div>
    </>
  )
}

export default Contact