import React from 'react';
import './Card.css';
import Card from './Card';
import Placeholder from '../img/placeholder_img.png'

function Project5() {
    return (
        <Card 
        title="Project5" 
        desc="Here is the projects description!"
        image={ Placeholder }
        github=""/>
    )
}

export default Project5;