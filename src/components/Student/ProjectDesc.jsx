import React, { useState } from 'react'

import './projectdesc.css'

function About() {

    return (
        <div>
            {/* <h1 className="random">This is About page!!</h1> */}

            <div class="project-details-container">
                <h2>Requesting the project</h2>

                <form>
                    <label id='kartik' className='project-form-label' htmlFor="project-name">Your Name:</label>
                    <input
                        type="text"
                        id="project-name"
                        name="project-name"
                    />
                    <label id='kartik' className='project-form-label' htmlFor="Description">Branch:</label>
                    <input
                        type="text"
                        id="Description"
                        name="Description"

                    />
                    <label id='kartik' className='project-form-label' htmlFor="project-name">Cpi:</label>
                    <input
                        type="text"
                        id="project-name"
                        name="project-name"

                    />
                    <label id='kartik' className='project-form-label' htmlFor="prerequisites">Batch:</label>
                    <input
                        type="text"
                        id="prerequisites"
                        name="prerequisites"
                        placeholder="Batches"

                    />
                    <label id='kartik' className='project-form-label' htmlFor="open_for">Any past experience:</label>
                    <input
                        type="text"
                        id="openFor"
                        name="openFor"

                    />

                    <label id='kartik' className='project-form-label' htmlFor="resume">Resume:</label>
                    <input
                        type="text"
                        id="openFor"
                        name="openFor"
                        placeholder="Upload drive link"

                    />



                    <div className="project-buttons">
                        <button className="button" id="cancel-button" >
                            Cancel
                        </button>
                        <button className="button" >
                            Request
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default About