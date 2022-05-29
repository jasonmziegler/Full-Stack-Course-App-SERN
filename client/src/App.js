import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

//import logo from './logo.svg';
import './styles/App.css';

import Header from './components/Header';
import Courses from './components/Courses';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' component={Courses} />
      </Routes>
    </Router>
      
    
  );
}

export default App;
