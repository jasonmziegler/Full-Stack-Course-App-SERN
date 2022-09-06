import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';


import Form from './Form';

// import axios from 'axios';
// TODO: convert to a functional component and use State Hook useState to manage state
const SignUp = (props) => {
  // console.log("Props: ", props);
  const  { context } = props;
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // const change = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;

  //   this.setState(() => {
  //     return {
  //       [name]: value
  //     };
  //   });
  // }
  
  const submit = (props) => {
    console.log("Form Submitted");
    //This is undefined going to try to make global?
    // const  { context } = props;
    console.log(context);
    // const { context } = this.props;
    // Adapted from https://teamtreehouse.com/library/react-authentication/implementing-basic-authentication/implement-the-sign-up-form
    // const {
    //     firstName,
    //     lastName,
    //     emailAddress,
    //     password,
    //     } = this.state; 

    // New user payload
    const user = {
        firstName,
        lastName,
        emailAddress,
        password,
        };
    
    context.data.createUser(user)
    .then( errors => {
      if (errors.length) {
        setErrors({ errors });
      } else {
        console.log(`${user.emailAddress} is successfully signed up and authenticated!`);
        navigate("/");
      }
    }) 
    .catch( err => { 
      console.log(err);
      // this.props.history.push('/error'); // push to history stack
      navigate('/error');
    });   
  }

  const cancel = () => {
    console.log("Form Cancelled");
  }

      return (
          <main>
              <div className="form--centered">
                  <h2>Sign Up</h2>
                  <Form 
                    cancel={cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText="Sign Up"
                    elements={() => (
                    <React.Fragment>
                      <label htmlFor="firstName">First Name</label>
                      <input 
                          id="firstName" 
                          name="firstName" 
                          type="text"
                          value={firstName} 
                          onChange={(e) => setFirstName(e.target.value)} 
                          placeholder="First Name" />
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                          id="lastName" 
                          name="lastName" 
                          type="text"
                          value={lastName} 
                          onChange={(e) => setLastName(e.target.value)} 
                          placeholder="Last Name" />
                      <label htmlFor="emailAddress">Email Address</label>
                      <input 
                          id="emailAddress" 
                          name="emailAddress" 
                          type="text"
                          value={emailAddress} 
                          onChange={(e) => setEmailAddress(e.target.value)} 
                          placeholder="Email Address" />
                      <label htmlFor="password">Password</label>
                      <input 
                          id="password" 
                          name="password"
                          type="password"
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)} 
                          placeholder="Password" />
                    </React.Fragment>
                  )}/>
                <p>Already have a user account? Click here to <Link to='/sign-in'>sign in</Link>!</p>
              </div>
          </main>
      )
  }
    


export default SignUp;