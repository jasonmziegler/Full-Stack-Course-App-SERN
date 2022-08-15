import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

//import logo from './logo.svg';
import './styles/reset.css';
import './styles/global.css';

import Header from './components/Header';
import Courses from './components/Courses';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreateCourse from './components/CreateCourse';
import CourseDetail from './components/CourseDetail';
import UpdateCourse from './components/UpdateCourse';
import Error from './components/Error';
import Forbidden from './components/Forbidden';
import NotFound from './components/NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: []
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
  render(){
    console.log('Course: ', this.state.courses);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Courses />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/create-course' element={<CreateCourse />} />
        <Route path='/update-course' element={<UpdateCourse />} />
        <Route path='/course-detail' element={<CourseDetail />} />
        <Route path='/error' element={<Error />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path='/forbidden' element={<Forbidden />} />
      </Routes>
    </Router>
      
    
  );
}
}

export default App;
