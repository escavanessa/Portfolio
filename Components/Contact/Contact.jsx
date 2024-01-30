import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'




const FormFieldErrorMessage = (props) => {
  return ( 
    <div className="FieldError">{props.msg}</div>
  );
 };




//            <video id='contact-video' autoPlay loop muted ><source src='/grad2.mp4' type='video/mp4'></source></video>
const Contact = () => {
  const form = useRef();
  const [name, setName] = useState({ value: "", isTouched: false, });
  const [email, setEmail] = useState({ value: "", isTouched: false, })
  const [message, setMessage] = useState("")


  // update to set each back to original data values
  const clearForm = () => {
    setName({
      value: "",
      isTouched: false,
    });
    setEmail({
      value: "",
      isTouched: false,
    });
    setMessage("");
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
  }

  const getIsFormValid = () => {
    return (
      validateName() &&
      validateEmail()
    );
  };

  // actually if we move it in here we can just use the state data since its in scope
  // email should match regex
  function validateEmail() {
    let re = /\S+@\S+\.\S+/g;
    return re.test(email.value);
  }

  // name should at least exist lol
  function validateName() {
    return !!name.value;
  }

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
            <input type="text" name="user_name" placeholder='Name'
              className={name.isTouched && !validateName() ? 'invalid-field' : ''}
              value={name.value}
              onChange={(e) => {
                setName({ ...name, value: e.target.value })
              }}
              onBlur={() => {
                setName({ ...name, isTouched: true });
              }}
            />
             {name.isTouched && !validateName() ? (<FormFieldErrorMessage msg={"please enter a valid name"} /> ) : ''}
            
            <input type="email" name="user_email" placeholder='Email' 
             className={email.isTouched && !validateEmail() ? 'invalid-field' : ''}
             value={email.value}
             onChange={(e) => {
                 /*  the spread operator here will combine the whole object
                     with what ever has changed here
                     Its similar to doing this and it combines all three
                     setEmail(Object.assign({}, email, {value: e.target.value}))
                 */
                 setEmail({ ...email, value: e.target.value})
             }}
             onBlur={() => {
                 /*
                     onBlur is called when the user's focus leaves the field

                     So we can set isTouched to true in order to keep track that the
                     user has clicked the field

                     The reason is that we don't want to show the error right away,
                     or when the user is typing, but if the user types something and
                     then leaves the field then we should tell them they messed up
                     and they better fix it. So we can keep track of this with isTouched
                 */
                 setEmail({ ...email, isTouched: true });
             }}
             />
             {/*
                 we can make a conditional variable for the error message.
                 If the field has been touched, and the email isn't valid
                 then show the message, or show nothing if we are good.
             */}
             {email.isTouched && !validateEmail() ? (<FormFieldErrorMessage msg={"Oops! Your email isnt valid."} /> ) : ''}
            
            
            <textarea name="message" placeholder='Talk to me!' />


            <input type="submit" value="Send"  disabled={!getIsFormValid()}/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact