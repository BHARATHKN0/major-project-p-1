import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import { FaFacebook } from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';
import Wave from '../../Assets/wave.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width: '100%', height: '47vh'}} />
      <div className="f-content">
        <div className='f-icons'>
          <a href='https://in.linkedin.com/school/reva-university/' target='blank'><Linkedin color='white' size='3rem' /></a>
            <a href='https://www.facebook.com/p/REVA-University-Bangalore-100054242540296/' target='blank'><FaFacebook color='white' size='3rem' /></a>
            <a href='https://www.instagram.com/revauniversity_official/' target='blank'><Insta color='white' size='3rem' /></a>
            <a href='https://www.reva.edu.in/' target='blank'><IoMdGlobe color='white' size='3rem' /></a>
        </div>
        <span style={{color: 'white', fontSize: '22px', fontWeight: '600', marginTop: '10px'}}>Thank you for using our website</span>
      </div>
    </div>
  )
}

export default Footer