import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {

    render() {
        return(
            <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><Link to="/">Courses</Link></h1>
                <nav>
                    <ul class="header--signedout">
                        <Link to="/sign-up">Sign Up</Link>
                        <Link to="/sign-in">Sign In</Link>
                    </ul>
                </nav>
            </div>
        </header>
        )
    }
}
