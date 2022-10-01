// Adapted from https://teamtreehouse.com/library/react-authentication/set-up-user-registration in Treehouse Course
// Using context to provide the Data API Utility methods throughout the app (signIn, signOut, getUser, deleteUser, deleteCourse, etc)
import React, { Component } from 'react';
import Data from './Data'; // import helper functions from Data.js
import Cookies from 'js-cookie';

const Context = React.createContext(); 

export class Provider extends Component {
  // We need to track whether or not a user has been authenticated so we initialize an authenticatedUser state in the Provider class. Set the default state to null:
  // state = {
  //   authenticatedUser: null
  // };

  constructor() {
    super();
    this.data = new Data(); //Initialize a new instance of the Data class 

    // Retrieve the value of the cookie using Cookies.getJSON()
    this.cookie = Cookies.get('authenticatedUser');
    // Set initial state of the Provider class to the valaue stored in the authenticatedUser cooke or null
    this.state = {
      authenticatedUser: this.cookie ? JSON.parse(this.cookie) : null
    };

  }

  render() {
    const { authenticatedUser } = this.state;
    const value = {
      authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut

      }
    }
    return ( 
      // value represents an object containing the context to be shared throughout the component tree.
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    );
  }

  // From Treehouse Basic Authentication course: The signIn function is an asynchronous function that takes a username and password as arguments. signIn uses those credentials to call the getUser() method in Data.js, which makes a GET request to the protected /users route on the server and returns the user data.
  signIn = async (username, password) => {
    //  From Treehouse Basic Authentication course: initialize a variable named user and set the value to await a promise returned by this.data.getUser()
    const user = await this.data.getUser(username, password);
    // If the value of user is not null, update the authenticatedUser state to the value of user:
    if (user !== null) {
      console.log("Context SignIn User not Null line 42: ", user);
      this.setState(() => {
        return {
          authenticatedUser: user,
        };
      });
      // Set Cookie with User login data
      Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });
    }
    return user;
  }

  signOut = () => {
    console.log('Context signOut function Called')
    this.setState(() => {
      return {
        authenticatedUser: null,
      };
    });
    Cookies.remove('authenticatedUser');
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

