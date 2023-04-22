import React from "react";
import './Nav.css';
import Resume from "../img/N.Herman Resume.pdf"

function Nav() {

    return (
        <nav class="navbar">
          <div id="logo"><a href="#">Nick Herman</a></div>
          <ul>
            <li class="middle"><a href="#About">About Me</a></li>
            <li class="middle"><a href="#work">Work</a></li>
            {/* <!-- <li class="middle"><a href="#Contact">Contact Me</a></li> --> */}
            <li class="middle"><a href={ Resume } download="N.Herman Resume">Resume</a></li>
          </ul>
          <a href="#Contact"><button class="right button">Contact Me</button></a>
        </nav>
    )

}

export default Nav;