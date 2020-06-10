import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "../nav/nav"
import nick from "../../nick"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">{siteTitle}</Link>
    <Nav navItems={nick.navigableData} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
