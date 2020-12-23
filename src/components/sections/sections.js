import React from "react"
import PropTypes from "prop-types"
import Projects from "../projects/projects"
import style from "./sections.module.scss"
import ResumeItems from "../reesumeItems/resumeItems"

const Sections = ({ sections }) => {
  return (
    <div className={style.sections}>
      {sections.map(section => (
        <section
          id={section.title.replace(/ /g, "")}
          key={section.title.replace(/ /g, "")}
          className={style.section}
        >
          <h2 className={section.color}>{section.title}</h2>
          {section.about && <p>{section.about}</p>}
          {section.projects && <Projects projects={section.projects}/>}
          {section.jobs && <ResumeItems items={section.jobs}/>}
          {section.schools && <ResumeItems items={section.schools}/>}
          {section.skills &&
          <ul className={style.skills}>
            {section.skills.map(skill => (
              <li className={style.skill}>
                <span className={style.skillIcon}>
                  <img src={"../../icons/" + skill.replace(/ /g, "") + ".svg"} alt={skill + " Icon"}/>
                </span>
                <span className={style.skillName}>{skill}</span>
              </li>
            ))}
          </ul>
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
