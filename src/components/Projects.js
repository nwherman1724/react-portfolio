import React from 'react';
import './Projects.css';
import './Project1.js';
import './Project2.js';

function Projects() {
    return (
        <div>
            <div class="projHead" id="Apps">
            <h2>What I'm Working On</h2>
          </div>
          <Project1 />
          <Project2 />
        </div>
    )
}

export default Projects;