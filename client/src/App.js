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
import SignOut from './components/SignOut';
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
import PrivateRoutes from './PrivateRoutes';

const SignUpWithContext = withContext(SignUp);
const SignInWithContext = withContext(SignIn);
const SignOutWithContext = withContext(SignOut);
const HeaderWithContext = withContext(Header);
const PrivateRoutesWithContext = withContext(PrivateRoutes);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CreateCourseWithContext = withContext(CreateCourse);
const CoursesWithContext = withContext(Courses);


class App extends Component {
  render(){
  return (
    <Router>
      <HeaderWithContext />
      <Routes>
        <Route exact path='/' element={<CoursesWithContext />} />
        <Route path='/courses' element={<CoursesWithContext />} />
        <Route path='/sign-in' element={<SignInWithContext />} />
        <Route path='/sign-up' element={<SignUpWithContext />} />   
        <Route path='/sign-out' element={<SignOutWithContext />} />        
        {/* <Route path='/courses/create' element={<CreateCourse />} /> */}
        <Route element={<PrivateRoutesWithContext/>}>
          <Route path='/courses/create' element={<CreateCourseWithContext />} />
          <Route path='/courses/:id/update' element={<UpdateCourseWithContext />} />
        </Route>
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
