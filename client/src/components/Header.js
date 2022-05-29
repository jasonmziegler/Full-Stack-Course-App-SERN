import React from 'react';

export default class Header extends React.PureComponent {
    render() {
        return(
            <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Team Treehouse Final Project - Course App
        </p>
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
</header>
        )
    }
}
