import React, { useState } from 'react'
import ProjectDetails from './projectdetails'
import './projectdesc.css'
import img from '../Faculty/users.png'
import { click } from '@testing-library/user-event/dist/click'

function ProjectDescCard(props) {
    const [resume, setResume] = useState("none");
    const [clicked, setClicked ] = useState(false)
    const handleClick=()=>{
        if(!clicked)
        setClicked(!clicked)
    }
    return (
        <div className='background'>
            <h1 className="random" style={{ marginTop: "60px" }}></h1>
            <div className='flex1'>
                <div className="left1">
                    <h1 className='projectdesc'>{props.title}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto minima pariatur ratione expedita quod, tempora dolor magni quam dicta! Non magnam adipisci vel odio assumenda earum beatae illo ducimus recusandae doloribus possimus voluptas, cumque accusantium esse quos quidem sapiente quam explicabo numquam eius? Amet consequuntur unde sit voluptatem itaque officiis?</p>
                    <h2 className='projectdesc'>Pre Requisite</h2>
                    <p>{props.Openfor}</p>
                    <h2 style={{ display: "inline-block" }}><a className='styleh' href="" target="_blank">Resources</a></h2>
                    <p style={{ display: "inline-block" }}>(click for resources)</p>
                    <h2 className='projectdesc'>Required Fields</h2>
                     <label htmlFor="resume">Resume:</label>
                    <input
                       type="file"
                       id="resume"
                       name="resume"
                       accept=".pdf"
                       onChange={(event) => setResume(event.target.files[0])}
                    />
                    <p>CPI</p>
                    <h2 className='projectdesc'>Open For</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, exercitationem?</p>
                    <h2>Additional Details</h2>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="right1">
                    <div>
                        <img src={props.img} alt="profimg" /> {/* {props.img} */}
                        <h3 className='profname'>{props.name}</h3>  {/* {props.name} */}
                        <h5 style={{ textAlign: "left" }} className='profid'>Email - {props.id}</h5>  {/* props.id */}
                        <h5 style={{ textAlign: "left" }} >Department - Non-Cse</h5> {/* props.dept */}
                        <h5 style={{ textAlign: "left" }}>Reasearch Work - {props.description}.</h5>
                    </div>
                    <div>
                        <button className='button' onClick={()=>{
                            if(!clicked)
                            setClicked(!clicked)
                        }}>
                            {
                            clicked ? "Requested" : "Request"}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

function ProjectDesc(){
    return (
        <div className='projectarrange'>
            {
                ProjectDetails.map((item) => {
                 return (
                   <ProjectDescCard 
                    title = {item.title}
                    name={item.name} 
                    id = {item.email}
                    description ={item.description}
                    image = {item.image}
                    studentsRegistered={item.studentRegistered}
                    maxStudents={item.maxStudents}
                    resume={item.resume}
                    Openfor={item.Openfor}
                   />
                  )
                })
            }
        
        </div>
      ) 
}

export default ProjectDesc
