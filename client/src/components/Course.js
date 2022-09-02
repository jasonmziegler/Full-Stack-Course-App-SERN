import React, { Component } from "react";
import { Link } from "react-router-dom";

class Course extends Component {
    render(props) {
        return(
            <Link className="course--module course--link" to={`/courses/${this.props.id}`}>
              <h2 className="course--label">Course</h2>
              <h3 className="course--title">{this.props.title}</h3>
          </Link>
        )
    }
}

export default Course;