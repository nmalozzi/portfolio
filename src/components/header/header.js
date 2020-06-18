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
        <svg className={style.navLogoIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 22">
          <title>Site Logo</title>
          <path
            d="M19.3.2c-1.5 0-2.9.3-4.3.9-1.4-.6-2.8-.9-4.3-.9C4.8.2 0 5 0 10.9c0 5.9 4.8 10.7 10.7 10.7 1.5 0 2.9-.3 4.3-.9 1.4.6 2.8.9 4.3.9 5.9 0 10.7-4.8 10.7-10.7C30 5 25.2.2 19.3.2zm-7.5 18.4c-.4.1-.7.1-1.1.1-4.3 0-7.8-3.5-7.8-7.8s3.5-7.8 7.8-7.8c.4 0 .8 0 1.1.1-2.1 2-3.3 4.8-3.3 7.7.1 2.9 1.2 5.7 3.3 7.7zm9.6-7.7c0-2.9-1.2-5.7-3.3-7.7.4-.1.7-.1 1.1-.1 4.3 0 7.8 3.5 7.8 7.8s-3.5 7.8-7.8 7.8c-.4 0-.8 0-1.1-.1 2.1-2 3.3-4.8 3.3-7.7zm-2.9 0c0 2.6-1.3 5-3.5 6.5-2.2-1.4-3.5-3.8-3.5-6.5 0-2.6 1.3-5 3.5-6.5 2.2 1.5 3.5 3.9 3.5 6.5zM44.4.1h3.2v10.1h-3.2zM94.8 11.8H98v9.9h-3.2z"/>
          <path
            d="M45.1 11.5c-.6 0-1.2.2-1.8.5-.6.3-1.2.7-1.8 1.3-.3-.6-.7-1-1.2-1.3-.5-.3-1.1-.4-1.7-.4-.6 0-1.2.1-1.7.4-.5.2-1 .6-1.5 1V3.2c.3-.2.7-.4 1-.4.3-.1.6-.1.9-.1.4 0 .7.1.9.1.2.1.4.3.5.5.1.2.2.5.2.9s.1.8.1 1.2v4.9h3.2V3.7c0-1.2-.3-2.2-.9-2.8-.7-.6-1.5-.9-2.6-.9-.6 0-1.2.1-1.7.4-.5.2-1.1.6-1.6 1V.1h-3.2v21.6h3.1v-7c.2-.1.5-.3.8-.4.3-.1.6-.2.9-.2.4 0 .7 0 .9.1.2.1.4.3.5.5s.2.5.2.8V21.6h3.2v-7c.4-.2.7-.4.9-.5.3-.1.5-.1.8-.1.4 0 .7 0 .9.1.2.1.4.3.5.5.1.2.2.5.2.8V21.5h3.2v-6.4c0-1.2-.3-2.1-.8-2.8-.5-.5-1.4-.8-2.4-.8zM69.3 11.5c-1.7 0-3 .5-4 1.4-.9.9-1.4 2.2-1.4 3.9 0 1.6.5 2.9 1.4 3.8.9.9 2.3 1.4 4 1.4 1.7 0 3-.5 4-1.4.9-.9 1.4-2.2 1.4-3.8 0-1.6-.5-2.9-1.4-3.8-1-1.1-2.3-1.5-4-1.5zm2 6.7c-.1.4-.3.7-.5.9-.2.2-.4.4-.7.5-.3.1-.5.1-.8.1-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.5-.2-.2-.3-.6-.4-1-.1-.4-.1-.9-.1-1.4 0-.6.1-1.1.2-1.5.1-.4.3-.7.5-.9.2-.2.4-.4.7-.5.2-.1.5-.1.8-.1.3 0 .6.1.8.1.3.1.5.3.7.5.2.2.3.5.4.9.1.4.2.9.2 1.5-.1.8-.1 1.3-.2 1.6zM88.8 19.3l5.1-5.5v-2H85v2.3h4.9l-4.8 5.2h-6l5.1-5.5v-2h-9v2.3h5L75 19.6v2h19v-2.3h-.2zM50.7 9.2c.5.4 1.1.7 1.9.9.7.2 1.5.3 2.4.3.7 0 1.3-.1 1.8-.2s1.1-.3 1.6-.6V6.9H58c-.1.1-.3.2-.4.4-.2.1-.3.3-.5.4-.2.1-.5.2-.8.3-.3.1-.7.1-1.1.1-.9 0-1.5-.2-2-.7-.5-.5-.7-1.2-.7-2.2 0-.9.2-1.6.7-2.2.5-.5 1.1-.8 1.9-.8.4 0 .7 0 1 .1.3.1.5.2.8.3.1.2.3.4.5.5.2.1.3.3.4.4h.4V.8c-.5-.2-1-.4-1.6-.6-.5-.1-1.1-.2-1.7-.2-.8 0-1.5.1-2.2.3-.7.2-1.3.5-1.8.9s-1 1-1.3 1.7c-.3.7-.5 1.5-.5 2.4 0 .9.1 1.6.4 2.3.3.6.7 1.1 1.2 1.6z"/>
          <path
            d="M66.7 10.1h3.7l-3.8-5.6L70.1.3h-3.6l-3.4 4.3V0h-3.2v21.6h3.2V6.9l.8-1.1zM57.7 12.3c-.8-.6-2.1-.8-3.9-.8-.8 0-1.5.1-2.3.2-.8.1-1.3.2-1.6.3v2.4h.3c.3-.1.7-.2 1.3-.4.6-.2 1.1-.3 1.7-.3.9 0 1.5.1 2 .3.4.2.7.6.7 1.1v.1c-.9.1-1.8.1-2.7.2-.9.1-1.6.3-2.2.6-.6.3-1 .6-1.4 1.1-.3.5-.5 1-.5 1.8 0 .9.3 1.6.9 2.2.6.6 1.4.9 2.3.9.4 0 .8 0 1.1-.1.3-.1.7-.2 1-.3.2-.1.5-.2.7-.4.3-.2.5-.3.6-.5v1h3.1V15c.1-1.3-.3-2.1-1.1-2.7zm-1.9 6.8c-.2.2-.5.4-.9.5-.3.1-.6.2-1 .2s-.7 0-.9-.1c-.2-.1-.3-.1-.5-.3-.1-.1-.2-.2-.3-.4 0-.1-.1-.3-.1-.5 0-.3.1-.6.2-.7.2-.2.4-.3.7-.4.3-.1.6-.2 1.1-.2.5-.1 1-.1 1.4-.1v2z"/>
        </svg>
        <Nav navItems={nick.navigableData}/>
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
