import React from 'react';
import './Card.css';
import Card from './Card';
import Logo from '../img/MySQL-Logo.jpg'

function Project5() {
    return (
        <Card 
        title="Employee Tracker" 
        desc="This is an application that uses MySQL to track employees. An inquirer prompt opens on startup that give you options. Based on the option the user selects, a MySQL query will run."
        image={ Logo }
        github="https://github.com/nwherman1724/employee-tracker"/>
    )
}

export default Project5;