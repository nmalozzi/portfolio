import PropTypes from "prop-types"
import React, { useState } from "react"
import Nav from "../nav/nav"
import nick from "../../nick"
import style from "./header.module.scss"

const Header = ({ siteData }) => {
  const [navExpanded, toggleNavExpand] = useState(false)
  return (
    <div>
      <header className={style.header} data-open={navExpanded}>
        <h1 className={style.hidden}>{siteData.author + " | " + siteData.title}</h1>
        <h2 className={style.hidden}>{siteData.description}</h2>
        <Nav navItems={nick.navigableData}/>
        <div className={style.finePrint}>
          <svg className={style.simplifiedLogoIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 21.4">
            <title>Simplified Logo Icon</title>
            <path
              d="M19.3 0c-1.5 0-2.9.3-4.3.9-1.4-.6-2.8-.9-4.3-.9C4.8 0 0 4.8 0 10.7s4.8 10.7 10.7 10.7c1.5 0 2.9-.3 4.3-.9 1.4.6 2.8.9 4.3.9 5.9 0 10.7-4.8 10.7-10.7S25.2 0 19.3 0zm-7.5 18.4c-.4.1-.7.1-1.1.1-4.3 0-7.8-3.5-7.8-7.8s3.5-7.8 7.8-7.8c.4 0 .8 0 1.1.1-2.1 2-3.3 4.8-3.3 7.7.1 2.9 1.2 5.7 3.3 7.7zm9.6-7.7c0-2.9-1.2-5.7-3.3-7.7.4-.1.7-.1 1.1-.1 4.3 0 7.8 3.5 7.8 7.8s-3.5 7.8-7.8 7.8c-.4 0-.8 0-1.1-.1 2.1-2 3.3-4.8 3.3-7.7zm-2.9 0c0 2.6-1.3 5-3.5 6.5-2.2-1.4-3.5-3.8-3.5-6.5 0-2.6 1.3-5 3.5-6.5 2.2 1.5 3.5 3.9 3.5 6.5z"/>
          </svg>
          <p className={"small"}>© {new Date().getFullYear()} Nick Malozzi</p>
        </div>
      </header>
      <svg className={style.hamburgerMenuIcon} onClick={() => toggleNavExpand(!navExpanded)} data-rotate={navExpanded}
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 87">
        <title>Hamburger Menu Icon</title>
        <path d="M0 0h90v15H0zM0 36h90v15H0zM0 72h90v15H0z"/>
      </svg>
    </div>
  )
}
Header.propTypes = {
  siteData: PropTypes.object,
}
export default Header
