import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/courses/')
    .then(response => response.json())
    .then(responseData => {
      // console.log('ResponseData: ',responseData);
      this.setState({
        courses: responseData,
      });
    })
    .catch(error => {
      console.log('Error', error);
    });
  }
  render() {
    console.log('Courses: ', this.state.courses);
    return (
      
      <main>
        <div className="wrap main--grid">
          <Link className="course--module course--link" to="/course-detail">
              <h2 className="course--label">Course</h2>
              <h3 className="course--title">Display Title Here</h3>
          </Link>
          <Link className="course--module course--add--module" to="/create-course">
              <span className="course--add--title">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                  New Course
              </span>
          </Link>
      </div>
      </main>
      
    );
  }
}

export default Courses;