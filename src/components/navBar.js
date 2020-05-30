import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navBar.css';

class NavBar extends Component {
    render() {
        return(
            <nav>
                <Link to='/'>
                    <img src={require('../images/logo-sig.png')} className="signature-logo" />
                </Link>
                <Link to='/about'><li>about</li></Link>
                <Link to='/contact'><li>contact</li></Link>
                <Link to='/live'><li>book live</li></Link>
                <Link to='/record'><li>book recording</li></Link>
                <Link to='/media'><li>media</li></Link>
                <Link to='/pricing'><li>pricing</li></Link>
                <Link to='/reviews'><li>reviews</li></Link>
            </nav>
        )
    }
}

export default NavBar;