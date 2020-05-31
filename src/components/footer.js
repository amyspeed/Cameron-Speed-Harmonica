import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './footer.css';


const Footer = () => {
    return (
        <footer>
            <div className='icon-wrapper' id="facebook">
                <a href="https://www.facebook.com/Cameron-Speed-Harmonica-147359495309180" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} className="awesome-icon" />
                </a>
            </div>
            <div className='icon-wrapper'>
                <img className="img-icon" src={require("../images/fiverr.png")} alt="fiverr icon" />
            </div>
            <div className='icon-wrapper' id="paypal">
                <FontAwesomeIcon icon={faPaypal} className="awesome-icon" />
            </div>
            <div className='icon-wrapper'>
                <img className="img-icon" src={require("../images/venmo.png")} alt="venmo icon" />
            </div>
            <div className='icon-wrapper' id="mail">
                <Link to='/contact'><FontAwesomeIcon icon={faEnvelope} className="awesome-icon" /></Link>
            </div>
        </footer>
    )

}

export default Footer;