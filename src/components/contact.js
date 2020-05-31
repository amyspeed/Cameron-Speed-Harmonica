import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './contact.css';

const Contact = () => {
    return(
        <div>
            <div className="page-content">
                <a className="send-link-wrap" href="mailto:cameron.l.speed@gmail.com?subject=Mail from Website">
                    <FontAwesomeIcon icon={faPaperPlane} className="plane-icon" />
                </a>
                {/* <form>

                </form> */}
            </div>
        </div>
    )
}

export default Contact;