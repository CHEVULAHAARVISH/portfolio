import React from 'react'
import Navbar from '../components/Navbar'
import Fotter from '../components/Fotter'
import Heroimage2 from '../components/Heroimage2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
        <Navbar />
        <Heroimage2 heading="ABOUT" text="I am programmer" />
        <AboutContent />
        <Fotter />
    </div>
  )
}

export default About