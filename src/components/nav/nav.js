import React from "react"
import PropTypes from "prop-types"
import style from "./nav.module.scss"
import scrollTo from "gatsby-plugin-smoothscroll"

const Nav = ({ navItems }) => {
  return (
    <nav className={style.nav}>
      <ul>
        {navItems.map(item => (
          <li
            key={item.title.replace(/ /g, "")}
            onClick={() => scrollTo("#" + item.title.replace(/ /g, ""))}
            className={item.color}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className={style.socialLinks}>
        <a
          href="https://www.linkedin.com/in/nick-malozzi/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className={style.socialIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>LinkedIn Icon</title>
            <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z" />
          </svg>
        </a>
        <a href="https://github.com/nmalozzi" target="_blank" rel="noreferrer">
          <svg className={style.socialIcon} viewBox="0 0 24 24">
            <title>GitHub Icon</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a href="https://codepen.io/nmalozzi" target="_blank" rel="noreferrer">
          <svg
            className={style.socialIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Codepen Icon</title>
            <path d="M5.9 10.9v2.2L7.5 12zM11.4 9.4v-3l-5 3.3 2.2 1.5zM17.6 9.7l-5-3.3v3l2.8 1.8zM6.4 14.3l5 3.3v-3l-2.8-1.8zM12.6 14.6v3l5-3.3-2.2-1.5zM12 10.5L9.7 12l2.3 1.5 2.3-1.5z" />
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm7.4 14.3v.2L12.6 19c-.1.1-.2.1-.4.1-.1 0-.2 0-.4-.1L5 14.5v-.1V9.7v-.1-.1L11.8 5c.2-.1.5-.1.7 0l6.8 4.5v4.8z" />
            <path d="M18.1 13.1v-2.2L16.5 12z" />
          </svg>
        </a>
        <a href="mailto:nick@malozzi.codes" target="_blank" rel="noreferrer">
          <svg
            className={style.socialIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
          >
            <title>Email Icon</title>
            <path d="M667 512l276-276q81 127 81 276t-81 276zM119 184q72-86 174.5-135T512 0t218.5 49T905 184L512 577zM81 788Q0 661 0 512t81-276l276 276zm321-231l71 72q6 5 15.5 8t16.5 3h7q26 1 39-11l71-72 283 283q-72 86-174.5 135T512 1024t-218.5-49T119 840z" />
          </svg>
        </a>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  navItems: PropTypes.array.isRequired,
}

export default Nav
