import "./FotterStyles.css"
import React from 'react'
import {FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import {Link} from "react-router-dom"

const CONTACT = () => {
  return (
    <div className="CONACT">
        <div className="CONTACT-container">
            <div className="left">
                <div className="location">
                    <h4><FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}} /></h4>
                    <div>
                    <p>
                        <Link to="https://www.linkedin.com/in/chevula-haarvish/" className="btn" >CHEVULA HAARVISH</Link>
                    </p>
                    </div>
                </div>
                <div className="location">
                    <h4><FaTwitter size={20} style={{color:"white",marginRight:"2rem"}} /></h4>
                    <div>
                    <p>
                        <Link to="https://twitter.com/haarvish" className="btn" >CHEVULA HAARVISH</Link>
                    </p>
                    </div>
                </div>
                <div className="location">
                    <h4><FaGithub size={20} style={{color:"white",marginRight:"2rem"}} /></h4>
                    <div>
                    <p>
                        <Link to="https://github.com/CHEVULAHAARVISH" className="btn" >CHEVULA HAARVISH</Link>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CONTACT
