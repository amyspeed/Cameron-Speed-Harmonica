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
                <a href="https://www.facebook.com/Cameron-Speed-Harmonica-147359495309180" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} className="awesome-icon" />
                </a>
            </div>
            <div className='icon-wrapper' data-for='toolTip' data-tip='Fiverr'>
                <a href="https://www.fiverr.com/cameronspeed" target="_blank" rel="noopener noreferrer" aria-label="Fiverr">
                    <img className="img-icon" src={require("../images/fiverr.png")} alt="fiverr icon" />
                </a>
            </div>
            <div className='icon-wrapper' id="youtube" data-for='toolTip' data-tip='Youtube'>
                <a href="https://www.youtube.com/channel/UCv_eY0PkGxmh-H3RXNu2X4w" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                    <FontAwesomeIcon icon={faYoutube} className="awesome-icon" />
                </a>
            </div>
            <div className='icon-wrapper' id="paypal" data-for='toolTip' data-tip='Paypal'>
                <a href="https://paypal.me/cameronspeed" target="_blank" rel="noopener noreferrer" aria-label="Paypal">
                    <FontAwesomeIcon icon={faPaypal} className="awesome-icon" />
                </a>
            </div>
            <div className='icon-wrapper' data-for='toolTip' data-tip='Cash App'>
                <a href="https://cash.app/$CameronSpeed" target="_blank" rel="noopener noreferrer" aria-label="Cash App">
                    <img className="img-icon" src={require("../images/cash-app.png")} alt="cash app icon" />
                </a>
            </div>
            <div className='icon-wrapper' data-for='toolTip' data-tip='Venmo'>
                <a href='http://venmo.com/Cameron-speed-1' target="_blank" rel="noopener noreferrer" aria-label="Venmo">
                    <img className="img-icon" src={require("../images/venmo.png")} alt="venmo icon" />
                </a>
            </div>
            <div className='icon-wrapper' id="mail" data-for='toolTip' data-tip='Contact'>
                <Link to='/contact'><FontAwesomeIcon icon={faEnvelope} className="awesome-icon" /></Link>
            </div>
        </footer>
    )

}

export default Footer;