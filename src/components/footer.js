import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from "react-tooltip";

import './footer.css';


const Footer = () => {
    return (
        <footer>
            <ReactTooltip id='toolTip' getContent={(dataTip) => `${dataTip}`} effect="solid"/>
            <div className='icon-wrapper' id="facebook" data-for='toolTip' data-tip='Facebook'>
                <a href="https://www.facebook.com/Cameron-Speed-Harmonica-147359495309180" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} className="awesome-icon" />
                </a>
            </div>
            <div className='icon-wrapper' data-for='toolTip' data-tip='Fiverr'>
                <img className="img-icon" src={require("../images/fiverr.png")} alt="fiverr icon" />
            </div>
            <div className='icon-wrapper' id="youtube" data-for='toolTip' data-tip='Youtube'>
                <FontAwesomeIcon icon={faYoutube} className="awesome-icon" />
            </div>
            <div className='icon-wrapper' id="paypal" data-for='toolTip' data-tip='Paypal'>
                <FontAwesomeIcon icon={faPaypal} className="awesome-icon" />
            </div>
            <div className='icon-wrapper' data-for='toolTip' data-tip='Cash App'>
                <img className="img-icon" src={require("../images/cash-app.png")} alt="cash app icon" />
            </div>
            <div className='icon-wrapper' data-for='toolTip' data-tip='Venmo'>
                <img className="img-icon" src={require("../images/venmo.png")} alt="venmo icon" />
            </div>
            <div className='icon-wrapper' id="mail" data-for='toolTip' data-tip='Contact'>
                <Link to='/contact'><FontAwesomeIcon icon={faEnvelope} className="awesome-icon" /></Link>
            </div>
        </footer>
    )

}

export default Footer;