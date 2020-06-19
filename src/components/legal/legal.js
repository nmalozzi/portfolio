import React from "react"
import nick from "../../nick"
import style from "./legal.module.scss"

const fullName = nick.firstName + " " + nick.lastName

const Legal = () => {
  return (
    <div className={style.legal}>
      <svg
        className={style.simplifiedLogoIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 21.4"
      >
        <title>Simplified Logo Icon</title>
        <path d="M19.3 0c-1.5 0-2.9.3-4.3.9-1.4-.6-2.8-.9-4.3-.9C4.8 0 0 4.8 0 10.7s4.8 10.7 10.7 10.7c1.5 0 2.9-.3 4.3-.9 1.4.6 2.8.9 4.3.9 5.9 0 10.7-4.8 10.7-10.7S25.2 0 19.3 0zm-7.5 18.4c-.4.1-.7.1-1.1.1-4.3 0-7.8-3.5-7.8-7.8s3.5-7.8 7.8-7.8c.4 0 .8 0 1.1.1-2.1 2-3.3 4.8-3.3 7.7.1 2.9 1.2 5.7 3.3 7.7zm9.6-7.7c0-2.9-1.2-5.7-3.3-7.7.4-.1.7-.1 1.1-.1 4.3 0 7.8 3.5 7.8 7.8s-3.5 7.8-7.8 7.8c-.4 0-.8 0-1.1-.1 2.1-2 3.3-4.8 3.3-7.7zm-2.9 0c0 2.6-1.3 5-3.5 6.5-2.2-1.4-3.5-3.8-3.5-6.5 0-2.6 1.3-5 3.5-6.5 2.2 1.5 3.5 3.9 3.5 6.5z" />
      </svg>
      <p className={"small"}>
        © {new Date().getFullYear()} {fullName}
      </p>
    </div>
  )
}

export default Legal
