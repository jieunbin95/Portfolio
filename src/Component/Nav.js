import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className="nav-section">
      <div className="intro">
        <h1>
          <span className="frontend">Web Front-end Developer.</span>{" "}
        </h1>
        <h1>
          <span className="name">Vin JIEun.</span>
        </h1>
      </div>

      <div className="sub_menu">
        <div className="home">
          <a href="#home">Home</a>
        </div>
        <div className="about">
          <a href="#about">About</a>
        </div>
        <div className="portfolio">
          <a href="#project">Project</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
