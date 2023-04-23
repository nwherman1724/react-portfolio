import React from 'react';
import './Card.css';
import Card from './Card';
import Logo from '../img/React.webp'

function Project1() {
    return (
        <Card title= "React Portfolio" 
        desc="This is my portfolio developed with React. Click below for the github link."
        image={ Logo }
        github="https://github.com/nwherman1724/react-portfolio"/>
    )
}

export default Project1;