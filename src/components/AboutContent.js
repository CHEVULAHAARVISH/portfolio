import "./AboutContentStyles.css"
import React from 'react'
import {Link} from "react-router-dom"
import NEWIMG from "./../assets/NRWWWWW.jpg"


const AboutContent = () => {
  return (
    <div className="About">
        <div className="left">
            <h1>WHO AM I ?</h1>
            <p>I'm Chevula Haarvish pursuing a degree in Robotics and Automation. Have strong understanding in python, computer vision. Passionate to become blockchain developer. </p>
            <Link to="/Contact">
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="imgContainer">
                <div className="img-stack-top">
                    <img src={NEWIMG} alt="CV"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent