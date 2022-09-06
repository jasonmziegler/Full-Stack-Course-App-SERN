import React, { useState } from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';

// NEED TO TURN INTO AN ARROW FUNCTION not a class component but a "Arrow Function Component"
// Need to use "useState" 
// Need to use useNavigate
const  SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // state = {
  //     username: '',
  //     password: '',
  //     errors: [],
  //   }
  // render() { 
  //     const {
  //         username,
  //         password,
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

  const submit = () => {
    console.log("Form Submitted");
  }

  const cancel = () => {
    console.log("Form Cancelled");
  }
  
  return (
    <main>
      <div className="form--centered">
          <h2>Sign In</h2>
          <Form 
            cancel={cancel}
            errors={errors}
            submit={submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
                  <label htmlFor="emailAddress">Email Address</label>
                  <input 
                  id="username" 
                  name="username" 
                  type="text"
                  value={username} 
                  onChange={(e) => {setUsername(e.target.value)}} 
                  placeholder="User Name" />
                  <label htmlFor="password">Password</label>
                  <input 
                  id="password" 
                  name="password"
                  type="password"
                  value={password} 
                  onChange={(e) => {setPassword(e.target.value)}} 
                  placeholder="Password" />                
              </React.Fragment>
            )} 
          />
          <p>Don't have a user account? Click here to <Link to="/sign-up">sign up</Link>!</p>
      </div>
    </main>
  )
}

export default SignIn;