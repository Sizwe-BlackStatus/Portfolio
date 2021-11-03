import React from "react";
import "./ProjectCard.css";

function ProjectCard({project}) {
  return (
      <div className="card-container">
        <h3 className="project-name">{project.project_name}</h3>
        <p className="project-type">{project.type}</p>
        <img src={project.project_image} alt={project.project_name} />
      </div>
  );
}

export default ProjectCard;
