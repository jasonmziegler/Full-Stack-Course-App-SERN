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

// TODO: Connect the UserSignUp Component to Context
// New import
import withContext from './Context';
const SignUpWithContext = withContext(SignUp);
const SignInWithContext = withContext(SignIn);

class App extends Component {
  render(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Courses />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/sign-in' element={<SignInWithContext />} />
        <Route path='/sign-up' element={<SignUpWithContext />} />        
        <Route path='/courses/create' element={<CreateCourse />} />
        <Route path='/courses/:id/update' element={<UpdateCourse />} />
        <Route path='/courses/:id' element={<CourseDetail />} />
        <Route path='/error' element={<Error />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path='/forbidden' element={<Forbidden />} />
      </Routes>
    </Router>
      
    
  );
}
}

export default App;
