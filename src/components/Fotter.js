import "./FotterStyles.css"
import React from 'react'
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Fotter = () => {
  return (
    <div className="Fotter">
        <div className="Fotter-container">
            <div className="left">
                <div className="location">
                    <h4><FaHome size={20} style={{color:"white",marginRight:"2rem"}} /></h4>
                    <div>
                        <p>House number 5, Manjunath Nagar Next to tejaswini bar , opposite Nitesh Apartment , Raghuvanhalli-560062</p>
                        <p>Banglore</p>
                    </div>
                </div>
                <div className="Phone">
                    <h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>8341735406</h4>
                </div>
                <div className="Mail">
                    <h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}} />haarvish@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About My Self</h4>
                <p>This is me Haarvish Chevula.I enjoy learning new tech in web3 and blockchain.</p>
                <div className="Social">
                    <FaTwitter size={20} style={{color:"white",marginRight:"2rem"}} />
                    <FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}} />
                    <FaInstagram size={20} style={{color:"white",marginRight:"2rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fotter