import React, { Component } from 'react';
import YouTube from 'react-youtube';

import './media.css'

class YoutubePlayer extends Component {
    videoOnReady(e) {
        e.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '290',
            width: '100%',
            playerVars: {
                autoplay: 0,
                // color of progess bar:
                color: 'white'
            }
        }

        return (
            <YouTube 
                videoId = {this.props.videoId}
                opts={opts}
                onReady = {this.videoOnReady}
                className = 'youtube'
            />
        )
    }
}

export default YoutubePlayer;