import "./WorkCardStyles.css"
import React from 'react' 
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"


const Work= () => {
  return (
    <div className="Work-container">
        <h1 className="project-Heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind)=>{
                return(
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}/>
                );
            })}
        </div>
    </div>
  )
}

export default Work