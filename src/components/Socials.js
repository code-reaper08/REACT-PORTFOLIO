import React from 'react'
import glogo from '../assets/github.png'
import llogo from '../assets/linkedin.png'

const Socials = () => {
    return (
        <div id="wrap" className="container">
          <div className="container">
  <div className="row">
    <div id="colu2" className="col">
      <a href="https://github.com/code-reaper08"><img className="socialicon" src={glogo} alt="githublogo" /></a>
    </div>
    <div id="colu1" class="col">
      <a href="https://linkedin.com/in/vishwa08/"><img className="socialicon" src={llogo} alt="linkedinlogo" /></a>
    </div>
  </div>
  </div>
</div>
    )
}

export default Socials;