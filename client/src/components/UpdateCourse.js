import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');



 const UpdateCourse = (props) => {
  let navigate = useNavigate();
  const  { context } = props;
  const params = useParams();

  // console.log("Context: ", context);

  const credentials = {
    'username': context.authenticatedUser.emailAddress,
    'password': context.authenticatedUser.password
  }
  // Tried to get course data but promise was pending 
  // console.log("Credentials: ", credentials);
  // const courseDetails = context.data.getCourse(params.id);
  // console.log("courseDetails", courseDetails);
  
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [userId, setUserId] = useState(1);
  const [courseDescription, setCourseDescription] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [materialsNeeded, setMaterialsNeeded] = useState("");
  const [errors, setErrors] = useState([]);

  function fetchCourseDetailsHandler() {
    //setCourse({courseId: params.id});
    setIsLoading(true);
            setError(null);
            axios.get(`http://localhost:5000/api/courses/${params.id}`)
            .then( (response) => {
                // handle success
                console.log("Axios Response", response.data);
                let course = response.data;
                setCourseTitle(course.title);
                setUserId(context.authenticatedUser.id);
                setCourseDescription(course.description);
                setEstimatedTime(course.estimatedTime);
                setMaterialsNeeded(course.materialsNeeded);
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
                setError(error);
            })
            .then(function () {
                setIsLoading(false);
            });
            console.log("Course: ", course);

  }
 
  useEffect( () => {
      console.log('UseEffect');
      fetchCourseDetailsHandler();
  }, []);

  console.log("Update Course:", course);

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
                            <h3 className="course--detail--title">
                                Course
                            </h3>
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
                            <textarea 
                              id="courseDescription" 
                              name="courseDescription" 
                              
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
                              <textarea 
                              id="materialsNeeded" 
                              name="materialsNeeded"
                              
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
