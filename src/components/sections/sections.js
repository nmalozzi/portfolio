import React from "react"
import PropTypes from "prop-types"
import style from "./sections.module.scss"

const Sections = ({ sections }) => {
  return (
    <div>
      {sections.map(section => (
        <section key={section.title}>
          <h1>{section.title}</h1>
          {section.description &&
          <p>{section.description}</p>
          }
          {section.tldr &&
          <p>{section.tldr}</p>
          }
          {section.verbose &&
          <p>{section.verbose}</p>
          }
          {section.available &&
          <h4>{section.available}</h4>
          }
          {section.projects &&
          <div>
            {section.projects.map(project => (
              <div key={project.title}>
                <p>{project.title}</p>
                <p>{project.description}</p>
                <p>{project.imgUrl}</p>
                {project.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            ))}
          </div>
          }

        </section>
      ))}
    </div>
  )
}

Sections.propTypes = {
  sections: PropTypes.array.isRequired,
}

export default Sections
