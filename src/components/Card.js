import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Card(props) {
    return (
        <div className="deck">
            <div className="card center">
                <div id="cardTitle">
                  <h3>{props.title}</h3>
                </div>
                <img src= {props.image} width="350px" alt=" image cap"/>
                <div className="center">
                   <p className="card-text">{props.desc}</p>
                   <a href={props.github} target="_blank"  className="link card-link"><FontAwesomeIcon icon={faGithub} size= "3x" className="center link" /></a>
                </div>
            </div>
        </div>
    )

{/* <i className="fa-brands fa-github fa-2x center link"></i> */};
    }
export default Card;