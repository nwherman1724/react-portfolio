import React from 'react';
import './Card.css';
import Card from './Card';
import Placeholder from '../img/placeholder_img.png'

function Project4() {
    return (
        <Card 
        title="Project4" 
        desc="Here is the projects description!"
        image={ Placeholder }
        github=""/>
    )
}

export default Project4;