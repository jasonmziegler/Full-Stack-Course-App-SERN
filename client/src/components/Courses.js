import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import Course from './Course';

import { v4 as uuidv4 } from 'uuid';

const Courses = (props) => {
  
  const  { context } = props;
  const [loading, setLoading] = useState(true);
  const [courses, updateCourses] = useState([]);

//adapted from https://dev.to/darkmavis1980/fetching-data-with-react-hooks-and-axios-114h

const fetchCoursesHandler = () => {
  setLoading(true);
  context.data.getCourses()
  .then(data => {
    console.log(data);
    updateCourses(data);
    setLoading(false);
  })
  .catch((error => {
    console.error(error.message);
  }));
}

  useEffect(() => {

    fetchCoursesHandler();
    
  }, []);

    return (
    
      <main>
        {loading && <div>Loading</div>}
        {!loading && (
          <div className="wrap main--grid">
            {courses.map(course => (<Course id={course.id} title={course.title} key={uuidv4()}/>))}
            <Link className="course--module course--add--module" to="/courses/create" >
              <span className="course--add--title">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                  New Course
              </span>
          </Link>
          </div>)
        }  
      </main>
    );
  }


export default Courses;


// OLD CODE
// constructor() {
  //   super();
  //   this.state = {
  //     courses: [],
  //   };
  // }
  // componentDidMount() {
  //   // Make a request for a user with a given ID
  //   axios.get('http://localhost:5000/api/courses/')
  //     .then( (response) => {
  //       // handle success
  //       //console.log(response);
  //       this.setState({
  //                 courses: response.data,
  //       });
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  //   }

  // render() {
  //   console.log('Courses: ', this.state.courses);
  //   let courses = this.state.courses;
  //const axios = require('axios');