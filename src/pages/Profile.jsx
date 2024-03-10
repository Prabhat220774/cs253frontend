import React, { useState } from 'react';
import img from '../components/Faculty/users.png';
import { useNavigate } from 'react-router-dom';
import './profile.css';

function Profile() {
    const [areasOfInterest, setAreasOfInterest] = useState('ML and AI'); 
    const [isEditing, setIsEditing] = useState(false); 

    const handleInterestChange = (event) => {
        setAreasOfInterest(event.target.value); 
    };

    const handleEditClick = () => {
        setIsEditing(true); 
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };
    const navigate = useNavigate();

    const handleDetailsClick =() => {
        navigate('/ProjectDesc');
    };
    const projectHistory = [
        { serial: 1, projectName: 'Project A', status: 'Accepted', professor: 'Dr. Smith', details: 'Lorem ipsum dolor sit amet.' },
        { serial: 2, projectName: 'Project B', status: 'Rejected', professor: 'Dr. Johnson', details: 'Consectetur adipiscing elit.' },
        { serial: 3, projectName: 'Project C', status: 'Accepted', professor: 'Dr. Patel', details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ];

    return (
        <div className="container9">
            <div className="row">
                <div className="col-md-3">
                    <img src={img} alt="student pic" className="profile-img" />
                </div>
                <div className="col-md-9">
                    <div className="profile-info">
                        <div className="profile-info-item">
                            <h3>Name: Nasar</h3>
                        </div>
                        <div className="profile-info-item">
                            <h3>Roll No: 2201234</h3>
                        </div>
                        <div className="profile-info-item">
                            <h3>Email Id: nasar@iitk.ac.in</h3>
                        </div>
                        <div className="profile-info-item">
                            <h3>Department: Computer Science</h3>
                        </div>
                        <div className="profile-info-item">
                            <h3>Areas of Interest:</h3>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={areasOfInterest}
                                    onChange={handleInterestChange}
                                    placeholder="Enter your areas of interest"
                                />
                            ) : (
                                <span>{areasOfInterest}</span>
                            )}
                            {isEditing ? (
                                <button onClick={handleSaveClick}>Save</button>
                            ) : (
                                <button onClick={handleEditClick}>Edit</button>
                            )}
                        </div>
                        <div className="profile-info-item">
                            <h3>Old Password:</h3>
                            <input type="password" placeholder="Enter old password" />
                        </div>
                        <div className="profile-info-item">
                            <h3>Change Password:</h3>
                            <input type="password" placeholder="Enter new password" />
                            <button>Change</button>
                        </div>

                        {/* Project History Table */}
                        <div className="table-container">
                            <h2>Projects History</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Serial Number</th>
                                        <th>Project Name</th>
                                        <th>Accepted/Rejected</th>
                                        <th>Professor Name</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Sample table data */}
                                    <tr>
                                        <td>1</td>
                                        <td>Project A</td>
                                        <td>Accepted</td>
                                        <td>Prof. X</td>
                                        <td><button onClick={() => handleDetailsClick()}>Details</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Project B</td>
                                        <td>Rejected</td>
                                        <td>Prof. Y</td>
                                        <td><button onClick={() => handleDetailsClick()}>Details</button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Project C</td>
                                        <td>Accepted</td>
                                        <td>Prof. Z</td>
                                        <td><button onClick={() => handleDetailsClick()}>Details</button></td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;