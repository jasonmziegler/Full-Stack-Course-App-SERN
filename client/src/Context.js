// Adapted from https://teamtreehouse.com/library/react-authentication/set-up-user-registration in Treehouse Course
// Using context to provide the Data API Utility methods throughout the app (signIn, signOut, getUser, deleteUser, deleteCourse, etc)
import React, { Component } from 'react';
import Data from './Data'; // import helper functions from Data.js
const Context = React.createContext(); 

export class Provider extends Component {

  constructor() {
    super();
    this.data = new Data(); //Initialize a new instance of the Data class 
  }

  render() {
    const value = {
      data: this.data,
    }
    return ( 
      // value represents an object containing the context to be shared throughout the component tree.
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    );
  }

  
  signIn = async () => {

  }

  signOut = () => {

  }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}

