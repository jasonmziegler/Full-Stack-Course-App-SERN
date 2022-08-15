import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Courses extends Component {
  render() {
    return (
      <main>
            <div class="wrap main--grid">
                {/* <a class="course--module course--link" href="course-detail.html"> */}
                <Link className="course--module course--link" to="/course-detail">
                    <h2 class="course--label">Course</h2>
                    <h3 class="course--title">Build a Basic Bookcase</h3>
                </Link>
                {/* </a> */}
                {/* <a class="course--module course--link" href="course-detail.html"> */}
                <Link className="course--module course--link" to="/course-detail">
                    <h2 class="course--label">Course</h2>
                    <h3 class="course--title">Learn How to Program</h3>
                    </Link>
                {/* </a> */}
                {/* <a class="course--module course--link" href="course-detail.html"> */}
                <Link className="course--module course--link" to="/course-detail">
                    <h2 class="course--label">Course</h2>
                    <h3 class="course--title">Learn How to Test Programs</h3>
                </Link>    
                {/* </a> */}
                {/* <a class="course--module course--add--module" href="create-course.html"> */}
                <Link className="course--module course--add--module" to="/course-detail">
                    <span class="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" class="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                </Link>
                {/* </a> */}
            </div>
        </main>
    );
  }
}

export default Courses;