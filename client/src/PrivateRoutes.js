// Adapted from Basic Authentication Course
// https://teamtreehouse.com/library/react-authentication/protect-routes-that-require-authentication
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// import { Consumer } from './Context';

 const PrivateRoutes = (props) => {
  // import context and use here?
  let auth = {'token': false}
    return (
        auth.token ? <Outlet/> : <Navigate to='/sign-in'/>
    );
}
         

export default PrivateRoutes;