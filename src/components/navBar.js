import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import './navBar.css';

const NavBar = () => {
    let location = useLocation();
    let history = useHistory();
    const [logoSmaller, setLogoSmaller] = useState(false);
    const [pathname, setPathname] = useState('');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setPathname(location.pathname)
    }, [location]);

    useEffect(() => {
        // If on the landing page, the logo size depends on scroll location
        console.log(pathname);
        if (pathname === '/') {
            setLogoSmaller(false);
            window.addEventListener("scroll", logoSizeByScroll)
            return () => {
              window.removeEventListener("scroll", logoSizeByScroll)
            }
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

    const closeMenuLink = (path) => {
        setChecked(false);
        history.push(path);
    }

    return(
        <nav>
            <Link to='/'>
                <img src={require('../images/sig-logo.png')} alt="signature logo" className={ logoSmaller ? "signature-logo smaller" : "signature-logo" } />
            </Link>

            <div className="hamburger-container">
                <input type="checkbox" className="toggler" id="toggler" checked={checked} onChange={() => setChecked(!checked)} aria-label="toggle menu" />
                <div className="hamburger">
                    <div className="line"></div>
                </div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li onClick={() => closeMenuLink('/about')}>about</li>
                                <li onClick={() => closeMenuLink('/contact')}>contact</li>
                                <li onClick={() => closeMenuLink('/live')}>live booking</li>
                                <li onClick={() => closeMenuLink('/record')}>remote recording</li>
                                <li onClick={() => closeMenuLink('/media')}>media</li>
                                {/* <li onClick={() => closeMenuLink('/pricing')}>pricing</li>
                                <li onClick={() => closeMenuLink('/reviews')}>reviews</li> */}
                                <li onClick={() => closeMenuLink('/')}>home</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;