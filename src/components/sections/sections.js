import React from "react"
import PropTypes from "prop-types"
import Projects from "../projects/projects"
import style from "./sections.module.scss"

const Sections = ({ sections }) => {
  return (
    <div>
      {sections.map(section => (
        <section key={section.title} className={style.section}>
          <h1 className={section.color}>{section.title}</h1>
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
          <Projects projects={section.projects}/>
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
