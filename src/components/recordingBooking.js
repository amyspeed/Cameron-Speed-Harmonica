import React from 'react';

import { Link } from 'react-router-dom';

const RecordingBooking = () => {
    return(
        <div>
            <div className="page-content">
                <div className="row">
                    <div className="col-12">
                        <Link className="link" to="/contact">
                            <div className="text-box text-box-link">
                                <h2>book remote recordings</h2>
                                <p>I am set up to record tracks for your remotely. Please click here to reach out for more information.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecordingBooking;