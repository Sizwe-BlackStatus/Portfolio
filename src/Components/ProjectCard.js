import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="card-container">
      <a href={project.site}>
        <div className="card">
          <div className="card-text">
            <h3 className="project-name">{project.project_name}</h3>
            <p className="project-type">{project.type}</p>
          </div>
          <div className="card-img">
            <img src={project.project_image} alt={project.project_name} />
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
