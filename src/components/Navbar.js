import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"

const Navbar = () => {
    const[click,setClick] =useState(false);
    const handleclick = () => setClick(!click);
    const[color,setColor] = useState(false);
    const changecolor = () => {
        if(window.scrollY>=50){
            setColor(true);
        }else {setColor(false);}  
    }
    window.addEventListener("scroll",changecolor);
    return (
        <div className={color ? "header header-bg":"header"}>
            <Link to="/">
                <h1>PORTFOLIO</h1>
            </Link>
            <ul className={click ? "Nav-Menu1":"Nav-Menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>  
                </li>    
                <li>
                    <Link to="/Project">Project</Link>
                </li>        
            </ul>
            <div className="hamburger" onClick={handleclick}>
                {click ? (<FaTimes size={30} style={{color:"#fff"}} />):
                 (<FaBars size={30} style={{color:"#fff"}} />)}
            </div>
        </div>
    )
}

export default Navbar