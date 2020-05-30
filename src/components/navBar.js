import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navBar.css';

class NavBar extends Component {
    render() {
        return(
            <nav>
                <Link to='/'><li>Landing</li></Link>
                <Link to='/about'><li>about</li></Link>
                <Link to='/contact'><li>contact</li></Link>
                <Link to='/live'><li>book live</li></Link>
                <Link to='/record'><li>book recording</li></Link>
                <Link to='/media'><li>media</li></Link>
                <Link to='/pricing'><li>pricing</li></Link>
            </nav>
        )
    }
}

export default NavBar;