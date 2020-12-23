import React from "react"
import PropTypes from "prop-types"
import style from "./projects.module.scss"

const Projects = ({ projects }) => {
  return (
    <ul>
      {projects.map(project => (
        <li key={project.title.replace(/ /g, "")} className={style.project}>
          <div className={style.details}>
            <h5>{project.title}</h5>
            <p className={"small"}>{project.description}</p>
            {project.tags.map(tag => (
              <span key={tag.replace(/ /g, "")} className={style.tag}>
                {tag}
              </span>
            ))}
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
