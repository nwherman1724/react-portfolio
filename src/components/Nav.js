import React from "react";
import './Nav.css';

function Nav() {

    return (
        <nav class="navbar">
          <div id="logo"><a href="#">Nick Herman</a></div>
          <ul>
            <li class="middle"><a href="#About">About Me</a></li>
            <li class="middle"><a href="#Apps">Work</a></li>
            {/* <!-- <li class="middle"><a href="#Contact">Contact Me</a></li> --> */}
            <li class="middle"><a href="./assets/N.Herman Resume.pdf" download="Resume">Resume</a></li>
          </ul>
          <a href="#Contact"><button class="right button">Contact Me</button></a>
        </nav>
    )

}

export default Nav;