import React from 'react';
import { Link } from 'react-router-dom';

import './about.css';

const About = () => {
    return(
        <div>
            <div className="overlay"></div>
            <div className="chisolm"></div>
            <div className="page-content about">
                <div className="row">
                    <div className="col-12">
                        <div className="text-box">
                            <h2>About</h2>
                            <p>Cameron hails from Ransom Canyon, just outside of Lubbock, TX. He has been playing harmonica professionally for over 10 years within the state of Texas, and across the United States. While living in Lubbock, he studied music education in voice at Texas Tech University, and Audio Engineering at South Plains College.

                                <br/><br/>While playing with a wide range of artists, Cameron’s progressive tone and versatility developed through exposure to genres ranging from Blues, Country, Soul, R&B, Hip Hop, Folk, Bluegrass, and even a little Metal. Some of those artists include: Tyler Walker and Them Chisolm Folks, Kerri Lick, Thomas Napp for President, Leighton Fields, Dayz Wasted, Garrett Bryan, Billy Hartman, and many more.

                                <br/><br/>In studio, Cameron has recorded with many artists including Zac Stokes, James Cook, Shea Abshier & The Nighthowlers, Josh Vincent, Them Chisolm Folks and Kerri Lick.

                                <br/><br/>Currently residing in Austin with his wife and fur babies, Cameron travels anywhere and everywhere for the love of playing music. He also works days as a massage therapist and occasionally runs live sound by night when he isn't playing.
                                <br/><br/>
                                Find out more about <Link className="welcome-link" to='/live'>booking live</Link> and&nbsp;
                                <Link className="welcome-link" to='/record'>remote recordings</Link>,&nbsp;
                                or <Link className="welcome-link" to='/media'>listen to some examples of work</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;