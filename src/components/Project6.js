import React from 'react';
import './Card.css';
import Card from './Card';
import Logo from '../img/team-profile-generator-sm.png'

function Project6() {
    return (
        <Card 
        title="Team Profile Generator" 
        desc="This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person."
        image={ Logo }
        github="https://github.com/nwherman1724/team-profile-generator"/>
        
    )
}

export default Project6;