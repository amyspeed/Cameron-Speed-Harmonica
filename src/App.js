import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Landing from './components/landing';
import About from './components/about';
import Pricing from './components/pricing';
import Media from './components/media';
import Contact from './components/contact';
import LiveBooking from './components/liveBooking';
import RecordingBooking from './components/recordingBooking';
import Reviews from './components/reviews';

import './App.css';
import './float-grid.css';

class App extends Component {

  componentDidMount() {
    this.isCookieSupported();
  }

  // This function allows for cookies from the facebook pixel (HTML head), but not the media iframes yet (media.js)
  isCookieSupported = () => {
    let cookieEnabled = window.navigator.cookieEnabled;
    if (cookieEnabled) {
        document.cookie = `testcookie=testcookie`;
        cookieEnabled = document.cookie.indexOf(`testcookie=testcookie`) !== -1;
        if (!cookieEnabled) {
            document.cookie = `testcookie=testcookie; SameSite=None; Secure`;
            cookieEnabled =
                document.cookie.indexOf(`testcookie=testcookie`) !== -1;
        }
    }
    return cookieEnabled;
  };

  render() {
    return(
      <div className="app">
        <BrowserRouter>
        <NavBar/>
        <main role="main">
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/live" component={LiveBooking} />
            <Route exact path="/record" component={RecordingBooking} />
            <Route exact path="/reviews" component={Reviews} />
        </main>
        <Footer />
        </BrowserRouter>
      </div>
    )
  }

}

export default App;

