import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {

    render() {
        return(
            <div className="header">
                <div className="bounds">
                <h1 className="header--logo">TeamTreeHouse Final Project - Course App</h1>
                
                <nav>
                                        
                    <React.Fragment>
                        <span>Welcome, UserName!</span>
                        <Link to="/">Sign Out</Link>
                        <Link className="signup" to="/">Sign Up</Link>
                        <Link className="signin" to="/">Sign In</Link>
                    </React.Fragment>
                    
                </nav>
                </div>
            </div>
        )
    }
}
