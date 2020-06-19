import PropTypes from "prop-types"
import React, { useState } from "react"
import Nav from "../nav/nav"
import Legal from "../legal/legal"
import nick from "../../nick"
import style from "./header.module.scss"

const Header = ({ siteData }) => {
  const [navExpanded, toggleNavExpand] = useState(false)
  return (
    <div>
      <header className={style.header} data-open={navExpanded}>
        <h1 className={style.hidden}>
          {siteData.author + " | " + siteData.title}
        </h1>
        <h2 className={style.hidden}>{siteData.description}</h2>
        <Nav navItems={nick.navigableData} />
        <div className={style.finePrint}>
          <Legal />
        </div>
      </header>
      <svg
        className={style.hamburgerMenuIcon}
        onClick={() => toggleNavExpand(!navExpanded)}
        data-rotate={navExpanded}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 90 87"
      >
        <title>Hamburger Menu Icon</title>
        <path d="M0 0h90v15H0zM0 36h90v15H0zM0 72h90v15H0z" />
      </svg>
    </div>
  )
}
Header.propTypes = {
  siteData: PropTypes.object,
}
export default Header
