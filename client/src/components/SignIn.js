import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class SignIn extends Component {
    render() { 
        return (
            <main>
                <div className="form--centered">
                    <h2>Sign In</h2>
                    
                    {/* <form> */}
                        <label htmlFor="emailAddress">Email Address</label>
                        {/* <input id="emailAddress" name="emailAddress" type="email" value=""> */}
                        <label htmlFor="password">Password</label>
                        {/* <input id="password" name="password" type="password" value=""> */}
                        <button className="button" type="submit">Sign In</button><button className="button button-secondary" onClick="event.preventDefault(); location.href='index.html';">Cancel</button>
                    {/* </form> */}
                    <p>Don't have a user account? Click here to <Link to="/sign-up">sign up</Link>!</p>
                    
                </div>
            </main>
        )
    }
}

export default SignIn;