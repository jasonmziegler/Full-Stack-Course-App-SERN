import React, { Component } from 'react';

import { Link } from 'react-router-dom';


import Form from './Form';

// import axios from 'axios';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: [],
      }
    render(props) {
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            errors,
          } = this.state;
        return (
            <main>
                <div className="form--centered">
                    <h2>Sign Up</h2>
                    <Form 
                        cancel={this.cancel}
                        errors={errors}
                        submit={this.submit}
                        submitButtonText="Sign Up"
                        elements={() => (
                        <React.Fragment>
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                id="firstName" 
                                name="firstName" 
                                type="text"
                                value={firstName} 
                                onChange={this.change} 
                                placeholder="First Name" />
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                id="lastName" 
                                name="lastName" 
                                type="text"
                                value={lastName} 
                                onChange={this.change} 
                                placeholder="Last Name" />
                            <label htmlFor="emailAddress">Email Address</label>
                            <input 
                                id="emailAddress" 
                                name="emailAddress" 
                                type="text"
                                value={emailAddress} 
                                onChange={this.change} 
                                placeholder="Email Address" />
                            <label htmlFor="password">Password</label>
                            <input 
                                id="password" 
                                name="password"
                                type="password"
                                value={password} 
                                onChange={this.change} 
                                placeholder="Password" />
                        </React.Fragment>
                        )} />
                                        <p>Already have a user account? Click here to <Link to='/sign-in'>sign in</Link>!</p>
                </div>
            </main>
        )
    }
    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState(() => {
          return {
            [name]: value
          };
        });
      }
    
      submit = () => {
        console.log("Form Submitted");
        const  { context } = this.props;
        console.log(context);
        // const { context } = this.props;
        // Adapted from https://teamtreehouse.com/library/react-authentication/implementing-basic-authentication/implement-the-sign-up-form
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            } = this.state; 

        // New user payload
        const user = {
            firstName,
            lastName,
            emailAddress,
            password,
            };

        // TODO: Move this to Data.js and now once this component uses context
        // context.data.createUser(user);
        // use .then() to handle the promise? This has been tricky with Axios. the example uses fetch ( never been able to use Fetch successfully)
        // inside then handle errors, after then() use.catch to handle rejected promises inside catch block push /error to history stack this.props.history.push('/error')
        // TODO: convert to a functional component and use State Hook useState to manage state
        // axios.post('http://localhost:5000/api/users', {
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     emailAddress: user.emailAddress,
        //     password: user.password
        //   })
        context.data.createUser(user)
        .then( errors => {
          if (errors.length) {
            this.setState({ errors });
          } else {
            console.log(`${user.emailAddress} is successfully signed up and authenticated!`);
          }
        }) 
        .catch( err => { 
          console.log(err);
          // this.props.history.push('/error'); // push to history stack
          console.log("Props: ",this.props);
        });   
      }
    
      cancel = () => {
        console.log("Form Cancelled");
      }
}

export default SignUp;