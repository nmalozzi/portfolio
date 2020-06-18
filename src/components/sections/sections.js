import React from "react"
import PropTypes from "prop-types"
import Projects from "../projects/projects"
import style from "./sections.module.scss"
import ResumeItems from "../reesumeItems/resumeItems"

const Sections = ({ sections }) => {
  return (
    <div>
      {sections.map(section => (
        <section key={section.title} className={style.section}>
          <h1 className={section.color}>{section.title}</h1>
          {section.about &&
          <p>{section.about}</p>
          }
          {section.projects &&
          <Projects projects={section.projects}/>
          }
          {section.jobs &&
          <ResumeItems items={section.jobs}/>
          }
          {section.schools &&
          <ResumeItems items={section.schools}/>
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
