import React from "react"
import PropTypes from "prop-types"
import style from "./resumeItems.module.scss"

const ResumeItems = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.title} className={style.item}>
          {item.jobTitle &&
          <h5>{item.jobTitle}</h5>
          }
          {item.degree &&
          <h5>{item.degree}</h5>
          }
          {item.companyName && item.startDate && item.endDate &&
          <h6 className={"lightenText"}>{item.companyName + " | " + item.startDate + " - " + item.endDate}</h6>
          }
          {item.schoolName && item.graduationDate &&
          <h6 className={"lightenText"}>{item.schoolName + " | Graduated: " + item.graduationDate}</h6>
          }
          {item.description &&
          <p className={"small"}>{item.description}</p>
          }
        </li>
      ))}
    </ul>
  )
}

ResumeItems.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ResumeItems
