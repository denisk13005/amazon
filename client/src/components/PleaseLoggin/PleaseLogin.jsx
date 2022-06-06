import React from "react"
import { NavLink } from "react-router-dom"
import "./pleaseLogin.scss"

const PleaseLogin = () => {
  return (
    <div className="pleaseLog">
      <p>You re not logged</p>
      <NavLink to="/">Please Connect</NavLink>
    </div>
  )
}

export default PleaseLogin
