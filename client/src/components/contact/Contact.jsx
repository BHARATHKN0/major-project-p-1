import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import Footer from '../footer/Footer';
import Toast from '../Toast/Toast';


const Contact = () => {

  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);


  const formRef = useRef();
  // const [done, setDone] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    // Check if any required fields are empty
    let hasEmptyFields = false;
    const emptyFields = [];
    formData.forEach((value, key) => {
      if (!value.trim()) {
        hasEmptyFields = true;
        emptyFields.push(key);
      }
    });

    if (hasEmptyFields) {
      let errorMessage = '';
      if (emptyFields.includes('user_name')) {
        errorMessage = 'Please fill in your name.';
      } else if (emptyFields.includes('user_email')) {
        errorMessage = 'Please fill in your email.';
      } else if (emptyFields.includes('message')) {
        errorMessage = 'Please fill in your message.';
      }
      setErrorMessage(errorMessage);
      return;
    }

    // Email format validation
const emailRegex = /^[^\s@]+@(gmail\.com|[^@\s]+\.reva\.edu\.in)$/;
const email = formData.get('user_email');
if (!emailRegex.test(email)) {
  setErrorMessage('Please enter a valid email address ending with @gmail.com or @branch.reva.edu.in.');
  return;
}



    emailjs.sendForm('service_94avhq4', 'template_hjamuyn', formRef.current, { publicKey: 'tdyh38zb1CSSe5j6_', })
      .then((result) => {
          console.log(result.text);
          setToastMessage('Thanks for contacting!');
          setShowToast(true);
          setErrorMessage('');
          formRef.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
    <div className='head'>
        <span>Your feedback is valuable please reach out to us for improvements</span>
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

            {/* {done && <span className="success-message">Thanks for contacting!</span>} */}

            <div className='blur c-blur1' style={{background:"purple"}}></div>


        </form>
      </div>
    </div>
    {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}

    <Footer />
    </>
  )
}

export default Contact;
