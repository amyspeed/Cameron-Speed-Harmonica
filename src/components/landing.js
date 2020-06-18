import React, {useState, useEffect} from 'react';
import MailChimpSignUp from'./mailChimpSignUp';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import smoothscroll from 'smoothscroll-polyfill';

import './landing.css';


// kick off the polyfill!
smoothscroll.polyfill();


const Landing = () => {
    const [chevronScrolledUp, setToTop] = useState(false);
    const [hideChevron, setChevronHide] = useState(false);

    const scrollDownClick = (e) => {
        e.preventDefault();
        if (!chevronScrolledUp) {
            window.scrollBy({top: Number(window.innerHeight - 250), behavior: 'smooth'});
        }
        else {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", yOffsetForChevron)
        return () => {
            window.removeEventListener("scroll", yOffsetForChevron)
        }
    });

    const yOffsetForChevron = () => {
        if (window.pageYOffset < 300 && chevronScrolledUp) {
            setToTop(false);
        }
        else if (window.pageYOffset >= 300 && !chevronScrolledUp) {
            setToTop(true);
        }
        else if (window.pageYOffset >= Number(window.innerHeight - 235) && !hideChevron) {
            setChevronHide(true);
        }
        else if (window.pageYOffset < Number(window.innerHeight - 235) && hideChevron) {
            setChevronHide(false);
        }
    }

    return(
        <div className="landing">
            <div className="overlay"></div>
            <div className="hero"></div>
            <div className="content">
                <div className="text-box text-box-landing">
                    <div className="row">
                        <div className="chevron-box" onClick={scrollDownClick}>
                            <FontAwesomeIcon icon={ chevronScrolledUp ? faChevronDown : faChevronUp } color={ hideChevron ? 'rgba(0,0,0,0)' : 'white' } id="chevron" />
                        </div>
                        <div className="header-box">
                            <h2>Cameron Speed | Harmonica</h2>
                        </div>
                        <div className="welcome-txt">
                            <p>You've arrived in the prime location if you are in need of an experienced, professional harmonica player.&nbsp;
                                Cameron is available now for <Link className="welcome-link" to='/live'>LIVE shows</Link> and&nbsp;
                                <Link className="welcome-link" to='/record'> Remote recordings</Link>.&nbsp;
                                <Link className="welcome-link" to='/contact'> Contact</Link> him directly for details.<br/>
                                <br/>Who is Cameron? <Link className="welcome-link" to='/about'>Find out here</Link> and <Link className="welcome-link" to='/media'>listen here</Link>!
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-6">
                    <h2>Cameron recorded so prettylike on my album <br/> -anonymous</h2>
                    <h2>My song went to number 1 because of cameron <br/> -anonymous</h2>

                    </div>
                    <div className="col-6">
                        <div>
                            <img style={{width : '50%', marginLeft : 'auto', marginRight : 'auto'}} src={require("../images/cash-app.png")} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <img style={{width : '50%', marginLeft : 'auto', marginRight : 'auto'}} src={require("../images/cash-app.png")} />
                        </div>
                    </div>
                    <div className="col-6">
                        <h2>Cameron plays like a goddess live. Sweet and smooth. <br/> -anonymous</h2>
                    </div>
                </div>
                <div className="text-box text-box-landing">
                    <div className="row">
                        <h2>Upcomming Events</h2>
                        <p>Bands in town API??</p>
                    </div>
                </div> */}
                <div className="text-box text-box-landing">
                    <div className="row">
                        <div className="header-box">
                            <h2>Join The Email List</h2>
                        </div>
                        <MailChimpSignUp />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing;