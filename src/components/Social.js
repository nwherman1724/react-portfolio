import React from 'react';
import './Social.css';


function Social() {

    return (
        <div class="contact-top">
        {/* <!-- <button class="button button-link mobile-button">Contact Me</button> --> */}
        <ul>
          <li><a href="https://github.com/nwherman1724" target="_blank"><i class="fa-brands fa-github"></i> Github</a></li>
          <li class="phone"><a href="#" class="phone"><i class="fa-solid fa-phone"></i> (586) 201-5443</a></li>
          <li class="email"><a href="mailto:nwherman1724@gmail.com" class="email"><i class="fa-solid fa-envelope"></i> nwherman1724@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/nwherman1724/" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
        </ul>            
      </div>  
    )

}

export default Social;