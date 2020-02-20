import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"


const Footer = () => (
  <div className='site-footer'>
    <h4 className='text-center'>
      Bavarian-MultiRotor
    </h4>
    <p className='text-center'>Follow Us</p>
    <div className='footer-social-links'>
      <ul className='social-links-list'>
        <li>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='facebook'>
            <FontAwesomeIcon icon={faFacebookF} className='fab fa-2x'/>

          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='twitter'>
            <FontAwesomeIcon icon={faTwitter} className='fa-2x'/>
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='instagram'>
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='linkedin'>
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
