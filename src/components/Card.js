import React from 'react';
import './Card.css';
import Placeholder from '../img/placeholder_img.png'

function Card() {
    return (
        <div class="deck">
            <div class="card center">
                <div id="cardTitle">
                  <h3>Title</h3>
                </div>
                <img src= { Placeholder } width="350px" alt=" image cap"/>
                <div class="center">
                   <p class="card-text">Project Description</p>
                   <a href="#" target="_blank"  class="link card-link"><i class="fa-brands fa-github fa-2x center link"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Card;