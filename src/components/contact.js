import React, { Component, useEffect } from 'react';

// import Mailchimp from 'react-mailchimp-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import ScaleLoader from 'react-spinners/ScaleLoader';

import './contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            subject2: '',
            message: '',
            firstName: '',
            lastName: '',
            email: '',
            sent: false,
            error: false,
            customSubject: false,
            buttonText: <FontAwesomeIcon icon={faPaperPlane} className="plane-icon" />,
            firstNameWarn: false
        }
    }

    componentDidMount() {
        console.log(this.props.location.state)
        if (this.props.location.state.fromRecord) {
            this.setState({ subject: 'Remote Recording' });
        }
        if (this.props.location.state.fromLive) {
            this.setState({ subject: 'Live Booking' });
        }
    }

    componentDidUpdate() {
        if (this.state.subject === 'other' && !this.state.customSubject) {
            this.setState({ customSubject: true });
        }
        if (this.state.subject !== 'other' && this.state.customSubject) {
            this.setState({ customSubject: false });
        }
    }

    formSubmit = (e) => {
        e.preventDefault();
      
        this.setState({
            buttonText: <ScaleLoader height={25} color={"#FFFFFF"} />
        })
      
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            subject: `[CSHARPS]: ${this.state.customSubject ? this.state.subject2 : this.state.subject}`,
            message: this.state.message
        }

        console.log(data);
        
        fetch('https://cameron-speed-api.herokuapp.com/api/v1', {
        // fetch('http://localhost:8080/api/v1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            mode: 'cors',
            body: JSON.stringify(data)
        })
        .then( res => {
            console.log(res);
            this.setState({ sent: true });
        })
        .catch( () => {
          console.log('Message not sent')
          this.setState({ error: true });
        })
    }

    resetForm = () => {
        this.setState({
            subject: '',
            subject2: '',
            message: '',
            firstName: '',
            lastName: '',
            email: '',
            sent: false,
            error: false,
            customSubject: false,
            buttonText: <FontAwesomeIcon icon={faPaperPlane} className="plane-icon" />
        });
    }

    resetError = () => {
        this.setState({
            sent: false,
            error: false,
            buttonText: <FontAwesomeIcon icon={faPaperPlane} className="plane-icon" />
        });
    }


    render() {
    return(
        <div>
            <div className="overlay-contact"></div>
            <div className="contact-photo"></div>
            <div className="page-content contact-page">
                {/* <a className="send-link-wrap" href="mailto:cameron.l.speed@gmail.com?subject=Mail from Website">
                    <FontAwesomeIcon icon={faPaperPlane} className="plane-icon" />
                </a> */}
                {/* <form>

                </form> */}
                {/* <Mailchimp
                    action='https://cameronspeed.us10.list-manage.com/subscribe/post?u=efa5ed79bae35a177bae93184&amp;id=0711582ad9'
                    fields={[
                        {
                            name: 'EMAIL',
                            placeholder: 'Email',
                            type: 'email',
                            required: true
                        },
                        {
                            name: 'MESSAGE',
                            placeholder: 'Message',
                            type: 'text',
                            required: true
                        },
                    ]}
                /> */}
                <div className="row form-row">
                    { !this.state.sent && !this.state.error ?
                    <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                    <legend><h2>contact</h2></legend>
                        <div className="col-6 form-col">
                            <label className="name" htmlFor="first-name">First Name</label>
                            <br/>
                            <input 
                                onChange={e => this.setState({ firstName: e.target.value})}
                                name="first-name"
                                className="contact-input"
                                type="text"
                                placeholder="First Name"
                                value={this.state.firstName}
                                required
                            />
                        </div>
                        <div className="col-6 form-col">
                            <label className="name" htmlFor="last-name">Last Name</label>
                            <br/>
                            <input 
                                onChange={e => this.setState({ lastName: e.target.value})}
                                name="last-name"
                                className="contact-input"
                                type="text"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                required
                            />
                        </div>
                        <div className="col-12 form-col">
                            <label className="email" htmlFor="email">Your Email</label>
                            <br/>
                            <input 
                                onChange={(e) => this.setState({ email: e.target.value})}
                                name="email"
                                className="contact-input"
                                type="email"
                                placeholder="your@email.com"
                                value={this.state.email}
                                required
                            />
                        </div>
                        <div className="col-12 form-col">
                            <label className="subject" htmlFor="subject">How can I help you?</label>
                            <br/>
                            <select 
                                onChange={e => this.setState({ subject: e.target.value})}
                                name="subject"
                                className="contact-input"
                                value={this.state.subject}
                                required
                            >
                                <option value="" disabled>Select One</option>
                                <option value='Book Live'>Live Booking</option>
                                <option value='Remote Recording'>Remote Recording</option>
                                <option value='other'>Other</option>
                            </select>
                            <br/>
                            { this.state.customSubject ?
                                <input 
                                    onChange={(e) => this.setState({ subject2: e.target.value})}
                                    name="subject2"
                                    className="contact-input"
                                    type="text"
                                    placeholder="Custom Email Subject"
                                    value={this.state.subject2}
                                    required
                                />
                             : null}
                        </div>
                        <div className="col-12 form-col">
                            <label className="message" htmlFor="message">Your Message</label>
                            <br/>
                            <textarea 
                                onChange={e => this.setState({ message: e.target.value})}
                                name="message"
                                className="message"
                                type="text"
                                placeholder="Please write your message here"
                                value={this.state.message}
                                required
                            />
                        </div>
                        <div className="col-12 form-col">
                            <div className="button-container">
                                <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
                            </div>
                        </div>
                    </form> : null }

                    { this.state.sent ? <div>
                        <h2>Thank you, {this.state.firstName}!</h2>
                        <p>Your message has been sent successfully!</p>
                        <div className="button-container">
                            <button onClick={() => this.resetForm()} className="button button-primary">Okay!</button>
                        </div>
                        </div>
                    : null }
                    { this.state.error ? <div>
                        <h2>So Sorry, {this.state.firstName}!</h2>
                        <p>Something went wrong. Please try again.</p>
                        <div className="button-container">
                            <button onClick={() => this.resetError()} className="button button-primary">Okay!</button>
                        </div>
                        </div>
                    : null }
                </div>
            </div>
        </div>
    )
}
}

export default Contact;