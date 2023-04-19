import React from 'react'
import Navbar from '../components/Navbar'
import Fotter from '../components/Fotter'
import Heroimage2 from '../components/Heroimage2'
import CONTACT from '../components/connect'
const Contact = () => {    
  return (
    <div>
        <Navbar />
        <Heroimage2 heading="CONTACT." text="Lets Connect" />
        <CONTACT />
        <Fotter />
    </div>
  )
}

export default Contact