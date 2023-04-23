import React from 'react';
import './Card.css';
import Card from './Card';
import Logo from '../img/Mongodb.png'


function Project3() {
    return (
        <Card 
        title="Social API Backend" 
        desc="This app is the back-end api for a social network. It utilizes Mongoose, Express.js, and Node.js. This is a CRUD application. The routes can be check on Insomnia."
        image={ Logo }
        github="https://github.com/nwherman1724/socialapi"/>
    )
}

export default Project3;