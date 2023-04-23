import React from 'react';
import './Card.css';
import Card from './Card';
import Logo from '../img/JateLogo.png'

function Project2() {
    return (
        <Card 
        title="Jate Text Editor" 
        desc="This is a Progressive Web Application. When you click off the text field it will save what you have written to IndexedDB."
        image={ Logo }
        github="https://github.com/nwherman1724/text-editor"/>
    )
}

export default Project2;