import React, { Component } from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    state = {
        username: '',
        password: '',
        errors: [],
      }
    render() { 
        const {
            username,
            password,
            errors,
          } = this.state;
        return (
            <main>
                <div className="form--centered">
                    <h2>Sign In</h2>
                    <Form 
                        cancel={this.cancel}
                        errors={errors}
                        submit={this.submit}
                        submitButtonText="Sign In"
                        elements={() => (
                            <React.Fragment>
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
                    {/* <form> */}
                        
                        {/* <input id="emailAddress" name="emailAddress" type="email" value=""> */}
                        
                        {/* <input id="password" name="password" type="password" value=""> */}
                        {/* // <button className="button" type="submit">Sign In</button><button className="button button-secondary" onClick="event.preventDefault(); location.href='index.html';">Cancel</button> */}
                    {/* </form> */}
                    <p>Don't have a user account? Click here to <Link to="/sign-up">sign up</Link>!</p>
                    
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

export default SignIn;