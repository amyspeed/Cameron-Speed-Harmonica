import React from 'react';

// This library is causing more errors at the moment:
// import YoutubePlayer from './youtubePlayer';

import './media.css'

const Media = () => {
    return(
        <div className="media">
            <div className="overlay"></div>
            <div className="background"></div>
            <div className = "page-content">
                <div className="row iframe-row">
                    <div className="col-6">
                        <iframe title="spotify-playlist" src="https://open.spotify.com/embed/playlist/64RBGUnwoQIyiZU5ubFTsb" width="100%" height="600" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    <div className="col-6">
                        {/* <YoutubePlayer videoId = "ns8TDuY5JK4" />
                        <YoutubePlayer videoId = "9hNphqzw3Tw" /> */}
                        <iframe title="youtube-1" width="100%" height="290" src="https://www.youtube.com/embed/ns8TDuY5JK4" frameBorder="2" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe title="youtube-2" width="100%" height="290" src="https://www.youtube-nocookie.com/embed/9hNphqzw3Tw" frameBorder="2" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Media;