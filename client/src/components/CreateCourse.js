import React, { Component } from 'react';

import Form from './Form';

import axios from 'axios';

// Adapted from https://stackoverflow.com/questions/44877821/how-to-navigate-on-path-by-button-click-in-react-router-v4
//https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
import { useNavigate } from 'react-router-dom';

class CreateCourse extends Component {
    state = {
        courseTitle: '',
        courseDescription: '',
        materialsNeeded: '',
        estimatedTime: '',
        userId: 1,
        errors: [],
      }
    render() {
        const {
            courseTitle,
            courseDescription,
            materialsNeeded,
            estimatedTime,
            userId,
            errors,
          } = this.state;
        return (
            <main>
                <div className="wrap">
                    <h2>Create Course</h2>
                    <div className="validation--errors">
                        <h3>Validation Errors</h3>
                        <ul>
                            <li>Please provide a value for "Title"</li>
                            <li>Please provide a value for "Description"</li>
                        </ul>
                    </div>
                    
                        <Form 
                            cancel={this.cancel}
                            errors={errors}
                            submit={this.submit}
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
                                        onChange={this.change} 
                                        placeholder="Course Title" />
                                    <label htmlFor='user'>User</label>
                                    <input
                                        id="user"
                                        name="user"
                                        type="text"
                                        value={userId}
                                        disabled
                                        onChange={this.change}
                                        placeholder={userId} />
                                    <label htmlFor="courseDescription">Course Description</label>
                                    <textarea 
                                        id="courseDescription" 
                                        name="courseDescription" 
                                        value={courseDescription} 
                                        onChange={this.change} 
                                        placeholder="Course Description" />
                                </div>
                                <div>
                                    <label htmlFor="estimatedTime">Estimated Time</label>
                                    <input 
                                        id="estimatedTime" 
                                        name="estimatedTime" 
                                        type="text"
                                        value={estimatedTime} 
                                        onChange={this.change} 
                                        placeholder="Estimated Time" />
                                    <label htmlFor="materialsNeeded">Materials Needed</label>
                                    <textarea 
                                        id="materialsNeeded" 
                                        name="materialsNeeded"
                                        type="materialsNeeded"
                                        value={materialsNeeded} 
                                        onChange={this.change} 
                                        placeholder="Materials Needed" />
                                </div>
                                </div>
                            </React.Fragment>
                        )} />  
                    </div>
            </main>
            )
        }

        change = (event) => {
            const name = event.target.name;
            const value = event.target.value;
        
            this.setState(() => {
              return {
                [name]: value
              };
            });
        }

        submit = () => {
            console.log("Form Submitted");
            const {
                courseTitle,
                courseDescription,
                userId,
                estimatedTime,
                materialsNeeded
                } = this.state; 
            // New course payload
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
                    return data.errors;
                    });
                }
                else {
                    throw new Error();
                }
          })
          .catch(function (error) {
            console.log(error);
          });
        }

        
        cancel = () => {
        console.log("Form Cancelled");
        useNavigate("/");
        }

    }

export default CreateCourse;       
            