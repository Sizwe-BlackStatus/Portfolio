import React from 'react';
import projectList from '../ProjectList';
import ProjectCard from './ProjectCard';
import "./Projects.css"

function Projects() {
    return (
        <div className="project-list-container">
            {projectList.map((project, id) => {
                return (
                    <ProjectCard project={project} key={id}/>
                )
            })}
        </div>
    );
}

export default Projects;