import React, { Component } from 'react';
import YouTube from 'react-youtube';

import './media.css'

class YoutubePlayer extends Component {
    videoOnReady(e) {
        window.YTConfig = {
            host: 'https://www.youtube.com' 
          } 
        e.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '290',
            width: '100%',
            playerVars: {
                autoplay: 0,
                // color of progess bar:
                color: 'white',
                // this origin definition was meant to solve the "Failed to execute 'postMessage' on 'DOMWindow'" error. No luck yet.
                origin: 'http://localhost:3000' || 'https://www.cameronspeed.com',
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