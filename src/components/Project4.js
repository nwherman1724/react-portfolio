import React from 'react';
import './Card.css';
import Card from './Card';
import Placeholder from '../img/placeholder_img.png'

function Project4() {
    return (
        <Card 
        title="Rate My Pet" 
        desc="This is a full-stack web application for users with pets who are able to log in and create a profile for their pet. They are able to rate their own pet along with being able to rate and view other user's pets."
        image={ Placeholder }
        github="https://github.com/nwherman1724/rmp"/>
    )
}

export default Project4;