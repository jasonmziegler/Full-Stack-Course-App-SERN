import React, { Component } from 'react';

import Form from './Form';

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
                    <div className="main--flex">
                        <Form 
                            cancel={this.cancel}
                            errors={errors}
                            submit={this.submit}
                            submitButtonText="Create Course"
                            elements={() => (
                            <React.Fragment>
                                <div>
                                    <label htmlFor="courseTitle">Course Title</label>
                                    <input 
                                        id="courseTitle" 
                                        name="courseTitle" 
                                        type="text"
                                        value={courseTitle} 
                                        onChange={this.change} 
                                        placeholder="Course Title" />
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
                            </React.Fragment>
                        )} />
                            
                    </div>
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
        }
        
        cancel = () => {
        console.log("Form Cancelled");
        }

    }

export default CreateCourse;       
            