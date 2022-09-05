import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {

    render() {
        return(
            <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><Link to="/">Courses</Link></h1>
                <nav>
                    <ul className="header--signedout">
                        <Link to="/sign-up">Sign Up</Link>
                        &nbsp;
                        <Link to="/sign-in">Sign In</Link>
                    </ul>
                </nav>
            </div>
        </header>
        )
    }
}
