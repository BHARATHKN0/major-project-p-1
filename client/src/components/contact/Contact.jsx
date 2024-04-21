import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import Footer from '../footer/Footer';


const Contact = () => {


  const formRef = useRef();
  const [done, setDone] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    // Check if any required fields are empty
    let hasEmptyFields = false;
    formData.forEach((value, key) => {
      if (!value.trim()) {
        hasEmptyFields = true;
      }
    });

    if (hasEmptyFields) {
        setErrorMessage('Please fill in all fields.');
        return;
      }



    emailjs.sendForm('service_94avhq4', 'template_hjamuyn', formRef.current, { publicKey: 'tdyh38zb1CSSe5j6_', })
      .then((result) => {
          console.log(result.text);
          setDone(true);
          setErrorMessage('');
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
    <div className='head'>
        <span>User feedback is valuable please reach out us for improvements</span>
    </div>
    <div className='contact-form' id='Contact'>
        <div className='w-left'>
            <div className="awesome">
                <span>Get In Touch</span>
                <span style={{ color: "orange" }} >Contact Us</span>
                <div className='blur s-blur1' style={{background:"orange"}}></div>
            </div>
        </div>
      
      <div className="c-right">
        <form ref={formRef} onSubmit={sendEmail}>
            <input type='text' name="user_name" className='user' placeholder='Name'/>
            <input type='email' name="user_email" className='user' placeholder='Email'/>
            <textarea name='message' className='user' placeholder='Message' />
            <input type='submit' value="Send" className='button' />
            {errorMessage && <span className="error-message">{errorMessage}</span>}

            {done && <span className="success-message">Thanks for contacting me!</span>}

            <div className='blur c-blur1' style={{background:"purple"}}></div>


        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact
