import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './navBar.css';

const NavBar = () => {
    const [logoSmaller, setLogoSmaller] = useState(false);
    let location = useLocation();
    const [pathname, setPathname] = useState('/');

    useEffect(() => {
        console.log(pathname)
        setPathname(location.pathname)
      }, [location]);

    useEffect(() => {
        // If on the landing page, the logo size depends on scroll location
        console.log(pathname);
        if (pathname === '/') {
            setLogoSmaller(false);
            window.onscroll = () => logoSizeByScroll();
        }
        // If on any other page, the logo should be smaller
        else {
            console.log('Shrink logo NOW!!')
            setLogoSmaller(true);
        }
    }, [pathname]);

    const logoSizeByScroll = () => {
        // If at the top of the landing page, DON'T make the logo smaller
        if (window.pageYOffset < 90) {
            console.log('dont shrink logo!!')
                setLogoSmaller(false);
        }
        // If not at the top of the landing page, make the logo smaller
        else if (window.pageYOffset >= 90) {
            console.log('Shrink logo NOW!!')
            setLogoSmaller(true);
        }
    };

    return(
        <nav>
            <Link to='/'>
                <img src={require('../images/sig-logo.png')} className={ logoSmaller ? "signature-logo smaller" : "signature-logo" } />
            </Link>
            {/* <Link to='/about'><li>about</li></Link>
            <Link to='/contact'><li>contact</li></Link>
            <Link to='/live'><li>book live</li></Link>
            <Link to='/record'><li>book recording</li></Link>
            <Link to='/media'><li>media</li></Link>
            <Link to='/pricing'><li>pricing</li></Link>
            <Link to='/reviews'><li>reviews</li></Link> */}
        </nav>
    )
}

export default NavBar;