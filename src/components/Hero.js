import React from 'react';
import './Hero.css';

function Hero () {
    return (
        
        <div class="hero-image">
            <div class="hero-text">
            <h1>I'm <span class="name">Nick.</span> Front-End Developer.</h1>
            <div class="spacer"></div>
            </div>
            <figure>
                <img class="portrait" src="../img/Take2.png" alt="Man with baby"/>
            </figure>
        </div>
      
    );
}

export default Hero;