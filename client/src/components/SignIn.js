import React, { useState } from 'react';
import Form from './Form';
import { Link, useNavigate } from 'react-router-dom';

// NEED TO TURN INTO AN ARROW FUNCTION not a class component but a "Arrow Function Component"
// Need to use "useState" 
// Need to use useNavigate
const  SignIn = (props) => {
  const  { context } = props;
  let navigate = useNavigate();
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
    context.actions.signIn(username, password)
    //Get the value out of the returned promise by chaining a then() method to signIn:
    .then( user => {
      if (user === null) {
        setErrors(() => {
          return { errors: [ 'Sign-in was unsuccessful' ] };
        });
      } else {
        navigate("/");
        console.log(`SUCCESS! ${username} is now signed in!`);
     }
    })
    // chain the catch() method to the promise sequence to handle a rejected promise returned by signIn().
    .catch(err => {
      console.log(err);
      navigate("/error");
    })
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