import React from 'react';
import { Link } from 'react-router-dom';

import './recordingBooking.css';

const RecordingBooking = () => {
    return(
        <div>
            <div className="overlay"></div>
            <div className="background-recording"></div>
            <div className="page-content">
                <div className="row">
                    <div className="col-12">
                        {/* Let's send some state to the email form so we can preload the subject line */}
                        <Link className="link" to={{ pathname: "/contact", state: { fromRecord: true } }}>
                            <div className="text-box text-box-link">
                                <h2>remote recording</h2>
                                <p>I am set up to record tracks for your recording project remotely. Please click here to reach out for more information.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecordingBooking;