import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header/header"
import style from "./layout.module.scss"
import Legal from "../legal/legal"

const Layout = ({ children }) => {
  const siteData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <div>
      <Header siteData={siteData.site.siteMetadata} />
      <main className={style.main}>
        {children}
        <footer>
          <Legal />
          <p className={style.gatsby}>
            Built with{" "}
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              Gatsby
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
