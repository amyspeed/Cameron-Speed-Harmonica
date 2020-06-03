import React from 'react';

import MailChimpSignUp from'./mailChimpSignUp';

import './landing.css';

const Landing = () => {
    return(
        <div className="landing">
            <div className="overlay"></div>
            <div className="hero"></div>
            <div className="content">
                {/* <div className="text-box">
                    <p>Review</p>
                </div> */}
                <div className="text-box">
                    <div className="row">
                        <h2>Join My Email List</h2>
                        <MailChimpSignUp />
                    </div>
                </div>
                {/* <div className="text-box">
                    <div className="row">

                    </div>
                </div> */}
                {/* <div className="text-box">
                    <p>text</p>
                </div>
                <div className="text-box">
                    <p>text</p>
                </div>
                <div className="text-box">
                    <p>text</p>
                </div>
                <div className="text-box">
                    <p>text</p>
                </div>
                <div className="text-box">
                    <p>text</p>
                </div>
                <div className="text-box">
                    <p>text</p>
                </div>
                <div className="text-box">
                    <p>text</p>
                </div>
                <div className="text-box">
                    <p>text</p>
                </div>
                <div className="text-box">
                    <p>text</p>
                </div> */}
            </div>
        </div>

    )
}

export default Landing;