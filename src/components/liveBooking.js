import React from 'react';
import { Link } from 'react-router-dom';

import './liveBooking.css';

const LiveBooking = () => {
    return(
        <div>
            <div className="overlay"></div>
            <div className="background-live"></div>
            <div className="page-content">
                <div className="row">
                    <div className="col-12">
                        <Link className="link" to={{ pathname: "/contact", state: { fromLive: true } }}>
                            <div className="text-box text-box-link">
                                <h2>Live Booking</h2>
                                <p>I would love to play in your show! Pricing will vary depending on travel and other factors. Please click here to book a live show.</p>
                            </div>
                        </Link>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default LiveBooking;