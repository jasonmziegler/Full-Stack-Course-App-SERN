import React, { Component } from 'react';

import { Link } from "react-router-dom";

const axios = require('axios');

class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
    };
  }
  componentDidMount() {
  

// Make a request for a user with a given ID
axios.get('http://localhost:5000/api/courses/')
  .then( (response) => {
    // handle success
    //console.log(response);
    this.setState({
              courses: response.data,
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

    //TODO INSTALL AXIOS and try with AXIOS
    // THIS Creates a READABLE Stream
  //   fetch('http://localhost:5000/api/courses/')
  //   .then(response => {
  //     // console.log('ResponseData: ',responseData);
  //     this.setState({
  //       courses: response,
  //     });
  //   })
  //   .catch(error => {
  //     console.log('Error', error);
  //   });


   }

// THIS IS CODE FROM https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams
//     // Fetch the original image 
// fetch('http://localhost:5000/api/courses/')
// // Retrieve its body as ReadableStream
// .then((response) => {
//   const reader = response.body.getReader();
//   return new ReadableStream({
//     start(controller) {
//       return pump();
//       function pump() {
//         return reader.read().then(({ done, value }) => {
//           // When no more data needs to be consumed, close the stream
//           if (done) {
//             controller.close();
//             return;
//           }
//           // Enqueue the next data chunk into our target stream
//           controller.enqueue(value);
//           return pump();
//         });
//       }
//     }
//   })
// })
// // Create a new response out of the stream
// .then((stream) => new Response(stream))
// // Create an object URL for the response
// .then((response) => {
//   console.log(response);
//   response.blob()})
// .then((blob) => {
//   const reader = new FileReader();
//   reader.readAsArrayBuffer(blob)
// })
// // Update image
// .then((courses) => {
//   this.setState({
//         courses,
//       });
//   })
// .catch((err) => console.error(err));
//   }
  render() {
    console.log('Courses: ', this.state.courses);
    let courses = this.state.courses;
    return (
      
      <main>
        <div className="wrap main--grid">
        {
          courses.map( course => (
            <Link className="course--module course--link" to="/course-detail">
              <h2 className="course--label">Course</h2>
              <h3 className="course--title">{course.title}</h3>
          </Link>
          ))
        }
        
          
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