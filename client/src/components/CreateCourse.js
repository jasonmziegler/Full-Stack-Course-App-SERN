import React, { useState } from 'react';

import Form from './Form';

import axios from 'axios';

// Adapted from https://stackoverflow.com/questions/44877821/how-to-navigate-on-path-by-button-click-in-react-router-v4
//https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
import { useNavigate } from 'react-router-dom';

export default function CreateCourse() {
    let navigate = useNavigate();

    // state = {
    //     courseTitle: '',
    //     courseDescription: '',
    //     materialsNeeded: '',
    //     estimatedTime: '',
    //     userId: 1,
    //     errors: [],
    //   }
    
    const [courseTitle, setCourseTitle] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [materialsNeeded, setMaterialsNeeded] = useState("");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [userId, setUserId] = useState(1);
    const [errors, setErrors] = useState([]);

    // const change = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    
    //     this.setState(() => {
    //       return {
    //         [name]: value
    //       };
    //     });
    // }

    const submit = () => {
        console.log("Form Submitted");
        // const {
        //     courseTitle,
        //     courseDescription,
        //     userId,
        //     estimatedTime,
        //     materialsNeeded
        //     } = this.state; 
        // // New course payload
    const course = {
        courseTitle,
        courseDescription,
        userId,
        estimatedTime,
        materialsNeeded
        };
    //Post to API create course
    axios.post('http://localhost:5000/api/courses', {
        title: course.firstName,
        description: course.description,
        userId: course.userId,
        estimatedTime: course.estimatedTime,
        materialsNeeded: course.materialsNeeded
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
                return [];
        }
            else if (response.status === 400) {
                return response.json().then(data => {
                    setErrors(data.errors);
                return data.errors;
                });
            }
            else {
                throw new Error();
            }
      })
      .catch(function (error) {
        console.log(error);
         setErrors(error);
      });
    }

    const cancel = () => {
        console.log("Form Cancelled");
        navigate("/");
    }
    

    return (
        <main>
            <div className="wrap">
                <h2>Create Course</h2>
                
                    {(errors.length) ?  
                    <div className="validation--errors">
                        <h3>Validation Errors</h3>
                        <ul>
                            <li>{errors}</li>
                            <li>Please provide a value for "Description"</li>
                        </ul>
                    </div>
                    :
                    ""
                    }
                
                    <Form 
                        cancel={cancel}
                        errors={errors}
                        submit={submit}
                        submitButtonText="Create Course"
                        elements={() => (
                        <React.Fragment>
                            <div className="main--flex">
                            <div>
                                <label htmlFor="courseTitle">Course Title</label>
                                <input 
                                    id="courseTitle" 
                                    name="courseTitle" 
                                    type="text"
                                    value={courseTitle} 
                                    onChange={(e) => setCourseTitle(e.target.value)} 
                                    placeholder="Course Title" />
                                <label htmlFor='user'>User</label>
                                <input
                                    id="user"
                                    name="user"
                                    type="text"
                                    value={userId}
                                    disabled
                                    onChange={(e) => setUserId(e.target.value)}
                                    placeholder={userId} />
                                <label htmlFor="courseDescription">Course Description</label>
                                <textarea 
                                    id="courseDescription" 
                                    name="courseDescription" 
                                    value={courseDescription} 
                                    onChange={(e) => setCourseDescription(e.target.value)} 
                                    placeholder="Course Description" />
                            </div>
                            <div>
                                <label htmlFor="estimatedTime">Estimated Time</label>
                                <input 
                                    id="estimatedTime" 
                                    name="estimatedTime" 
                                    type="text"
                                    value={estimatedTime} 
                                    onChange={(e) => setEstimatedTime(e.target.value)} 
                                    placeholder="Estimated Time" />
                                <label htmlFor="materialsNeeded">Materials Needed</label>
                                <textarea 
                                    id="materialsNeeded" 
                                    name="materialsNeeded"
                                    type="materialsNeeded"
                                    value={materialsNeeded} 
                                    onChange={(e) => setMaterialsNeeded(e.target.value)} 
                                    placeholder="Materials Needed" />
                            </div>
                            </div>
                        </React.Fragment>
                    )} />  
                </div>
        </main>
        )
}
            