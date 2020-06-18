import React from 'react';
import { Link } from 'react-router-dom';

import './recordingBooking.css';

const RecordingBooking = () => {

    // Cameron has extensive experience in recording sessions with artists throughout Texas. Those artists include Shea Abshier & The Nighthowlers, James Cook, Kerri Lick, Them Chisolm Folks, Zac Stokes and many others.

    // Please click here for media samples
    
    
    
    // With a studio in-home, Cameron is able-and eager-to provide harmonica overdubs to pre-recorded tracks shared online (via email or a share option such as Google Drive). If you are interested in hiring Cameron for remote recording, please contact him here. Serious inquiries only.
    
    
    
    // What Cameron expects from you:
    
    
    
    // *In your initial contact form, the more detail you can provide, the closer the results will be to your needs/wants. You may also opt to trust Cameron’s experience and ear to provide some choices. He will only send you something he thinks sounds great. 
    
    // *Also, please include any demos or links in mp3 or mp4 formats. Before works starts, it must first be approved and Cameron reserves the right to accept or decline all offers. If demos are unavailable, please explain and he will work with you and your individual needs.
    
    // *The budget will be based on the amount of material needed, potential travel if you’re needing my presence in studio, and how many edits/redo’s required. The goal is to be flexible and work within your budget, within reason (having Cameron redo something 10 times will likely not be very cost effective for you, however he strives to get the tracks done to your complete satisfaction). We can negotiate via email before any work starts.
    
    // *Payment will be made through PayPal, Cash App, or Venmo. On a case-by-case basis, a deposit may be required. Otherwise, a test mp3 will be sent to you for approval. Upon approval, payment will be made and then you will receive your session files. Satisfaction guaranteed or Cameron will redo it until you are happy (Again, within reason).
    
    
    
    // What you can expect from Cameron:
    
    
    
    // *Cameron will provide Mono 24bit 44.1kHz wav files with no effects or EQ, with a bit of the master track at the beginning to act as a cue. If you don’t have access to effects or an audio engineer, please let him know and he can maybe add some to save you some effort.
    
    // *He tracks using SM58, Audix D2 or a Shaker Dynamic. The equipment Cameron will use depends on the project.
    
    
    
    // If you’re wanting to add some harp to your tracks, and enjoy working with a professional and friendly musician contact Cameron here and let’s make some great music!
    
    


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
                                <h2>Remote Recording</h2>
                                <p>I have extensive experience in recording sessions with artists throughout Texas. Some of those artists include Shea Abshier & The Nighthowlers, James Cook, Kerri Lick, Them Chisolm Folks, Zac Stokes, and many others.</p>
                                <Link className="welcome-link" to='/media'>Please click here for media samples.</Link>
                                <p>With a studio in-home, I am able and eager to provide harmonica overdubs to pre-recorded tracks shared online (via email or a share option such as Google Drive). If you are interested in remote recording, please <span className="welcome-link">contact me</span>.</p>
                                <p><b>What I request from you:</b></p>
                                <ul>
                                    <li>In your initial contact form, the more detail you can provide, the closer the results will be to your wants and needs. You may also opt to trust my experience and ear to provide some choices. I will only send you something that I think sounds great.</li>
                                    <br/>
                                    <li>Please include any demos or links in mp3 or mp4 formats so that I can review and approve of the work before we begin. (I reserve the right to accept or decline all offers). If demos are unavailable, please explain so I can work with you and your individual needs.</li>
                                    <br/>
                                    <li>The budget will be based on the amount of material requested, potential travel if my presence is needed in studio, and the number of edits/redos required. The goal is to be flexible and work within your budget, within reason (10 redos will likely not be very cost effective. However, I strive to get the tracks to your complete satisfaction). We can negotiate via email before any work starts.</li>
                                    <br/>
                                    <li>Payment can be made through Venmo, Cash App, or PayPal. On a case-by-case basis, a deposit may be required. Otherwise, a test mp3 will be sent to you for approval. When you are satisfied with your test track, you can make your payment and receive your session files. Satisfaction guaranteed, or I will redo your tracks until you are happy (Again, within reason).</li>
                                </ul>
                                <p><b>What you can expect from me:</b></p>
                                <ul>
                                    <li>I will provide Mono 24bit 44.1kHz wav files, with no effects or EQ, and with a bit of the master track at the beginning to act as a cue. If you don’t have access to effects or an audio engineer, please let me know, because I may be able to add some and save you the effort.</li>
                                    <br/>
                                    <li>I track using SM58, Audix D2 or a Shaker Dynamic. The equipment used will depend on the project.</li>
                                </ul>
                                <p>If you want to add harp to your tracks, and you enjoy working with a professional, friendly musician <span className="welcome-link">contact me</span>, and let’s make some great music!</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecordingBooking;