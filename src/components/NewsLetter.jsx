import React from 'react';


function NewsLetter() {
    return (  
        <div className = "newsletter-container newsletter-mobile">
            <div className = "newsletter-div">
            <h1 className='newsletter-mobile-h1'>Join our Community Now!</h1>
            <p>Access to our online booking service and Newsletter</p>
            </div>
            <a
            href="https://app.upperhand.io/accounts/new_user?customer_id=1047"
            target="_blank"
            rel="noopener noreferrer"
            style = {{textDecoration: "none"}}
            className='ahref-newsletter'
          >
            <button className = "signup-btn new-signup-btn">SIGN UP</button>
          </a>
        </div>
    );
}

export default NewsLetter;