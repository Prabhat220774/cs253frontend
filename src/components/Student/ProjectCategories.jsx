import React from  'react'
import ProjectDetails from './projectdetails'
import { Link } from 'react-router-dom'
import './projectcard.css'

function Projectcard(props){
      return (
        <div className="out-box">
        <div className='prof-box'>
          <div className="profimage">
            {/* <img className="prof-pic" src={props.image} alt="" /> */}
            <div className="prof-email"><h2>{props.email}</h2></div>
            </div>
            <div className="project-details">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            </div>
            <div className='style'>
                <p id="registered-students"><span>Students Registered:</span>{props.studentsRegistered}/{props.maxStudents}</p>
                <Link className='Link' to="/ProjectDesc">Learn More</Link>
            </div>
        </div> 
        </div>
      ); 
}

function ProjectCategory() {
    return (
      <div className='projectarrange'>
          {
              ProjectDetails.map((item) => {
       if(item.studentRegistered<item.maxStudents) {  return (
                 <Projectcard 
                  title = {item.title} 
                  email = {item.email}
                  description ={item.description}
                  image = {item.image}
                  studentsRegistered={item.studentRegistered}
                  maxStudents={item.maxStudents}
                 />
                )}
              })
          }
      
      </div>
    )
  }
  
  export default ProjectCategory;