import React from 'react'
import Navbar from '../components/Navbar'
import Fotter from '../components/Fotter'
import Heroimage2 from '../components/Heroimage2'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage2 heading="PROJECTS." text="Some of my most recent works" />
        <Work />
        <Fotter/>
    </div>
    
  )
}
export default Project