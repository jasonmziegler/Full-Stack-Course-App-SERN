import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Form from './Form';

class SignUp extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        errors: [],
      }
    render() {
        const {
            name,
            username,
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
                                id="name" 
                                name="name" 
                                type="text"
                                value={name} 
                                onChange={this.change} 
                                placeholder="Name" />
                            <label htmlFor="emailAddress">Email Address</label>
                            <input 
                                id="username" 
                                name="username" 
                                type="text"
                                value={username} 
                                onChange={this.change} 
                                placeholder="User Name" />
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
      }
    
      cancel = () => {
        console.log("Form Cancelled");
      }
}

export default SignUp;