import React from "react"
import PropTypes from "prop-types"
import * as style from "./resumeItems.module.scss"

const ResumeItems = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.name.replace(/ /g, "")} className={style.item}>
          {item.jobTitle && <h5>{item.jobTitle}</h5>}
          {item.degree && <h5>{item.degree}</h5>}
          {item.startDate && item.endDate && (
            <h6 className={"lightenText"}>
              {item.name + " | " + item.startDate + " - " + item.endDate}
            </h6>
          )}
          {item.graduationDate && (
            <h6 className={"lightenText"}>
              {item.name + " | Graduated: " + item.graduationDate}
            </h6>
          )}
          {item.description && <p className={"small"}>{item.description}</p>}
          {item.linkUrl && (
              <p>
                <a href={item.linkUrl} target="_blank" rel="noreferrer">{item.linkText}</a>
              </p>
          )}
          {item.tags && item.tags.map(tag => (
              <span key={tag.replace(/ /g, "")} className={style.tag}>
              {tag}
            </span>
          ))}
        </li>
      ))}
    </ul>
  )
}

ResumeItems.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ResumeItems
