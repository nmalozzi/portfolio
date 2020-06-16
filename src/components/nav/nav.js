import React from "react"
import PropTypes from "prop-types"
import style from "./nav.module.scss"

const Nav = ({ navItems }) => {
  return (
    <nav className={style.nav}>
      <ul>
        {navItems.map(item => (
          <li key={item.title} className={item.color}>{item.title}</li>
        ))}
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  navItems: PropTypes.array.isRequired,
}

export default Nav
