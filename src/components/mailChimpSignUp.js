import React from 'react';
import Mailchimp from 'react-mailchimp-form';

const MailChimpSignUp = () => {
    return (
        <Mailchimp  
                    className='mail-chimp'
                    action='https://cameronspeed.us10.list-manage.com/subscribe/post?u=efa5ed79bae35a177bae93184&amp;id=0711582ad9'
                    fields={[
                        {
                            name: 'FNAME',
                            placeholder: 'First Name',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'LNAME',
                            placeholder: 'Last Name',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'EMAIL',
                            placeholder: 'Email',
                            type: 'email',
                            required: true
                        }
                    ]}
                    messages = {{
                        sending: "Sending...",
                        success: "Thank you for subscribing!",
                        error: "An unexpected internal error has occurred.",
                        empty: "You must write an e-mail.",
                        duplicate: "Too many subscribe attempts for this email address",
                        button: "Subscribe!"
                    }}
        />
    )
}

export default MailChimpSignUp;