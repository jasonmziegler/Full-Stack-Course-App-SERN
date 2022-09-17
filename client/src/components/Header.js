import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {

    render() {
        const { context } = this.props;
        const authUser = context.authenticatedUser;
        return(
            <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><Link to="/">Courses</Link></h1>
                <nav>
                {authUser ? 
                    <React.Fragment>
                        <ul className="header--signedout">
                            <span>Welcome, {authUser.firstName}!</span>
                            &nbsp;
                            <Link to="/sign-out">Sign Out</Link>
                        </ul>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <ul className="header--signedout">
                            <Link to="/sign-up">Sign Up</Link>
                            &nbsp;
                            <Link to="/sign-in">Sign In</Link>
                        </ul>
                    </React.Fragment>
                }          
                </nav>
            </div>
        </header>
        )
    }
}
