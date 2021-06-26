import React from 'react'
import avatar from '../assets/avatar2.png';

const Header = () => {
  const onmouseover = () => {
    // console.log("MOUSEZZZ")
    const myname = document.getElementById("Myname");
    console.log(myname.innerText)
    }
    return (
        <header>
          <div id="avatar">
            <img id="avatarimg" src={avatar} alt="" />
          </div>
            <h1 id="Myname" onMouseOver = {onmouseover}  className="display-1">Vishwa.R</h1>
            <p className="sub">a.k.a <span className="h6"><a id="githublink" href="https://github.com/code-reaper08" target="_blank" >code-reaper08</a></span></p>
        </header>
    )
}

export default Header