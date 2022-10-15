import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from './Form';

import { useNavigate } from 'react-router-dom';

 const UpdateCourse = (props) => {
  let navigate = useNavigate();
  const  { context } = props;
  console.log("Context: ", context);
  const credentials = {
    'username': context.authenticatedUser.emailAddress,
    'password': context.authenticatedUser.password
  }
    console.log("Credentials: ", credentials);
  const params = useParams();
  const [courseTitle, setCourseTitle] = useState("");
  const [userId, setUserId] = useState(1);
  const [courseDescription, setCourseDescription] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [materialsNeeded, setMaterialsNeeded] = useState("");
  const [errors, setErrors] = useState([]);
    
  
    const submit = () => {
      console.log('Update Course button Clicked!');
      const course = {
        courseTitle,
        courseDescription,
        userId,
        estimatedTime,
        materialsNeeded
        };
      const body = {
        title: course.firstName,
        description: course.description,
        userId: course.userId,
        estimatedTime: course.estimatedTime,
        materialsNeeded: course.materialsNeeded
      }

    context.data.updateCourse(body, params.id, credentials)
    .catch(function (error) {
      console.log(error);
       setErrors(error);
    });

    }
  
    const cancel = () => {
      //TODO: need to send back to course detail
      console.log("Cancel Button Clicked");
      navigate(`/courses/${params.id}`);
    }
    return (
        <main>
            <div className="wrap">
            <h2>Update Course</h2>
            
                <div className="main--flex">
                    <Form 
                        cancel={cancel}
                        errors={errors}
                        submit={submit}
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
                                onChange={(e) => {setCourseTitle(e.target.value)}} 
                                placeholder="Course Title" />
                                <label htmlFor='userId'>Logged In User ID</label>
                                <input 
                                id="userId"
                                name="userId"
                                type="text"
                                value={userId}
                                onChange={(e) => {setUserId(e.target.value)}}
                                placeholder="Logged In User ID"
                                disabled
                                />
                                {/* <p>By Joe Smith</p> */}
                            </div>
                            <div>
                            <label htmlFor="courseDescription">Course Description</label>
                            <input 
                              id="courseDescription" 
                              name="courseDescription" 
                              type="text"
                              value={courseDescription} 
                              onChange={(e) => {setCourseDescription(e.target.value)}} 
                              placeholder="Course Description" />
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input 
                              id="estimatedTime" 
                              name="estimatedTime"
                              type="estimatedTime"
                              value={estimatedTime} 
                              onChange={(e) => {setEstimatedTime(e.target.value)}} 
                              placeholder="Estimated Time" />
                              <label htmlFor="materialsNeeded">Materials Needed</label>
                              <input 
                              id="materialsNeeded" 
                              name="materialsNeeded"
                              type="materialsNeeded"
                              value={materialsNeeded} 
                              onChange={(e) => {setMaterialsNeeded(e.target.value)}} 
                              placeholder="Materials Needed" />
                        
                            </div>
                          </React.Fragment>
                        )} />
                </div>
        </div>
        </main>
    );
}

export default UpdateCourse;


  // render() {
    //     const {
    //         courseTitle,
    //         courseDescription,
    //         estimatedTime,
    //         materialsNeeded,
    //         errors,
    //       } = this.state;


    // const change = (event) => {
    //   const name = event.target.name;
    //   const value = event.target.value;
  
    //   this.setState(() => {
    //     return {
    //       [name]: value
    //     };
    //   });
    // }
    //NEED TO: Use Context for API Call
