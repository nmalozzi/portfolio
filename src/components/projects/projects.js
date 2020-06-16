import React from "react"
import PropTypes from "prop-types"
import Image from "../image/image"
import style from "./projects.module.scss"

const Projects = ({ projects }) => {
  return (
    <ul>
      {projects.map(project => (
        <li key={project.title} className={style.project}>
          <div className={style.details}>
            <h5>{project.title}</h5>
            <p className={"small"}>{project.description}</p>
            {project.tags.map(tag => (
              <span key={tag} className={style.tag}>{tag}</span>
            ))}
          </div>
          <div className={style.image}>
            <Image/>
          </div>
        </li>
      ))}
    </ul>
  )
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default Projects
