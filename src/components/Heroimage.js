import "./HeroimageStyle.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
            <div className="content">
                <p>HI,I AM A.</p>
                <h1>BLOCKCHAIN DEVELOPER IN WEB3</h1>
                <div>
                    <Link to="/Project" className="btn">PROJECTS</Link>
                    <Link to="/Contact" className="btn-light">CONTACT</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Heroimage