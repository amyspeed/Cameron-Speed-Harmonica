import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Landing from './components/landing';
import About from './components/about';
import Pricing from './components/pricing';
import Media from './components/media';
import Contact from './components/contact';
import LiveBooking from './components/liveBooking';
import RecordingBooking from './components/recordingBooking';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="app">
        <NavBar/>
        <main role="main">
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/live" component={LiveBooking} />
            <Route exact path="/record" component={RecordingBooking} />
        </main>
      </div>
    )
  }

}

export default App;

