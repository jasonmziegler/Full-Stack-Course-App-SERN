import React, { Component } from 'react';

import Form from './Form';

export default class UpdateCourse extends Component {
    state = {
        courseDescription: '',
        password: '',
        errors: [],
      };
    

    render() {
        const {
            courseTitle,
            courseDescription,
            estimatedTime,
            materialsNeeded,
            errors,
          } = this.state;

        return (
            <main>
                <div className="wrap">
                <h2>Update Course</h2>
               
                    <div className="main--flex">
                        <Form 
                            cancel={this.cancel}
                            errors={errors}
                            submit={this.submit}
                            submitButtonText="Update Course"
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
                                    <p>By Joe Smith</p>
                                </div>
                                <div>
                                <label htmlFor="courseDescription">Course Description</label>
                                <input 
                                  id="courseDescription" 
                                  name="courseDescription" 
                                  type="text"
                                  value={courseDescription} 
                                  onChange={this.change} 
                                  placeholder="Course Description" />
                                <label htmlFor="estimatedTime">Estimated Time</label>
                                <input 
                                  id="estimatedTime" 
                                  name="estimatedTime"
                                  type="estimatedTime"
                                  value={estimatedTime} 
                                  onChange={this.change} 
                                  placeholder="Estimated Time" />
                                 <label htmlFor="materialsNeeded">Materials Needed</label>
                                 <input 
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
        );
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
    
      }
    
      cancel = () => {
        //TODO: need to send back to course detail
      }
}
