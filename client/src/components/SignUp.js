import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Form from './Form';

import axios from 'axios';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: [],
      }
    render() {
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
        // From (Data.js) in Basic Authentication course
        // const response = await this.api('/users', 'POST', user);
        // if (response.status === 201) {
        //     return [];
        // }
        // else if (response.status === 400) {
        //     return response.json().then(data => {
        //     return data.errors;
        //     });
        // }
        // else {
        //     throw new Error();
        // }
        axios.post('http://localhost:5000/api/users', {
            firstName: user.firstName,
            lastName: user.lastName,
            emailAddress: user.emailAddress,
            password: user.password
          })
          .then(function (response) {
            console.log(response);
            if (response.status === 201) {
                    return [];
            }
                else if (response.status === 400) {
                    return response.json().then(data => {
                    return data.errors;
                    });
                }
                else {
                    throw new Error();
                }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    
      cancel = () => {
        console.log("Form Cancelled");
      }
}

export default SignUp;